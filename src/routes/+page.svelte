<script>
	import Button from "../components/common/Button.svelte";
	import { formatDate } from '$lib/utils'

	export let data;
</script>

<Button class="text-sm sm:text-base " type="button" variant="outline">Text outline</Button>

<section>
	<ul class="posts">
		{#each data.posts as post}
			<li class="post">
				<a href={post.slug} class="title">{post.title}</a>
				<p class="date">{formatDate(post.date)}</p>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>