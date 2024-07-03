import Backgroud from '@/components/Backgroud';
import CVButton from '@/components/CVButton';
import Card from '@/components/Card';
import Header from '@/components/Header';
import ScrollDown from '@/components/ScrollDown';

export default function Home() {
	return (
		<div className="relative h-[100vh] w-full grid grid-rows-[minmax(100vh,1fr)_auto]">
			<Header />
			<main className='grid grid-cols-2'>
				<Card />
				<CVButton />
				<ScrollDown />
				<Backgroud />
			</main>
			<footer></footer>
		</div>
	);
}
