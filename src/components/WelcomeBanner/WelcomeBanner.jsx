import './WelcomeBanner.scss'

export const WelcomeBanner = ({title, subtitle, introduction}) => {
    return (
        <div className="list__container">
            <h1 className='page-title'>{title}</h1>
            <h2 className='page-subtitle'>{subtitle}</h2>
            <p className='introduction'>{introduction}</p>
        </div>
    )
}