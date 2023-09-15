<script>
	// @ts-nocheck
	import '$lib/style.css';
	import Header from '../../components/Header.svelte';
	import bg from '$lib/assets/background1.png';
</script>

<Header />

<div class="etc" style={`background-image: url(${bg})`}>
	<div class="text">
		<p>아직 완성되지 않은 프로젝트입니다!</p>
        <a href="/#two">이전 페이지로 돌아가기</a>
	</div>
</div>

<style scoped>
	.etc {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-repeat: no-repeat;
		background-size: cover;
	}

	.text {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		background: #00000080;
		backdrop-filter: blur(10px);
		border-radius: 16px;
		padding: 3rem;
		gap: 1rem;
	}

	.text p {
		font-size: 2rem;
		font-weight: 500;
		color: #fff;
	}

	span {
		font-weight: 900;
	}

    a {
        color: #000;
        background: #fff;
        border-radius: 16px;
        padding: 0.5rem 3rem;
    }
</style>
