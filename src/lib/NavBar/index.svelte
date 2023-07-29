<script lang="ts">
	import type { MenuItem } from '@types';
	import { page } from '$app/stores';

	const menuItems: MenuItem[] = [
		{
			title: 'Qr code',
			href: '/qr_code'
		},
		{
			title: 'placeholder',
			href: 'placeholder'
		}
	];
</script>

<nav class="w-2/12 gap-2 bg-slate-400 flex flex-col items-center">
	<h1 class="text-3xl font-bold">Menu</h1>
	<ul class="w-full flex flex-col">
		{#each menuItems as { href, title }}
			<li
				class="{$page.url.pathname === href &&
					'bg-slate-300'} hover:bg-slate-300 duration-500 text-center p-2 rounded-s-lg"
			>
				<a class="w-full p-2" {href}>{title}</a>
			</li>
		{/each}
	</ul>
</nav>
