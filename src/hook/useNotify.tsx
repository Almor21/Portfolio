'use client';

import useStoreNotification from '@/stores/useStoreNotification';
import React from 'react'

function useNotify() {
    const append = useStoreNotification((state) => state.append);

    const temp = (message: string, status: 'OK' | 'FAIL') => {
        console.log('notify');
        append(message, status);
    };
    return temp;
}

export default useNotify;