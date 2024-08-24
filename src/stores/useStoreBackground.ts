import { create } from 'zustand';

interface BgStates {
	sizeBackground: string;
	axis: 'x' | 'y';
	setSizeBackground: (value: string) => void;
	setAxis: (value: 'x' | 'y') => void;
}

const useStoreBackground = create<BgStates>((set) => ({
	sizeBackground: '0',
	axis: 'x',
	setSizeBackground: (value) => set((state) => ({ sizeBackground: value })),
	setAxis: (value) => set((state) => ({ axis: value })),
}));


export default useStoreBackground;