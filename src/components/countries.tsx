
import Pagination from './pagination';
import Link from 'next/link';
import Image from 'next/image';

export async function getStaticProps() {
    const data = await fetch('https://restcountries.com/v3.1/all')
    return data.json()
}

export default async function Countries({
    query,
    currentPage,
}: {
    query: string;
    currentPage: number;
}) {

    const response = await getStaticProps()

    const searchCountries = Array.isArray(response) ? response.filter((data) => {
        return data.name.common.toLowerCase().includes(query.toLowerCase()) || data.region.toLowerCase().includes(query.toLowerCase());
    }) : [];

    const pages = response.length;
    const perPage = Math.ceil(pages / 32)

    const start = (Number(currentPage) - 1) * perPage
    const end = start + perPage

    const entries = searchCountries.slice(start, end)

    return (
        <div>
            < div className="w-full px-8 md:px-14 pt-10 md:grid md:grid-cols-4 md:gap-10 flex flex-wrap justify-between" >
                {
                    Array.isArray(response) && entries.map((data: any) => {
                        return (
                            <div key={data.name.common} className="w-full h-96 mb-16 shadow-2xl rounded-lg cursor-pointer" >
                                <Link href={`/details/${data.name.common}`} >
                                    <Image src={data.flags.png} alt="country flag" className='rounded-t-lg w-full h-40' width={500} height={160} />
                                    <div className="p-4">
                                        <h2 className="font-extrabold text-xl py-3">{data.name.common}</h2>
                                        <div className='pb-1 text-sm'>
                                            <span className='font-semibold pr-1.5'>Population:</span>
                                            <small>{data.population}</small>
                                        </div>
                                        <div className='pb-1 text-sm'>
                                            <span className='font-semibold pr-1.5'>Region:</span>
                                            <small>{data.region}</small>
                                        </div>
                                        <div className='pb-1 text-sm'>
                                            <span className='font-semibold pr-1.5'>Capital</span>
                                            <small>{data.capital}</small>
                                        </div>
                                    </div>
                                </Link>
                            </div >
                        );
                    })
                }

            </ div >
            < Pagination hasNextPage={end < response.length} hasPreviousPage={start > 0} pages={pages} perPage={perPage} />
        </div >
    )
}



