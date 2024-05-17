export default function Links() {
    return (
        <>
            <div id="links" className="mx-20 text-white">
                <div className="text-orange-600 flex justify-center items-start m-10">
                    <h1 className="text-6xl font-medium">Interested?</h1>
                </div>

                <div className="flex justify-center items-start">
                    <div className="m-10 mx-20 w-1/4 flex justify-center flex-col text-3xl">
                        <h1 className="mb-7">Learn about how RoboRacer works on our <span className="font-bold">GitHub</span>.</h1>
                        <button className="rounded-xl bg-gray-600 p-5 font-medium text-2xl"><a href="https://github.com/Robo-Racer">Github</a></button>
                    </div>

                    <div className="m-10 mx-20 w-1/4 flex justify-center flex-col text-3xl">
                        <h1 className="mb-7"><span className="font-bold">Contact</span> the RoboRacer team to ask questions.</h1>
                        <button className="rounded-xl bg-gray-600 p-5 font-medium text-2xl"><a href="mailto:gaetepma@oregonstate.edu">Contact</a></button>
                    </div>
                </div>
            </div>
        </>
    )
}