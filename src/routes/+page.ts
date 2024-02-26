// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
import type { PageServerLoad } from "./$types"
export const prerender = true;

import { PUBLIC_API_KEY } from "$env/static/public";

export const load: PageServerLoad = async ({ fetch }) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${PUBLIC_API_KEY}&language=en-US&page=1`)
  const data = await res.json()

  if (res.ok) {
    return {
      props: {
        popular: data.results
      }
    }
  }
}

