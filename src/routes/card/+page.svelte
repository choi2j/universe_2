<script>
	// @ts-nocheck

	import '$lib/style.css';

	import text from '$lib/assets/card/image.png';
	import bg4 from '$lib/assets/background4.png';

	import Header from '../../components/Header.svelte';
	import downloadButton from '$lib/assets/card/button_main1.png';
	import downloadButtonHighlight from '$lib/assets/card/button_main1_highlight.png';

	import sampleCard from '$lib/assets/card/sampleCard.svg';
	import sampleQR from '$lib/assets/card/sampleQR.svg';

	import { onMount } from 'svelte';

	function buttonMouseOver() {
		// @ts-ignore
		document.querySelector('#button').src = downloadButtonHighlight;
		console.log('over');
	}

	function buttonMouseOut() {
		// @ts-ignore
		document.querySelector('#button').src = downloadButton;
		console.log('out');
	}

	onMount(() => {});
</script>

<Header />

<div id="card" style="background-image: url({bg4});">
	<div class="inner">
		<img id="text" src={text} alt="" />
		<p id="text2">유니버스카드로 유니버스에서의 추억을 간직해주세요.</p>
		<div class="cards">
			<img id="sample" class="card" src={sampleCard} alt="sample" />

			<img id="sample" class="cardQR" src={sampleQR} alt="sample" />
		</div>
	</div>

	<a href="card/making" class="btn">
		<!-- svelte-ignore a11y-mouse-events-have-key-events -->
		<img
			src={downloadButton}
			alt="download"
			on:mouseover={() => {
				buttonMouseOver();
			}}
			on:mouseout={() => {
				buttonMouseOut();
			}}
			id="button"
		/>
	</a>
</div>

<style>
	* {
		color: white;
	}

	#card {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.inner {
		top: 114px;
		position: fixed;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	#text {
		width: 60rem;
		margin-bottom: 0;
		margin-top: -5rem;
	}

	#text2 {
		font-size: 24px;
		color: white;
	}

	#sample {
		height: 560px;
		margin-top: 4rem;
		margin-bottom: 4rem;
	}

	.btn {
		margin-top: 20px;
		position: fixed;
		top: 950px;
	}

	.card {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto;
		box-sizing: border-box;

		/* Auto layout */
		/* display: flex; */
		justify-content: center;
		gap: 10px;

		position: relative;
		width: 354px;
		height: 560px;

		background: linear-gradient(
			159.12deg,
			rgba(137, 149, 255, 0.2) 3.62%,
			rgba(255, 255, 255, 0.002) 50.74%,
			rgba(200, 130, 255, 0.2) 97.86%
		);
		backdrop-filter: blur(6px);
		/* Note: backdrop-filter has minimal browser support */
		border-radius: 32px;
	}

	.card {
		position: absolute;
		animation-name: turnToNone;
		animation-duration: 5s;
		animation-iteration-count: infinite;
	}

	.cardQR {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto;
		box-sizing: border-box;

		/* Auto layout */
		/* display: flex; */
		justify-content: center;
		gap: 10px;

		position: relative;
		width: 354px;
		height: 560px;

		background: linear-gradient(
			159.12deg,
			rgba(137, 149, 255, 0.2) 3.62%,
			rgba(255, 255, 255, 0.002) 50.74%,
			rgba(200, 130, 255, 0.2) 97.86%
		);
		backdrop-filter: blur(6px);
		/* Note: backdrop-filter has minimal browser support */
		border-radius: 32px;
	}

	.cardQR {
		position: absolute;
		animation-name: turnToNoneReverse;
		animation-duration: 5s;
		animation-iteration-count: infinite;
	}

	.cards {
		top: 530px;
		position: absolute;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	@keyframes turnToNone {
		0% {
			transform: rotate3d(0, 1, 0, 0deg);
			opacity: 1;
			display: flex;
		}

		25% {
			opacity: 0.1;
		}

		50% {
			transform: rotate3d(0, 1, 0, 180deg);
			opacity: 0;
			display: none;
		}

		75% {
			opacity: 0.7;
		}

		100% {
			transform: rotate3d(0, 1, 0, 0deg);
			opacity: 1;
			display: flex;
		}
	}

	@keyframes turnToNoneReverse {
		0% {
			transform: rotate3d(0, 1, 0, 180deg);
			opacity: 0;
			display: none;
		}

		25% {
			opacity: 0.7;
		}

		50% {
			transform: rotate3d(0, 1, 0, 0deg);
			opacity: 1;
			display: flex;
		}

		75% {
			opacity: 0.1;
		}

		100% {
			transform: rotate3d(0, 1, 0, 180deg);
			opacity: 0;
			display: none;
		}
	}
</style>
