import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./BigCarousel.css";

const BigCarousel = () => {
    return (
        <div className="bigCarousel">
            <Carousel
                autoPlay
                width={"100%"}
                showThumbs={false}
                showStatus={false}
                dynamicHeight={false}
                infiniteLoop={true}
            >
                <div>
                    <img alt="" src="https://bandit.camp/img/crypto-banner.71a33601.jpg" />
                </div>
                <div>
                    <img alt="" src="https://bandit.camp/img/bg.514022b0.jpg" />
                </div>
                <div>
                    <img
                        alt=""
                        src="https://media.discordapp.net/attachments/892918116324085770/1091423968910651503/EasterWeb.png"
                    />
                </div>
                <div>
                    <img
                        alt=""
                        src="https://media.discordapp.net/attachments/892918116324085770/1065634437804593222/MinefieldMadness.png"
                    />
                </div>
                <div>
                    <img
                        alt=""
                        src="https://media.discordapp.net/attachments/892918116324085770/1056173251614756884/rake.png"
                    />
                </div>
                <div>
                    <img
                        alt=""
                        src="https://media.discordapp.net/attachments/892918116324085770/941406948086153266/scrap.png"
                    />
                </div>
                <div>
                    <img
                        alt=""
                        src="https://media.discordapp.net/attachments/892918116324085770/941406948891451392/discordweb.png"
                    />
                </div>
            </Carousel>
        </div>
    );
};

export default BigCarousel;
