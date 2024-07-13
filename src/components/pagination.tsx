'use client';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function Pagination(
    { hasNextPage, hasPreviousPage, pages, perPage }:
        { hasNextPage: boolean, hasPreviousPage: boolean, pages: number, perPage: number }
) {
    const router = useRouter()
    const searchParams = useSearchParams()

    const page = searchParams.get('page' || '1')

    return (
        <div className="flex justify-center pb-10">
            <button disabled={!hasPreviousPage} className='shadow-md p-2 rounded-md mx-4'>
                <ArrowLeftIcon
                    width={25}
                    onClick={() => {
                        router.push(`/?page=${Number(page) - 1}`)
                    }}
                />
            </button>
            <div className='justify-center self-center text-lg '>
                {page} / {Math.ceil(pages / perPage)}
            </div>
            < button disabled={!hasNextPage} className='shadow-md p-2 rounded-md mx-4 outline-2'>
                < ArrowRightIcon
                    width={25}
                    onClick={() => {
                        router.push(`/?page=${Number(page) + 1}`)
                    }}
                />
            </button>
        </div >
    )
}