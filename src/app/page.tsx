import Backgroud from '@/components/Backgroud';
import Card from '@/components/Card';
import Header from '@/components/Header';

export default function Home() {
	return (
		<div className="relative h-[100vh] w-full grid grid-rows-[minmax(100vh,1fr)_auto]">
			<Header />
			<main className='grid grid-cols-2'>
				<Card />
				<Backgroud />
			</main>
			<footer></footer>
		</div>
	);
}
