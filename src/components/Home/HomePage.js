import { useNavigate } from "react-router-dom";
import VideoHomePage from "../../assets/video-homepage.mp4";
const HomePage = () => {
    const nagivate = useNavigate()
    return (
        <div className="homepage-container">
            <video autoPlay muted loop>
                <source src={VideoHomePage} type="video/mp4" />
            </video>
            <div className="homepage-content">
                <div className="title">
                    There's a better way to buy
                </div>
                <div className="para">
                You don't want to make a boring form. And your audience won't answer one. Create a typeform instead—and make everyone happy.
                </div>
                <div className="button-hp">
                <button className="btn_1" onClick={() => { nagivate("/product") }}>Shopping Now !
                </button>
        </div>
            </div>
        </div>
    )
}
export default HomePage