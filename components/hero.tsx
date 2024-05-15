export default function Hero() {
    return (
        <>
            <div className="grid grid-cols-12 gap-4 grid-rows-12 max-w-full">
                <div className="col-start-2 col-end-10 row-start-3 row-end-7 z-40">
                    <h1 className="text-white text-6xl font-medium">Revolutionizing Athletic Training with Autonomous Pace-Setting</h1>
                </div>

                <div className="col-start-1 col-end-12 row-start-1 row-end-12">
                    <img src="/track_runner.svg" alt="Vector image of runner on track" className="" />
                </div>
            </div>
        </>
    )
}