// Servicio reactivo para obtener datos y estrellas en vivo de la API de GitHub.
import { reactive, ref } from 'vue'
import { GITHUB_USER } from '../data/portfolio.js'

// Estado reactivo global en memoria
const repoStars = reactive({})
const repoPushedAt = reactive({})
const userProfile = reactive({
  publicRepos: 164,
  followers: 41,
  following: 87
})
const isSynced = ref(false)
const isSyncing = ref(false)
let fetchPromise = null

function recordRepo(repo) {
  if (!repo?.name) return
  if (typeof repo.stargazers_count === 'number') {
    repoStars[repo.name] = repo.stargazers_count
    repoStars[repo.name.toLowerCase()] = repo.stargazers_count
  }
  if (repo.pushed_at) {
    repoPushedAt[repo.name] = repo.pushed_at
    repoPushedAt[repo.name.toLowerCase()] = repo.pushed_at
  }
}

/**
 * Consulta la API de GitHub con paginación para obtener todos los repositorios
 * y mapear las estrellas y fechas de commit en tiempo real.
 */
export async function syncGitHubData() {
  if (isSynced.value || isSyncing.value) return fetchPromise

  isSyncing.value = true

  fetchPromise = (async () => {
    try {
      // Consulta en paralelo las páginas de repositorios y el perfil del usuario
      const [p1Res, p2Res, userRes] = await Promise.allSettled([
        fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&page=1`),
        fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&page=2`),
        fetch(`https://api.github.com/users/${GITHUB_USER}`)
      ])

      // Procesa repositorios de la página 1
      if (p1Res.status === 'fulfilled' && p1Res.value.ok) {
        const repos1 = await p1Res.value.json()
        if (Array.isArray(repos1)) {
          repos1.forEach(recordRepo)
        }
      }

      // Procesa repositorios de la página 2 (necesario para usuarios con >100 repos)
      if (p2Res.status === 'fulfilled' && p2Res.value.ok) {
        const repos2 = await p2Res.value.json()
        if (Array.isArray(repos2)) {
          repos2.forEach(recordRepo)
        }
      }

      // Procesa datos de perfil
      if (userRes.status === 'fulfilled' && userRes.value.ok) {
        const user = await userRes.value.json()
        if (user && typeof user.public_repos === 'number') {
          userProfile.publicRepos = user.public_repos
          userProfile.followers = user.followers ?? userProfile.followers
          userProfile.following = user.following ?? userProfile.following
        }
      }

      isSynced.value = true
    } catch (err) {
      // En caso de modo offline o límites de API, se preservan los fallbacks de portfolio.js
      console.warn('[GitHub Sync] No se pudo sincronizar en vivo; usando datos locales:', err)
    } finally {
      isSyncing.value = false
    }
  })()

  return fetchPromise
}

/**
 * Hook para consumir estrellas, fechas de commit y perfil de GitHub en cualquier componente.
 */
export function useGitHub() {
  // Dispara la sincronización en background si aún no se ha ejecutado
  if (!isSynced.value && !isSyncing.value) {
    syncGitHubData()
  }

  function getRepoStars(repoName, fallback = 0) {
    if (!repoName) return fallback
    const key = repoName.toLowerCase()
    return repoStars[repoName] !== undefined
      ? repoStars[repoName]
      : repoStars[key] !== undefined
        ? repoStars[key]
        : fallback
  }

  function getRepoPushedAt(repoName, fallback = null) {
    if (!repoName) return fallback
    const key = repoName.toLowerCase()
    return repoPushedAt[repoName] || repoPushedAt[key] || fallback
  }

  return {
    repoStars,
    repoPushedAt,
    userProfile,
    isSynced,
    isSyncing,
    getRepoStars,
    getRepoPushedAt,
    syncGitHubData
  }
}
