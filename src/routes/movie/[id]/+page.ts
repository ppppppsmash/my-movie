// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
import type { PageServerLoad } from "../../$types"
export const prerender = true;

import { PUBLIC_API_KEY } from "$env/static/public";

export const load: PageServerLoad = async ({ fetch, params }) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${PUBLIC_API_KEY}&language=en-US&page=1`);
  const movieDetail = await res.json();

  console.log(movieDetail)

  if (res.ok) {
    return {
      props: {
        detail: movieDetail
      }
    }
  }
}

