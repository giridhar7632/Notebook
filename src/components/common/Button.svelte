<script>
	export let title = 'button'
	export let type = 'button'
	export let variant = 'primary'
</script>

<button
	{type}
	aria-label={title}
	class="px-6 py-2 shadow-sm w-fit flex items-center justify-center gap-2 hover:gap-3 transition-all duration-200 font-medium rounded-lg {variant ===
	'text'
		? 'bg-transparent hover:ring hover:ring-gray-200'
		: variant === 'outline' ? 'bg-transparent border border-gray-400 dark:border-gray-100 hover:ring hover:ring-gray-400 dark:hover:ring-gray-200' 
		: 'text-white hover:bg-gray-900 hover:ring hover:ring-gray-400 dark:hover:ring-0 bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-gray-300'}
	{$$props.class}"
>
	<slot />
</button>
