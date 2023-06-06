import './style.css'

const Header = () => {
    return (
        <section className="header">
            <i className='bx bx-book logo'></i>
            
            <div className="actions">
                <label className="switch-btn" htmlFor="switch">
                    <input type="checkbox" themeSwitcher="true" name='switch' id="switch"></input>
                    <div className="switch-inner"></div>
                </label>

                <i className='bx bx-moon'></i>
            </div>
            
        </section>
    )
}

export default Header