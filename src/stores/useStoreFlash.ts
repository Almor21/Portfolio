import { create } from 'zustand';

interface FlashState {
	mode: 'on' | 'off';
	initX: number;
	initY: number;
	setMode: (value: 'on' | 'off', x?: number, y?: number) => void;
}

const useStoreFlash = create<FlashState>((set) => ({
	mode: 'off',
	initX: 0,
	initY: 0,
	setMode: (v, x = 0, y = 0) =>
		set((state) => ({ mode: v, initX: x, initY: y })),
}));

export default useStoreFlash;
