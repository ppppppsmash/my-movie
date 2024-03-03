<script lang="ts">
  import MovieCard from "../../../components/MovieCard.svelte";
  export let data: any;
</script>

<div class="grid grid-cols-auto-fit-250 gap-x-4 gap-y-8 h-[20vh]">
  {#each data.props.searchedMovie as movie}
    <MovieCard {movie} />
  {/each}
</div>