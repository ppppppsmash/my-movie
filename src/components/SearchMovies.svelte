<script>
  import { goto } from "$app/navigation";
  import { fly } from "svelte/transition";

  let inputValue = "";
  let active = false;

  const cancelInactive = () => {
    if (inputValue) {
      active = true;
    } else {
      active = false;
    }
  }

  const submitSearch = () => {
    goto(`/search/${inputValue}`)
  }
</script>

<form
  on:submit|preventDefault={submitSearch}
  class="relative w-[42%] m-4"
>
  {#if !active}
  <label
    in:fly={{y: -10, duration: 500 }}
    out:fly={{y: -10, duration: 500 }}
    for="search_movie"
    class="absolute top-1/2 left-0 -translate-y-1/2 px-4 pointer-events-none"
  >
    Search Movie
  </label>
  {/if}

  <input
    class="w-full border-none outline-none px-[2px] py-1 font-bold rounded-md transition-all"
    class:selected={active ? '' : ''}
    name="search_movie"
    type="text"
    bind:value={inputValue}
    on:focus={() => (active = true)}
    on:blur={cancelInactive}
  />

  {#if inputValue}
  <button
    class="text-[11px] py-4 text-white font-bold border-none absolute bottom-1/2 right-0 translate-y-1/2 h-full
      cursor-pointer rounded-r-[10px] bg-indigo-600 transition-all"
    out:fly={{x: 0, duration: 500 }}
    in:fly={{x: 20, duration: 500 }}
  >
    Search
  </button>
  {/if}
</form>