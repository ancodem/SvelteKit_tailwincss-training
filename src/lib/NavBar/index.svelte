<script lang="ts">
	import type { MenuItem } from '../../types/index.ts';
	import { page } from '$app/stores';

	const menuItems: MenuItem[] = [
		{
			title: 'Qr code',
			href: '/qr_code'
		}
	];
</script>

<nav class="w-2/12 gap-2 bg-teal-400 flex flex-col items-center p-2">
	<h1 class="text-3xl font-bold">Menu</h1>
	<ul class="w-full flex flex-col gap-2">
		{#each menuItems as item}
			<li
				class="{$page.url.pathname === item.href &&
					'bg-teal-500'} hover:bg-teal-500 duration-500 text-center p-2 rounded-md"
			>
				<a href={item.href}>{item.title}</a>
			</li>
		{/each}
	</ul>
</nav>
