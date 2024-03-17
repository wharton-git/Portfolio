import React, {useEffect} from 'react';
import MenuBar from './../assets/svg/menu.svg'
import Home from './../assets/svg/home.svg'
import About from './../assets/svg/about.svg'
import Project from './../assets/svg/project.png'
import Contact from './../assets/svg/contact.png'
import './../assets/styles/css/Style.css'

function SideMenu() {

    const dropdown = document.querySelector('.dropdown')

    useEffect(() => {
        const dropdown = document.querySelector('.dropdown');

        const handleClick = () => {
            dropdown.classList.toggle('active');
        };

        dropdown.addEventListener('click', handleClick);

        // Nettoyage de l'écouteur d'événements lors du démontage du composant
        return () => {
            dropdown.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <>
            <div className="box fixed top-4 right-5 z-10 w-16">
                <div className="dropdown cursor-pointer relative w-full h-20 flex justify-center items-center">
                    <div className="svgMenu">
                        <img src={MenuBar} alt="" />
                    </div>
                    <div className="items absolute top-0 left-0 w-full mt-20 overflow-hidden shadow-md p-2 rounded-md ">
                        <a href="#" style={{ '--i': 1 }} className="bg-gradient-to-tr from-purple-950 to-pink-900">
                            <img src={Home} alt="" />
                        </a>
                        <a href="#about" style={{ '--i': 2 }} className="bg-gradient-to-tr from-purple-950 to-pink-900">
                            <img src={About} alt="" />
                        </a>
                        <a href="#project" style={{ '--i': 3 }} className="bg-gradient-to-tr from-purple-950 to-pink-900">
                            <img src={Project} alt="" />
                        </a>
                        <a href="#contact" style={{ '--i': 4 }} className="bg-gradient-to-tr from-purple-950 to-pink-900">
                            <img src={Contact} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideMenu;