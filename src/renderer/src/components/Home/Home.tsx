// import { Stats } from "../common/Stats"

export const Home = () => {
    return (
        <div class="border p-5 min-h-screen bg-base-200">
            <div class="container flex flex-row justify-between border">
                <div class="basis-1/2 border p-4">
                </div>
                <div class="basis-1/3 border flex justify-between p-4 gap-12">
                    <div class="radial-progress bg-base-100 border-4 text-primary-content" style="--value:30; --size:10rem; --thickness: 0.64rem;">
                        <div class="tooltip tooltip-bottom" data-tip="Your monthly goal progress">
                            <p class="text-info text-2xl">30%</p>
                        </div>

                    </div>


                </div>




            </div>
            {/* <div class="max-w-md">
                <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button class="btn btn-primary">Get Started</button>
            </div> */}
        </div >
    )
}
