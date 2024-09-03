'use client';

import useStoreNotification from '@/stores/useStoreNotification';
import React, {useState, useEffect} from 'react';
import Toast from '../ui/Toast';

function ToastGenerator() {
	console.log('render')

    const notifications = useStoreNotification((state) => state.notifications);
    const consume = useStoreNotification((state) => state.consume);
    const [ids, setIds] = useState<Symbol[]>([]);

    const appendNotification = () => {
        setIds([...ids, Symbol()]);
    }

    const deleteNotification = () => {
        consume();

        const newIds = [...ids];
        newIds.shift();
        setIds(newIds);
    }

    useEffect(() => {
        console.log('cambio')
    }, [notifications]);

    return (
        <>
            {notifications.map((n, index) => (
                <Toast key={ids[index].toString()} notify message={n.message} isOK={n.status==='OK'} onClose={deleteNotification}/>
            ))}
        </>
    )
}

export default ToastGenerator