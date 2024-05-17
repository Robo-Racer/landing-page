export default function Features() {
    return (
        <>
            <div id="features" className="mx-20 text-white">
                <div className="flex justify-center items-start">
                    <div className="m-10 w-1/4">
                        <h1 className="font-semibold text-3xl mb-5">Customizable speed</h1>
                        <p className="text-lg">Select and save speed profiles for a fully customizable and quick experience.</p>
                    </div>

                    <div className="m-10 w-1/4">
                        <h1 className="font-semibold text-3xl mb-5">Obstacle avoidance</h1>
                        <p className="text-lg">A safety feature to keep you and others safe on the track.</p>
                    </div>

                    <div className="m-10 w-1/4">
                        <h1 className="font-semibold text-3xl mb-5">Real time metrics</h1>
                        <p className="text-lg">View performance metrics after a run.</p>
                    </div>
                </div>

                <div className="text-orange-600 flex justify-center items-start m-10">
                    <h1 className="text-6xl font-medium">Your new training partner</h1>
                </div>

                <div className="grid grid-cols-8 grid-rows-8 max-h-60">
                    <div className="col-start-2 col-end-6 row-start-2">
                        <h1 className="text-3xl font-medium text-orange-500 italic mb-2">Why RoboRacer?</h1>
                        <h1 className="text-3xl font-medium text-white mb-7">RoboRacer was made with solo athletes in mind.</h1>

                        <p>Mimic a race pace, increase your endurance, better your speed.</p>
                        <p>RoboRacer maintains consistent speed so that track athletes can run alongside it. Just choose any speed and distance — sprinters and distance runners alike will benefit.</p>
                    </div>
                    <div className="col-start-5 col-end-9 row-start-1 row-end-5 flex items-start justify-center">
                        <img src="/controls_iphone.PNG" alt="Screenshot of controls on web interface." className="object-contain h-full" />
                    </div>

                    <div className="col-start-5 col-end-9 row-start-6">
                        <h1 className="text-3xl font-medium text-white mb-7">Immediately analyze your run.</h1>
                        <p>After any run, use the web application to see performance metrics. A detailed speed graph allows you to follow every second of your run.</p>
                    </div>

                    <div className="col-start-1 col-end-5 row-start-5 row-end-9 flex items-start justify-center">
                        <img src="/performance_iphone.PNG" alt="Screenshot of performance on web interface." className="object-contain h-full" />
                    </div>
                </div>
            </div>
        </>
    )
}