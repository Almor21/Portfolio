import CVButton from '@/components/home/CVButton';
import Card from '@/components/home/Card';
import ScrollDown from '@/components/home/ScrollDown';

function Home() {
	return (
		<div className='relative h-[29rem] w-full'>
			<Card />
			<CVButton />
			<ScrollDown />
		</div>
	);
}

export default Home;
