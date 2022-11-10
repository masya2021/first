import './header.css'

export const Header = () => {
    return (
        <>
            <div className="container">
                <div className="header__inner inner">
                    <nav className="header__navigation navigation" id="show">
                        <ul className="navigation__list">
                            <li className="navigation__item">
                                <a href="#home" className="navigation__link active">Home</a>
                            </li>
                            <li className="navigation__item">
                                <a href="#aboutme" className="navigation__link">About me</a>
                            </li>
                            <li className="navigation__item">
                                <a href="#skills" className="navigation__link">Skills</a>
                            </li>
                            <li className="navigation__item">
                                <a href="#portfolio" className="navigation__link">Portfolio</a>
                            </li>
                            <li className="navigation__item navigation__item-burger">
                                <a href="#contacts" className="navigation__link">Contacts</a>
                            </li>
                        </ul>
                    </nav>                    
                </div>
                <hr />
            </div>
        </>
        
    )
}