import type { PageServerLoad } from "../../$types";
export const prerender = true;

import { PUBLIC_API_KEY } from "$env/static/public";

export const load: PageServerLoad = async ({ fetch, params }) => {
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${PUBLIC_API_KEY}&language=en-US&query=${params.id}&page=1&include_adult=false`);
  const data = await res.json();

  console.log(data)

  if (res.ok) {
    return {
      props: {
        searchedMovie: data.results
      }
    }
  }
}
