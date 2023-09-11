<script>
// @ts-nocheck
    import '$lib/style.css';
    import logo from '$lib/assets/universe_logo.svg';
    import background from "$lib/assets/background4.png";
    import QRCode from 'qrcode';
    import { onMount } from 'svelte';
    export let name;
    export let job;
    export let portraitNum;
    onMount(() => {
        let canvas = document.getElementById("qrTarget");
        QRCode.toCanvas(canvas, `https://qwerty-universe.vercel.app/card/qr?name=${name}&job=${job}&portraitNum=${portraitNum}`, function (error) {
            if (error) console.error(error)
            console.log('success!');
        })
    });
</script>

<div id="main" style="background-image: url({background});">
    <div id="sample" class="card">
        <div class="card-bg">
            <div class="card-inner">
                <img id="logo" src={logo} alt="logo" />
                <canvas id="qrTarget"></canvas>
                <div class="text name">S. I. H. S.</div>
                <div class="text date">2023.09.15</div>
            </div>
        </div>
        <div class="card-border" />
    </div>
</div>

<style>
    #main {
        width: 100%;
        height: 100%;
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
		justify-content: center;
	}

    #logo {
		width: 227px;
	}

    .text {
        color: white;
    }
</style>