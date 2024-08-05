import { create } from 'zustand';

interface bgStates {
	sizeBackground: string;
	axis: 'x' | 'y';
	setSizeBackground: (value: string) => void;
	setAxis: (value: 'x' | 'y') => void;
}

export const useStoreBackground = create<bgStates>((set) => ({
	sizeBackground: '0',
	axis: 'x',
	setSizeBackground: (value) => set((state) => ({ sizeBackground: value })),
	setAxis: (value) => set((state) => ({ axis: value })),
}));
