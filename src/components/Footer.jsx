import { NavLink } from 'react-router'
import './Footer.css'

export const Footer = () => {
    return (
        <>
            <div className="copyright">© <NavLink to='/'>Ecommerce</NavLink> 2026</div>
        </>
    )
}