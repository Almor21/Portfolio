import { create } from 'zustand';

interface FlashState {
	mode: 'on' | 'off';
	setMode: (value: 'on' | 'off', x?: number, y?: number) => void;
}

const useStoreFlash = create<FlashState>((set) => ({
	mode: 'on',
	setMode: (v, x = 0, y = 0) =>
		set((state) => ({ mode: v, initX: x, initY: y })),
}));

export default useStoreFlash;
