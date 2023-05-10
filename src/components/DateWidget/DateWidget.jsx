import './DateWidget.scss'
import logo from '../../assets/images/icons/calendar.png'

const DateWidget = () => {

    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    const finalDate = month + "/" + day + "/" + year 
    return (
        <div className="date-widget">
            <img className="date-logo" src={logo}/>
            <span className="date-data">{finalDate}</span>
        </div>
    )
}

export default DateWidget