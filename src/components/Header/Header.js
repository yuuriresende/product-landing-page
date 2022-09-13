import './Header.css'
import logo from '../../logo.png'

const Header = () => {
    return(
        <div className='header'>
            <div className='header-center'>
                <div className='logo-holder'>
                    <img src={logo} className='logo' />
                </div>
                <div className='header-links'>
                    <ul>
                        <li><a className='active'>home</a></li>
                        <li><a>about</a></li>
                        <li><a>features</a></li>
                        <li><a>QA</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header