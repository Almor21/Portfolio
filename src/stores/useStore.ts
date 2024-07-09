import { create } from 'zustand';

interface bgStates {
	XBackground: string;
	setXBackground: (value: string) => void;
}

export const useStoreBackground = create<bgStates>((set) => ({
	XBackground: '0',
	setXBackground: (value) => set((state) => ({ XBackground: value })),
}));
