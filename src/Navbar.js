import React, {useState, useEffect} from 'react'
import "./Navbar.css"

function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth);

    const toggleNavSmallScreen = () => {
        setToggleMenu(!toggleMenu);
    }
    useEffect(() => {

        const changeWidth = () => {
           setLargeur(window.innerWidth);
           if(window.innerWidth < 500) {
            setToggleMenu(false)
           }
        }

        window.addEventListener('resize', changeWidth);

        return () => {
            window.removeEventListener ('resize', changeWidth)
        }


    }, [])

  return (
    <nav>
        {(toggleMenu || largeur > 500) && (

        <ul className='liste'>
            <li className='items'>Accueil</li>
            <li className='items'>Service</li>
            <li className='items'>Contact</li>
        </ul>
        )}
        <button onClick={toggleNavSmallScreen} className='btn'>BTN</button>
    </nav>
  )
}

export default Navbar