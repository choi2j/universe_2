<script>
	// @ts-nocheck
	import '$lib/style.css';
	import Header from '../components/Header.svelte';
	import Proj from '../components/Proj.svelte';
	import data2 from '$lib/projData';
	import bg from '$lib/assets/background1.png';

	import uni1 from '$lib/assets/home/universe_qwerty.png';
	import uni2 from '$lib/assets/home/universe_moto.png';
	import arrow from '$lib/assets/arrow.svg';

	import pl1 from '$lib/assets/project/clip_planet.png';
	import pl2 from '$lib/assets/project/disns_planet.svg';
	import pl3 from '$lib/assets/project/buket_planet.svg';
	import pl4 from '$lib/assets/project/arcade_planet.svg';
	import pl5 from '$lib/assets/project/bigbang_planet.svg';

	import item1 from '$lib/assets/project/clip_a.png';
	import item2 from '$lib/assets/project/disns_a.svg';
	import item3 from '$lib/assets/project/bucket_a.svg';
	import item4 from '$lib/assets/project/arcade_a.svg';
	import item5 from '$lib/assets/project/bigbang_a.svg';

	import larr from '$lib/assets/leftarrow.svg';
	import rarr from '$lib/assets/rightarrow.svg';

	import planetMode from '$lib/assets/planetMode.svg';
	import listMode from '$lib/assets/listMode.svg';

	export let data;

	let planetSet = [
		{ name: 'fi', planet: pl1 },
		{ name: 'se', planet: pl2 },
		{ name: 'center', planet: pl3 },
		{ name: 'th', planet: pl4 },
		{ name: 'fo', planet: pl5 }
	];

	let planetName = ['fi', 'se', 'center', 'th', 'fo'];
	let planetState = [0, 1, 2, 3, 4];

	let itemSet = [item1, item2, item3, item4, item5];

	// @ts-ignore
	function changeCenter(dir) {
		if (dir == 'L') {
			for (let i = 0; i < 5; i++) {
				planetState[i] = (planetState[i] + 1) % 5;
				planetSet[i].name = planetName[planetState[i]];
			}
			console.log(planetState, planetSet);
		}
		if (dir == 'R') {
			for (let i = 0; i < 5; i++) {
				planetState[i] = (planetState[i] + 4) % 5;
				planetSet[i].name = planetName[planetState[i]];
			}
			console.log(planetState, planetSet);
		}
	}

	let display = 0;
	let state = 0;
	// @ts-ignore
	function showProject(idx) {
		state = idx;
		display = 1;
		console.log(display);
	}

	let galaxyState = 1;
	let listState = 0;
	let temp;
	// @ts-ignore
	function changeState() {
		temp = galaxyState;
		galaxyState = listState;
		listState = temp;
		console.log(galaxyState, listState);
	}

	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let open = false;

	function scrollToggle() {
		open = !open;
		console.log();
	}

	let scrollTop = null;
	let scrollLeft = null;

	function disableScroll() {
		if (browser) {
			scrollTop = window.pageYOffset || window.document.documentElement.scrollTop;
			(scrollLeft = window.pageXOffset || window.document.documentElement.scrollLeft),
				(window.onscroll = function () {
					window.scrollTo(scrollLeft, scrollTop);
				});
		}
	}

	function enableScroll() {
		if (browser) {
			window.onscroll = function () {};
		}
	}

	$: if (open) {
		disableScroll();
	} else {
		enableScroll();
	}
</script>

<Header bind:display bind:state bind:galaxyState bind:listState />

