import { create } from 'zustand';

interface Notification {
    message: string;
    status: 'OK' | 'FAIL';
}

interface NotificationState {
    notifications: Array<Notification>;
    append: (message: string, status: 'OK' | 'FAIL') => void;
    consume: () => void;
}

const useStoreNotification = create<NotificationState>((set) => ({
    notifications: [],
    append: (message, status) =>
        set((state) => ({ notifications: [...state.notifications, { message, status }] })),
    consume: () => set((state) => {
        const newNotifications = [...state.notifications];
        newNotifications.shift();
        return {notifications: newNotifications};
    }),
}));

export default useStoreNotification;