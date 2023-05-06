import { WelcomeBanner } from '../WelcomeBanner/WelcomeBanner'
import { Showroom } from '../Showroom/Showroom'

export const WelcomePage = () => {
    return (
        <div>
            <WelcomeBanner title={"Welcome!"} subtitle={"Music, vynils & more!"} introduction={"Search from a wide selection of vynils of all music genres, styles and decades!"}/>
            <Showroom/>
        </div>
    )
}