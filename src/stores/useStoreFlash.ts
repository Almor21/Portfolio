import { create } from 'zustand';

interface FlashState {
	mode: 'on' | 'off';
	setMode: (value: 'on' | 'off') => void;
}

const useStoreFlash = create<FlashState>((set) => ({
	mode: 'on',
	setMode: (v) =>
		set((state) => ({ mode: v})),
}));

export default useStoreFlash;
