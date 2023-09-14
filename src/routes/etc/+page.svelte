<script>
	// @ts-nocheck
	import '$lib/style.css';
	import Header from '../../components/Header.svelte';
	import bg from '$lib/assets/background1.png';
</script>

<Header />

<div class="etc" style={`background-image: url(${bg})`}>
	<div class="text">
		<p>StreamLine 프로젝트는 웹이 아닌 프로그램 입니다!</p>
		<p>각 컴퓨터의 바탕화면에서 StreamLine 폴더를 열어서 실행해주세요!</p>
		<p>유저명은 qwerty</p>
		<p>비밀번호는 qwertyqwerty</p>
		<p>입니다!</p>
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
</style>
