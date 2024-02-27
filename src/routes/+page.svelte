<script lang="ts">
	import PopularMovies from "../components/PopularMovies.svelte";

	export let data: any;
</script>

<svelte:head>
	<title>My Movie</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<PopularMovies movies={data.props.popular} />
</section>
