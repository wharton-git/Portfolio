import React from 'react';
import './../assets/styles/css/Style.css';

function PreAbout () {
    return (
        <div className='about'>
            
            <div>
                <div className='h-screen w-screen flex items-center justify-center text-3xl md:text-5xl' id='about'>
                    Know more about me ?
                </div>
                <div className='container ml-10 md:ml-20 grid grid-cols-2'>
                    <div className='about-desc'>
                        <h2 className='text-4xl font-bold my-8'>About</h2>
                        <p>
                            My name is <br /> <span className='m-0 font-extrabold text-xl'>PAULBERT Nomendray Wharton Aldrick</span>. <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad doloribus provident dolores sed adipisci molestiae eum consequatur quos, itaque facilis at praesentium perferendis numquam nisi quaerat quo ratione est quidem?
                        </p>
                    </div>
                    <div className='about-img'>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreAbout