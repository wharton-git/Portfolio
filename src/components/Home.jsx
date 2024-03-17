import React from 'react';

import W from '../assets/images/letter_W.png'

function Home() {
    return (
        <div class="head sm:h-screen">
            <div class="container mx-auto">
                <div class="text-white" id="bio">
                    <div class=" align-middle md:flex" id="bio-container">
                        <div class="text-bio text-8xl uppercase w-5/6 mx-auto md:w-full">Ohayou, <br/> I'm Wharton
                            <div class="lowercase text-4xl animated-text" id="desc-bio" style={{'--i': 1}}>
                                a highly motivated <br/> <span></span>
                            </div>
                            <div class="btnViewMore text-base lowercase text-purple-200 bg-gradient-to-tr from-pink-700 to-purple-800 w-36 px-4 py-2 rounded-lg text-center my-3 shadow-sm shadow-purple-600 cursor-pointer hover:text-white hover:bg-gradient-to-tr hover:from-purple-800 hover:to-pink-700" style={{'--i': 2}}>
                                View more
                            </div>
                        </div>
                        
                        <div class="img-bio my-auto">
                            <img src={W} class="animate-pulse"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;