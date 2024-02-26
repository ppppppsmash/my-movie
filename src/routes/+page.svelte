<script>
	import PopularMovies from "../components/PopularMovies.svelte";

	export let data;
	console.log(data);
</script>

<svelte:head>
	<title>My Movie</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<PopularMovies movies={data.props.popular} />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
</style>
