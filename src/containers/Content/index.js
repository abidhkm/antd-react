import React, { lazy, Suspense, useMemo } from 'react';

const Categories = lazy(() => import('../categories'))
const NotFound = lazy(() => import('../notFound'))

const pages = {
    "8": Categories,
    "9": Categories,
}

const ContentComponent = ({ selected }) => {


    const Component = useMemo(() => {
        return pages[selected[0]] ? pages[selected[0]] : NotFound
    }, [selected])


    return <div>
        <Suspense fallback={<div>Loading..</div>} >
            <Component selected={selected[0]} />
        </Suspense>
    </div>
}

export default ContentComponent;