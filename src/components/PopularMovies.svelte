<script lang="ts">
  import MovieCard from "./MovieCard.svelte";

  export let movies: any[];
  console.log(movies[0])
</script>

<h3>Popular Movies</h3>

<div>
  <div>
    {#each movies as movie}
      <h1>{movie.title}</h1>
    {/each}
  </div>
  
</div>