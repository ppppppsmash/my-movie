<script>
  export let movie;
</script>

<div>
  <div class="flex flex-col justify-around p-4">
    <a href={`/movie/${movie.id}`}>
      <img
        class="w-full h-[30vh] object-cover rounded-2xl mb-4"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
    </a>

    <div class="h-[5vh]">
      <h2 class="text-normal">{movie.title}</h2>
      <p class="text-xs">{movie.release_date}</p>
    </div>
  </div>
</div>