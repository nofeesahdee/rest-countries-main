import Search from "@/components/search";
import Countries from "@/components/countries";
import Navbar from '@/components/navbar';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {

  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <main className="flex flex-col min-h-screen dark:bg-dark dark:text-darktext">
      <Navbar />
      <Search placeholder={"Search for a country..."} />
      <Countries query={query} currentPage={currentPage} />
    </ main >
  );
}
