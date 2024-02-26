<script lang="ts">
  import MovieCard from "./MovieCard.svelte";

  export let movies: any[];
</script>

<h3 class="text-center">Popular Movies</h3>

<div>
  <div>
    {#each movies as movie}
      <MovieCard {movie} />
    {/each}
  </div>
  
</div>