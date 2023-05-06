import './Spinner.scss'
import logo from '../../assets/images/icons/spinner.png'

export const Spinner = () => {

    return (
        <div className="spinner-container">
            <img className="spinner-icon" src={logo}/>
            <span className="spinner-text">Loading...</span>
        </div>
    )
}