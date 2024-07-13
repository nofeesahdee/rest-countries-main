import ThemeSwitcher from "./themeSwitcher";

export default function Navbar() {
    return (
        <div className="flex justify-between px-8 md:px-14 py-6 shadow-md">
            <h1 className='text-xl font-extrabold'>Where in the world?</h1>
            <ThemeSwitcher />
        </div>
    );
}