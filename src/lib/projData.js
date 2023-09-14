import buketPlanet from '$lib/assets/project/buket_planet.svg';
import arcadePlanet from '$lib/assets/project/arcade_planet.svg';
import bigbangPlanet from '$lib/assets/project/bigbang_planet.svg';
import clipPlanet from '$lib/assets/project/clip_planet.svg';
import disnsPlanet from '$lib/assets/project/disns_planet.svg';

import defaultImg from '$lib/assets/profiles/default.png';
import geonLee from '$lib/assets/profiles/geonLee.png';
import hyeonsooSim from '$lib/assets/profiles/hyeonsooSim.png';
import jaewonChoi from '$lib/assets/profiles/jaewonChoi.png';
import jeongwooKim from '$lib/assets/profiles/jeongwooKim.png';
import jihoSeok from '$lib/assets/profiles/jihoSeok.png';
import seonhooPark from '$lib/assets/profiles/seonhooPark.png';
import seungilAhn from '$lib/assets/profiles/seungilAhn.png';
import sinyeongPark from '$lib/assets/profiles/sinyeongPark.png';
import taekyuHan from '$lib/assets/profiles/taekyuHan.png';
import yeowonLee from '$lib/assets/profiles/yeowonLee.png';
import yoonseoKim from '$lib/assets/profiles/yoonseoKim.png';
import jiminKim from '$lib/assets/profiles/jiminKim.png';

let data = [
	{
		title: 'Bucket',
		desc: '자신의 버킷리스트를 만들고 공유해보세요! 다른 사람의 버킷리스트도 볼 수 있습니다!',
		src: buketPlanet,
		team: [
			{ role: 'Directed', name: '최재원', pf_path: jaewonChoi },
			{ role: 'Developed', name: '최진호', pf_path: defaultImg },
			{ role: 'Developed', name: '김정우', pf_path: jeongwooKim },
			{ role: 'Designed', name: 'Jimin', pf_path: jiminKim }
		],
		link: ''
	},
	{
		title: 'Arcade',
		desc: '친구와 함께 오프라인으로 게임을 즐길 수 있는 멀티게임 사이트! 다양한 종류의 게임들을 만나보세요!',
		src: arcadePlanet,
		team: [
			{ role: 'Directed', name: '이여원', pf_path: yeowonLee },
			{ role: 'Developed', name: '이건', pf_path: geonLee },
			{ role: 'Developed', name: '한태규', pf_path: taekyuHan }
		],
		link: ''
	},
	{
		title: 'Big Bang',
		desc: '오늘 당신의 운은 어떨까요? 이 사이트를 통해 확인해보세요! 하지만, 이건 신빙성이 없는 그저 운세 보기 일 뿐이니, 너무 맹신하지 말고 즐겨주세요!',
		src: bigbangPlanet,
		team: [
			{ role: 'Directed', name: '김윤서', pf_path: yoonseoKim },
			{ role: 'Developed', name: '박신영', pf_path: sinyeongPark },
			{ role: 'Developed', name: '심현수', pf_path: hyeonsooSim }
		],
		link: 'qwerty-bigbang.vercel.app'
	},
	{
		title: 'StreamLine',
		desc: '애플과 같은 연결성을 모든 곳에서.',
		src: clipPlanet,
		team: [
			{ role: 'Directed', name: '석지호', pf_path: jihoSeok },
			{ role: 'Developed', name: '석지호', pf_path: jihoSeok },
			{ role: 'Designed', name: 'Jimin', pf_path: jiminKim }
		],
		link: '/etc'
	},
	{
		title: 'DISNS',
		desc: '무슨 언어를 사용할지 고민이되신다고요? DISNS에서 설명을 읽어보고 선택해보세요. 그냥 선택하는것보다는 유용할 것 입니다.',
		src: disnsPlanet,
		team: [
			{ role: 'Directed', name: '안승일', pf_path: seungilAhn },
			{ role: 'Developed', name: '박선후', pf_path: seonhooPark },
			{ role: 'Designed', name: '박건희', pf_path: defaultImg }
		],
		link: ''
	}
];

export default data;
