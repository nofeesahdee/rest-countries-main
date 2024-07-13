import Link from 'next/link';
import Navbar from '@/components/navbar';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

async function getDetails(name: string) {
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}`, {
        next: {
            revalidate: 60
        }
    })
    return res.json();
}

export default async function Page({ params }: { params: any }) {
    const [detail] = await getDetails(params.name)
    const currency = detail.currencies
    const newC = Object.keys(currency);

    const language = detail.languages
    const newL = Object.keys(language);

    return (
        <main className="flex flex-col min-h-screen dark:bg-dark dark:text-darktext">
            <Navbar />
            <div className='w-full px-8 md:px-14 pt-10'>
                <Link href={"/"}>
                    <button className='flex shadow-md py-2 px-6'>
                        <ArrowLeftIcon
                            width={25}
                        /><small className='pl-2 self-center text-lg'>Back</small>
                    </button>
                </Link >
                <div className="decription flex flex-col md:flex-row justify-between mt-14">
                    <div className='md:w-2/3 mb-14'>
                        <img src={detail.flags.png} className="md:w-2/3" alt={detail.flags.alt} />
                    </div>
                    <div className='md:w-1/2 tracking-wider'>
                        <h2 className='text-3xl font-extrabold mb-6'>{detail.name.common}</h2>
                        <div className='flex flex-col md:flex-row justify-between'>
                            <div className='flex flex-col mb-6'>
                                <div className='mb-1'>
                                    <span className='mr-1.5 font-bold'>Native Name:</span>
                                    <small>{detail.name.common}</small>
                                </div>
                                <div className='mb-1'>
                                    <span className='mr-1.5 font-bold'>Population:</span>
                                    <small>{detail.population}</small>
                                </div>
                                <div className='mb-1'>
                                    <span className='mr-1.5 font-bold'>Region: </span>
                                    <small>{detail.region}</small>
                                </div>
                                <div className='mb-1'>
                                    <span className='mr-1.5 font-bold'>Sub Region:</span>
                                    <small>{detail.subregion}</small>
                                </div>
                                <div className='mb-1'>
                                    <span className='mr-1.5 font-bold'>Capital: </span>
                                    <small>{detail.capital}</small>
                                </div>
                            </div>
                            <div className='flex flex-col mb-6'>
                                <div className='mb-1'>
                                    <span className='mr-1.5 font-bold'>Top Level Domain: </span>
                                    <small>{detail.tld}</small>
                                </div>
                                <div className='mb-1'>
                                    <span className='mr-1.5 font-bold'>Currencies: </span>
                                    <small>{newC[0]}</small>
                                </div>
                                <div className='mb-1'>
                                    <span className='mr-1.5 font-bold'>Languages: </span>
                                    <small>{newL[0]}</small>
                                </div>
                            </div>
                        </div>
                        {/* <div>
                            {detail.borders}
                        </div> */}
                    </div>
                </div>
            </div>

        </ main >
    );
}
