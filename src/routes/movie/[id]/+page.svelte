<script lang="ts">
  export let data: any;
</script>

<section class="my-8 px-[20%]">
  <div class="w-full">
    <img
      class="w-full rounded-2xl"
      src={`https://image.tmdb.org/t/p/original${data.props.detail.backdrop_path}`}
      alt={data.props.detail.title}
    />
  </div>

  <div>
    <h1 class="pt-4 pb-8">{data.props.detail.title}</h1>
    <p class="py-4">{data.props.detail.overview}</p>
    <p>
      <span class="font-bold">Release date:</span> {data.props.detail.release_date} <br />
      <span class="font-bold">Budget:</span> ${data.props.detail.budget}<br />
      <span class="font-bold">Rating:</span> {data.props.detail.vote_average}<br />
      <span class="font-bold">Runtime:</span> {data.props.detail.runtime}mins
    </p>
  </div>
</section>