export default function Footer() {
    return (
        <>
            <div className="text-white text-2xl flex justify-center flex-col mx-40">
                <hr className="my-10"></hr>
                <h1 className="font-semibold text-3xl mb-7">RoboRacer</h1>

                <div className="flex flex-row justify-between">
                    <div className="flex flex-row">
                        <div className="mr-5">
                            <h1 className="font-medium">Team:</h1>
                        </div>
                        <div>
                            <div className="mb-5">
                                <h1 className="font-medium">Antonia Gaete</h1>
                                <p className="text-lg">Frontend Developer</p>
                            </div>

                            <div className="mb-5">
                                <h1 className="font-medium">Bryce Lutz</h1>
                                <p className="text-lg">Backend Developer: Color Sensors</p>
                            </div>

                            <div className="mb-5">
                                <h1 className="font-medium">Charlie Chen</h1>
                                <p className="text-lg">Backend Developer: Obstacle Avoidance</p>
                            </div>

                            <div className="mb-5">
                                <h1 className="font-medium">Christian Bryant-VonHeeder</h1>
                                <p className="text-lg">Hardware</p>
                            </div>

                            <div className="mb-5">
                                <h1 className="font-medium">Zakarie Leskowsky</h1>
                                <p className="text-lg">Backend Developer: Communication</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-end">
                        <a href="https://github.com/Robo-Racer" className="font-medium mb-5">GitHub</a>
                        <a href="https://robo-racer.github.io/RoboRacer/" className="font-bold mb-5">Docs</a>
                        <a href="mailto:gaetepma@oregonstate.edu" className="font-bold mb-5">Contact</a>
                    </div>
                </div>
            </div>
        </>
    )
}