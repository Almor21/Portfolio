'use client';

import React from 'react';
import useStoreNotification from '@/stores/useStoreNotification';
import Toast from '../ui/Toast';

function ToastGenerator() {
    const notifications = useStoreNotification((state) => state.notifications);
    const consume = useStoreNotification((state) => state.consume);

    return (
        <>
            {notifications.map((n) => (
                <Toast key={n.id} notify message={n.message} isOK={n.status==='OK'} onClose={consume}/>
            ))}
        </>
    )
}

export default ToastGenerator