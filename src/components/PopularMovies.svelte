<script lang="ts">
  import MovieCard from "./MovieCard.svelte";

  export let movies: any[];
</script>


<div>
  <h3 class="text-center px-4">Popular Movies</h3>

  <div class="grid grid-cols-auto-fit-250 grid-cols-2 gap-x-4 gap-y-8">
    {#each movies as movie}
      <MovieCard {movie} />
    {/each}
  </div>
</div>