import React from 'react';
import { useRouter } from 'next/router';

const Collection = () => {
    const router = useRouter();
    console.log(router.query);
    return <div>Yo</div>
}

export default Collection;