<div id="home">
	<div class="background" style={`background-image: url(${bg})`} />

	<div class="home" id="one">
		<img class="img1" src={uni1} alt="" />
		<img class="img2" src={uni2} alt="" />

		<a class="arrow" href="#two">
			<img src={arrow} alt="" />
		</a>
	</div>

	<div id="two" class:galaxy={galaxyState} class:disnone={listState}>
		{#each planetSet as e, idx}
			<button
				class="planet {e.name}"
				on:click={() => {
					showProject((idx + 3) % 5);
					scrollToggle();
				}}
			>
				<img src={e.planet} alt="planet" />
			</button>
		{/each}
		<div class="planetMode">
			<button
				on:click={() => {
					changeCenter('L');
				}}><img src={larr} alt="larr" /></button
			>
			<button
				on:click={() => {
					changeState();
				}}
			>
				<img src={planetMode} alt="mode" />
			</button>
			<button
				on:click={() => {
					changeCenter('R');
				}}><img src={rarr} alt="rarr" /></button
			>
		</div>
	</div>

	<div class="list" id="three" class:list={listState} class:disnone={galaxyState}>
		<div class="inner-list">
			{#each itemSet as e, idx}
				<button
					class="item"
					on:click={() => {
						showProject((idx + 3) % 5);
						scrollToggle();
					}}
				>
					<img src={e} alt="item" />
				</button>
			{/each}
		</div>
		<div class="listMode">
			<button
				on:click={() => {
					changeState();
				}}
			>
				<img src={listMode} alt="mode" />
			</button>
		</div>
	</div>

	<div class={display ? 'proj disflex' : 'proj disnone'}>
		<Proj
			title={data2[state].title}
			desc={data2[state].desc}
			src={data2[state].src}
			team={data2[state].team}
			gainedLike={data.countries[state].likes}
			link={data2[state].link}
			bind:display
			bind:open
		/>
	</div>
</div>

<style scoped>
	.background {
		height: 100vh;
		width: 100%;
		position: fixed;
		z-index: -10;
		background-repeat: no-repeat;
		background-size: cover;
	}

	.disnone {
		display: none;
	}

	.disflex {
		display: flex;
	}

	/* Home #one */
	#home {
		height: 200vh;
		width: 100%;
	}

	.home {
		height: 100vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.img1 {
		height: 7rem;
	}

	.img2 {
		height: 14rem;
	}

	.arrow {
		position: absolute;
		bottom: 2rem;
		transition: 300ms;
		background: none;
		border: none;
		cursor: pointer;
	}

	.arrow:hover {
		bottom: 1rem;
		padding-top: 1rem;
	}

	/* Planet #two */
	.galaxy {
		height: 100vh;
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: flex-end;
		justify-content: center;
	}

	.planet {
		background: none;
		border: none;
		border-radius: 100%;
		width: fit-content;
		position: absolute;
		transition: ease-in-out all 300ms;
	}

	.planet img {
		transition: ease-in-out all 300ms;
	}

	/* planet positoin */
	.fi {
		top: calc(100vh + 40rem);
		left: 13vw;
	}

	.se {
		top: calc(100vh + 10rem);
		left: 27vw;
	}

	.center {
		top: calc(100vh + 30vh);
		left: 39vw;
	}

	.th {
		top: calc(100vh + 15rem);
		left: 65vw;
	}

	.fo {
		top: calc(100vh + 40rem);
		left: 80vw;
	}

	/* static img size */
	.fi img {
		height: 14rem;
	}

	.se img {
		height: 12rem;
	}

	.center img {
		height: 30rem;
	}

	.th img {
		height: 10rem;
	}

	.fo img {
		height: 15rem;
	}

	/* hover effect */
	.fi:hover {
		top: calc(100vh + 39.5rem);
		left: calc(13vw - 0.5rem);
	}

	.se:hover {
		top: calc(100vh + 9.5rem);
		left: calc(27vw - 0.5rem);
	}

	.center:hover {
		top: calc(100vh + 30vh - 0.5rem);
		left: calc(39vw - 0.5rem);
	}

	.th:hover {
		top: calc(100vh + 14.5rem);
		left: calc(65vw - 0.5rem);
	}

	.fo:hover {
		top: calc(100vh + 39.5rem);
		left: calc(80vw - 0.5rem);
	}

	.fi img:hover {
		height: 15rem;
	}

	.se img:hover {
		height: 13rem;
	}

	.center img:hover {
		height: 31rem;
	}

	.th img:hover {
		height: 11rem;
	}

	.fo img:hover {
		height: 16rem;
	}

	/* List #three */
	.list {
		height: 100vh;
		width: 100%;
		backdrop-filter: blur(10px) brightness(60%);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.inner-list {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 2rem;
	}

	.item {
		background: none;
		border: none;
		border-radius: 16px;
		transition: ease-in-out 300ms;
	}

	.item img {
		height: 30rem;
		transition: ease-in-out 300ms;
	}

	.item img:hover {
		height: 32rem;
	}

	/* mode */
	.planetMode {
		margin-bottom: 5rem;
	}

	.planetMode button {
		background: none;
		border: none;
		border-radius: 100px;
	}

	.listMode {
		position: fixed;
		bottom: 5rem;
	}

	.listMode button {
		background: none;
		border: none;
		border-radius: 100px;
	}

	/* Project */
	.proj {
		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100%;
	}
</style>
