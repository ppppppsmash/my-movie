<script lang="ts">
	import PopularMovies from "../components/PopularMovies.svelte";
	import SearchMovies from "../components/SearchMovies.svelte";
	import { fly } from "svelte/transition";

	export let data: any;
</script>

<svelte:head>
	<title>My Movie</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section
	in:fly={{ y: 50, duration: 500, delay: 500 }}
	out:fly={{ y: 50, duration: 500 }}
>
	<SearchMovies />
	<PopularMovies movies={data.props.popular} />
</section>
