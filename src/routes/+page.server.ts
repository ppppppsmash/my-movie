
import { env } from '$env/dynamic/private'
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async ({ fetch }) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${env.API_KEY}&language=en-US&page=1`)
  const data = await res.json()

  if (res.ok) {
    return {
      props: {
        popular: data.results
      }
    }
  }
}
