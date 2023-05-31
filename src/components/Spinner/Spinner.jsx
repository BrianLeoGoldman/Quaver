import './Spinner.scss'
import vynil from '../../assets/images/spinner.gif'
import arm from '../../assets/images/icons/arm.png'

export const Spinner = () => {

    return (
        <div className="spinner-container">
            <img className="spinner-vynil" src={vynil}/>
            <img className="spinner-arm" src={arm}/>
            <span className="spinner-text">Loading...</span>
        </div>
    )
}