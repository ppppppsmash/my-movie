<script>
  let inputValue = "";
  let active = false;

  const cancelInactive = () => {
    if (inputValue) {
      active = true;
    } else {
      active = false;
    }
  }
</script>

<form class="relative w-[30%] m-4">
  {#if !active}
  <label
    for="search_movie"
    class="absolute top-1/2 left-0 -translate-y-1/2 px-4 pointer-events-none"
  >
    Search Movie
  </label>
  {/if}

  <input
    class="w-full border-none outline-none px-[2px] py-1 font-bold rounded-md transition-all"
    name="search_movie"
    type="text"
    bind:value={inputValue}
    on:focus={() => (active = true)}
    on:blur={cancelInactive}
  />
  <button
    class="text-[11px] py-4 text-white font-bold border-none absolute bottom-1/2 right-0 translate-y-1/2 h-full
      cursor-pointer rounded-r-[10px] bg-indigo-600"
  >
    Search
  </button>
</form>