'use client';

import React from 'react'
import useStoreNotification from '@/stores/useStoreNotification';

function useNotify() {
    return useStoreNotification((state) => state.append);
}

export default useNotify;