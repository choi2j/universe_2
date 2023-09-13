<script>
// @ts-nocheck
	import { supabase } from "$lib/supabaseClient";

	export let title;
	export let desc;
	export let src;
	export let team;
	export let gainedLike;

	import leftButton from "$lib/assets/project/leftButton.png";
	import leftButtonHighlight from "$lib/assets/project/leftButtonHighlight.png";
	import flagButton from "$lib/assets/project/flagButton.png";
	import flagButtonHighlight from "$lib/assets/project/flagButtonHighlight.png";
	
	import enterButton from '$lib/assets/project/enterButton.png';
	import enterButtonHighlight from '$lib/assets/project/enterButtonHighlight.png';

	export let display;
	console.log(gainedLike);

	function giveLikes() {
		let updated = gainedLike + 1;
		console.log(updated);
		const { error } = supabase
			.from('likes')
			.update({ likes: updated })
			.eq('projName', title)
			.then(console.log('success'))
			.then(gainedLike++);
		if (error) console.log(error);
	}

	function enterButtonMouseOver() {
		// @ts-ignore
		document.querySelector('#enter').src = enterButtonHighlight;
		console.log('over');
	}

	function enterButtonMouseOut() {
		// @ts-ignore
		document.querySelector('#enter').src = enterButton;
		console.log('out');
	}

	function flagButtonMouseOver() {
		// @ts-ignore
		document.querySelector('#flag').src = flagButtonHighlight;
		console.log('over');
	}

	function flagButtonMouseOut() {
		// @ts-ignore
		document.querySelector('#flag').src = flagButton;
		console.log('out');
	}

	function leftButtonMouseOver() {
		// @ts-ignore
		document.querySelector('#left').src = leftButtonHighlight;
		console.log('over');
	}

	function leftButtonMouseOut() {
		// @ts-ignore
		document.querySelector('#left').src = leftButton;
		console.log('out');
	}
</script>

<div class="proj">

	<div class="f5417">
		<div class="info">
			<p class="title text-big">{title}</p>
			<p class="desc text-small">{desc}</p>
			<div class="f5411">
				{#each team as a}
					<div class="part">
						<img src={a.pf_path} alt="circle" class="profile">
						<p class="cont">{a.role} by {a.name}</p>
					</div>
				{/each}
			</div>
		</div>
		<div class="img">
			<img {src} alt="" />
		</div>
	</div>

	<div class="f5426">
        <button on:click={() => {display = 0}}>
			<!-- svelte-ignore a11y-mouse-events-have-key-events -->
            <img src={leftButton} alt="download" on:mouseover={() => {leftButtonMouseOver()}} on:mouseout={() => {leftButtonMouseOut()}} id="left">
        </button>
        <a href="만든 프로젝트 링크" class="btn">
			<!-- svelte-ignore a11y-mouse-events-have-key-events -->
			<img src={enterButton} alt="download" on:mouseover={() => {enterButtonMouseOver()}} on:mouseout={() => {enterButtonMouseOut()}} id="enter">
        </a>
        <button on:click={() => {giveLikes()}}>
			<!-- svelte-ignore a11y-mouse-events-have-key-events -->
            <img src={flagButton} alt="download" on:mouseover={() => {flagButtonMouseOver()}} on:mouseout={() => {flagButtonMouseOut()}} id="flag">
        </button>
    </div>
</div>

<style>
	* {
		color: white;
	}

	button {
		border: none;
		background: none;
	}

	.text-big {
        color: #FFF;
        font-size: 48px;
        font-style: normal;
        font-weight: 700;
        line-height: 100%; /* 48px */
    }

    .text-small {
        color: #FFF;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

	.desc {
		margin-top: 4.5rem;
		margin-bottom: 6.5rem;
		width: 37.25rem;
	}

	.proj {
		height: 100%;
		width: 100%;
		background: rgba(0, 0, 0, 0.60);
		backdrop-filter: blur(100px);
	}

	.cont {
		display: inline-block;
		font-size: 1.5rem;
	}

	.part {
		display: flex;
		flex-direction: row;
		align-items:center;
		gap: 0.75rem;
	}

	.img {
		height: 31.25rem;
		width: 31.25rem;
	}

	.f5411 {
		width: 600px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.75rem;
	}

	.f5417 {
		display: grid;
		align-items: center;
		grid-template-columns: auto 31.25rem;
		margin: 18.5rem 12.5rem;
	}

    .f5426 {
		position: fixed;
        display: flex;
		justify-content: center;
		align-items: center;
		top: 59.5em;
		gap: 1rem;
		width: 100%;
    }

	.btn {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto;
	}

	.profile {
		height: 2.625rem;
	}
</style>