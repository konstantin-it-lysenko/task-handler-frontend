'use client'

import Loader from '@/components/ui/Loader'
import { useProfile } from '@/hooks/useProfile'

const Statistics = () => {
    const {data, isLoading} = useProfile()

    return isLoading ? <Loader /> : <ul className='grid grid-cols-4 gap-12 mt-7'>
        {data?.statistics.length ? (
            data.statistics.map(statistics => (
                <li
                    className='bg-border/5 rounded p-layout text-center hover:-translate-y-3 transition-transform duration-500'
                    key={statistics.label}
                >
                    <div className='text-xl'>{ statistics.label }</div>
                    <div className='text-3xl font-semibold'>{ statistics.value }</div>
                </li>
            ))
        ) : (
            <div>Statistics not loaded!</div>
        )}
    </ul>
}

export default Statistics
