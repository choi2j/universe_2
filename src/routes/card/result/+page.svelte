<script>
// @ts-nocheck

    import '$lib/style.css';
	import bg4 from "$lib/assets/background4.png";
    import logo from '$lib/assets/universe_logo.png';
	import barcode from '$lib/assets/card/card_barcode.png';
	import { onMount } from 'svelte';
    export let data;
    // @ts-ignore
    let port = Number(data.port);
    import portraits from '$lib/portraits_png.js';

    import * as htmlToImage from 'html-to-image';
	onMount(() => {
		let node = document.getElementById('sample');
		setTimeout(() => {
			// @ts-ignore
			htmlToImage.toPng(node)
			.then(function (dataUrl) {
				console.log(dataUrl);
				document.querySelector('#asdfasdf').href = dataUrl;
				document.querySelector('#result').src = dataUrl;
				node.style.display = 'none';
			})
			.catch(function (error) {
				console.error('oops, something went wrong!', error);
			});
		}, 5000);
		
    });

</script>

<div id="screen" style="background-image: url({bg4});">
	<div id="page">
		<div id="sample" class="card">
			<div class="card-bg">
				<div class="card-inner">
					<img id="logo" src={logo} alt="logo" />
					<img id="background" src={portraits[port]} alt="face" />
					<div id="name">{data.name}</div>
					<div id="job">{data.job}</div>
					<img id="barcode" src={barcode} alt="barcode" />
					<div id="date">2023.09.15</div>
				</div>
			</div>
			<div class="card-border" />
		</div>
		<img alt="" id="result">
		<a download="Card.png" class="btn" id="asdfasdf">
			<div class="btn-bg" />
			<div class="btn-border" />
			<div class="btn-text">다운로드</div>
		</a>
	</div>
    
</div>

<style>
    #screen {
        height: 100%;
        width: 100%;
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
		justify-content: center;
	}
    
    #logo {
		width: 227px;
	}

	#background {
		width: 180px;
		margin: 28px 0;
	}

	#name {
		font-size: 32px;
		margin-bottom: 12px;
		font-weight: 600;
	}

	#job {
		font-size: 16px;
		margin-bottom: 30px;
		font-weight: 600;
	}

    #date {
		font-size: 24px;
		margin-top: 35px;
	}

	#result {
		width: 354px;
	}
	div {
		color: white;
	}

    .btn {
		/* position: fixed; */
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto;
		margin-top: 20px;
		top: 950px;
	}

	.btn-bg {
		border-radius: 60rem;
		grid-column: 1/2;
		grid-row: 1/2;
		z-index: 1;
		background-color: #ffffff33;
	}

	.btn-border {
		grid-column: 1/2;
		grid-row: 1/2;
		z-index: 2;
		border-radius: 60rem;
		border: 3px solid transparent;
		background: linear-gradient(-45deg, #8c8aff, #db74ff00, #db74ff00, #db74ff) border-box;
		-webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
		-webkit-mask-composite: xor;
		mask-composite: exclude;
	}

	.btn-text {
		padding: 1rem 2.5rem;
		grid-column: 1/2;
		grid-row: 1/2;
		white-space: nowrap;
		color: white;
		z-index: 2;
		text-transform: uppercase;
		font-size: 1.75rem;
		font-weight: 600;
	}

    button {
        border: none;
        background: none;
    }
</style>