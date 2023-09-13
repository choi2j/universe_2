<script>
// @ts-nocheck
    import '$lib/style.css';
    import logo from '$lib/assets/universe_logo.svg';
    import background from "$lib/assets/background4.png";
    import QRCode from 'qrcode';
    import { onMount } from 'svelte';
	import Header from '../../../components/Header.svelte';
    // import name from './+page.server';
	// import job from './+page.server';
	// import portrait from './+page.server';
	export let form;
	let name = encodeURIComponent(form.name);
	let job = encodeURIComponent(form.job);
    onMount(() => {
        let canvas = document.getElementById("qrTarget");
		let targetUrl = `https://qwerty-universe.vercel.app/card/result?name=${name}&job=${job}&portraitNum=${form.portrait}`;
		console.log(targetUrl);
        QRCode.toCanvas(canvas, targetUrl, function (error) {
            if (error) console.error(error)
        })

    });
</script>

<Header />

<div id="main" style="background-image: url({background});">
	<div id="page">
		<div id="sample" class="card">
			<div class="card-bg">
				<div class="card-inner">
					<img id="logo" src={logo} alt="logo" />
					<canvas id="qrTarget"></canvas>
					<div class="text name">S. R. I. H. S.</div>
					<div class="text small">2023.09.15</div>
					<div class="text small">Certified by QWERTY.</div>
				</div>
			</div>
			<div class="card-border" />
		</div>
	</div>
    
</div>

<style>
    #main {
        width: 100%;
        height: 100%;
    }

	#page {
		height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(50px);
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

	.card-bg {
		border-radius: 32px;
		grid-column: 1/2;
		grid-row: 1/2;
		z-index: 1;
	}

	.card-border {
		grid-column: 1/2;
		grid-row: 1/2;
		z-index: 2;
		border-radius: 32px;
		border: 3px solid transparent;
		background: linear-gradient(-45deg, #8c8aff, #db74ff00, #db74ff00, #db74ff) border-box;
		-webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
		-webkit-mask-composite: xor;
		mask-composite: exclude;
	}

	.card-inner {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
	}

    #logo {
		width: 227px;
		margin-top: 1.5rem;
	}

    .text {
        color: white;
    }

	#qrTarget {
		margin-top: 3rem;
		margin-bottom: 1.5rem;
		border-radius: 0.75rem;
	}

	.name {
		font-size: 2rem;
		font-weight: 800;
		margin-bottom: 8rem;
	}

	.small {
		position: relative;
		font-size: 0.75rem;
		bottom: 1rem;
	}
</style>

