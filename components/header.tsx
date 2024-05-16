export default function Header() {
    return (
        <>
            <div className="grid grid-cols-6 grid-rows-1 gap-4 text-white text-xl shadow-header">
                <h1 className="font-semibold p-5 ms-5">RoboRacer</h1>

                <nav className="w-full flex col-start-3 col-end-5 justify-center">
                    <button className="px-8">
                        <a href="#">Docs</a>
                    </button>

                    <button className="px-8">
                        <a href="#">Features</a>
                    </button>

                    <button className="px-8">
                        <a href="#">Contact</a>
                    </button>
                </nav>
            </div>
        </>
    )
}