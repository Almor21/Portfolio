import { create } from 'zustand';

interface bgStates {
	XBackground: number;
	setXBackground: (value: number) => void;
}

export const useStoreBackground = create<bgStates>((set) => ({
	XBackground: 0,
	setXBackground: (value) => set((state) => ({ XBackground: value })),
}));
