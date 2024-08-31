import Flashlight from '@/components/Flashlight';
import CVButton from '@/components/home/CVButton';
import Card from '@/components/home/Card';
import ScrollDown from '@/components/home/ScrollDown';

function HomePage() {
	return (
		<div className="relative w-full grid gap-8 justify-items-center">
			<Flashlight />
			<Card />
			<CVButton />
			<ScrollDown />
		</div>
	);
}

export default HomePage;
