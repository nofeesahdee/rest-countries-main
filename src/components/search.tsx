'use client';
import { useDebouncedCallback } from 'use-debounce';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

export default function Search({ placeholder }: { placeholder: string }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', '1');
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);

    return (
        <div className="relative flex flex-1 flex-shrink-0 justify-between px-8 md:px-14 py-8 flex-wrap">
            <input
                className="peer block w-full md:w-80 h-10 rounded-md border border-gray-200 p-[10px] text-sm outline-2 placeholder:text-gray-500 shadow-md dark:bg-dark dark:placeholder:text-darktext dark:text-darktext"
                placeholder={placeholder}
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
                defaultValue={searchParams.get('query')?.toString()}
            />
            <select
                className="peer block w-full md:w-60 h-10 rounded-md border border-gray-200 p-[10px] text-sm outline-2 shadow-md md:m-0 mt-6 dark:bg-dark dark:text-darktext"
                name="continents" id="continents"
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
            >
                <option>Filter By Region</option>
                <option value="africa">Africa</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>

            </select>
        </div >
    );
}