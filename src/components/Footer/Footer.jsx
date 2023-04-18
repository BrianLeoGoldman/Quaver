import './Footer.scss'
import facebook from '../../assets/images/icons/social-media/facebook.png'
import instagram from '../../assets/images/icons/social-media/instagram.png'
import twitter from '../../assets/images/icons/social-media/twitter.png'
import tiktok from '../../assets/images/icons/social-media/tiktok.png'
import whatsapp from '../../assets/images/icons/social-media/whatsapp.png'

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="text">
                <span className="footer-text">GET IN TOUCH WITH US ON ANY SOCIAL NETWORK!</span>
            </div>
            <div className="logos">
                <a href="https://www.facebook.com/" target="_blank"><img src={facebook} alt="Facebook logo"/></a>
                <a href="https://www.instagram.com/" target="_blank"><img src={instagram} alt="Instagram logo"/></a>
                <a href="https://twitter.com" target="_blank"><img src={twitter} alt="Twitter logo"/></a>
                <a href="https://www.tiktok.com/" target="_blank"><img src={tiktok} alt="Tiktok logo"/></a>
                <a href="https://www.whatsapp.com/" target="_blank"><img src={whatsapp} alt="Whatsapp logo"/></a>
            </div>
        </footer>
    )
}

