export default function Header() {
    return (
        <>
            <div className="flex shadow-header text-white text-xl bg-slate-900">
                <h1 className="font-semibold p-5">RoboRacer</h1>

                <nav className="flex justify-center w-full">
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