<script>
	// @ts-nocheck

	import logo from '$lib/assets/universe_logo.svg';
	import { redirect } from '@sveltejs/kit';

	/** @type {import('./$types').LayoutServerLoad} */
	export function load() {
		throw redirect(307, '#two');
	}

	export let display;
	export let state;
	export let galaxyState;
	export let listState;

	function reset() {
		display = 0;
		state = 0;
		galaxyState = 1;
		listState = 0;
		load();
	}
</script>

<div id="header">
	<a href="/#home" on:click={reset}>
		<img src={logo} alt="" />
	</a>

	<ul class="nav">
		<li class="item"><a href="/intro">전시회 소개</a></li>
		<li class="item"><a href="/#two" on:click={reset}>체험하기</a></li>
		<li class="item"><a href="/card">인증 카드 만들기</a></li>
	</ul>
</div>

<style>
	#header {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		padding: 0.5rem 12.5rem;
		background: rgba(0, 0, 0, 0.2);
		backdrop-filter: blur(6px);
		position: fixed;
		width: 100%;
		z-index: 10;
	}

	#header .nav {
		list-style-type: none;
		display: flex;
		gap: 3rem;
		margin-left: auto;
	}

	#header .nav .item a {
		color: var(--light);
	}
</style>
