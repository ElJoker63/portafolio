// Servicio reactivo para obtener datos y estrellas en vivo de la API de GitHub.
import { reactive, ref } from 'vue'
import { GITHUB_USER } from '../data/portfolio.js'

// Estado reactivo global en memoria
const repoStars = reactive({})
const userProfile = reactive({
  publicRepos: 164,
  followers: 41,
  following: 87
})
const isSynced = ref(false)
const isSyncing = ref(false)
let fetchPromise = null

/**
 * Consulta la API de GitHub con paginación para obtener todos los repositorios
 * y mapear las estrellas en tiempo real.
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
          repos1.forEach((repo) => {
            if (repo?.name && typeof repo.stargazers_count === 'number') {
              repoStars[repo.name] = repo.stargazers_count
            }
          })
        }
      }

      // Procesa repositorios de la página 2 (necesario para usuarios con >100 repos)
      if (p2Res.status === 'fulfilled' && p2Res.value.ok) {
        const repos2 = await p2Res.value.json()
        if (Array.isArray(repos2)) {
          repos2.forEach((repo) => {
            if (repo?.name && typeof repo.stargazers_count === 'number') {
              repoStars[repo.name] = repo.stargazers_count
            }
          })
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
 * Hook para consumir estrellas y perfil de GitHub en cualquier componente.
 */
export function useGitHub() {
  // Dispara la sincronización en background si aún no se ha ejecutado
  if (!isSynced.value && !isSyncing.value) {
    syncGitHubData()
  }

  function getRepoStars(repoName, fallback = 0) {
    return repoStars[repoName] !== undefined ? repoStars[repoName] : fallback
  }

  return {
    repoStars,
    userProfile,
    isSynced,
    isSyncing,
    getRepoStars,
    syncGitHubData
  }
}
