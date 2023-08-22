import { useState } from "react";
import topCarouselData from "./../../../../Data/MainPage/TopCarouselMockData";
import "./TopCarousel.css";
import { Carousel } from "react-responsive-carousel";
const TopCarousel = () => {
    const [translate, setTranslate] = useState(6000);

    const loop = () => {
        setTimeout(() => {
            if (translate === 0) {
                setTranslate(6000);
                return;
            } else {
                setTranslate(translate - 150);
            }
        }, 1000);
    };

    loop();

    return (
        <div className="topCarousel">
            <div className="carouselSlider" style={{ "--translate": `-${translate}px` }}>
                {topCarouselData.map((item, index) => {
                    return (
                        <div className="item" id={`item${index}`} key={index}>
                            <img src={`/MainPage/${item.gameMode}.png`} />
                            <div className="nameAndPrize">
                                <div className="prize">
                                    <img style={{ width: "20px" }} src="/Skins/Scrap.png" />
                                    <h6>{item.prize}</h6>
                                </div>
                                <div className="name">
                                    <img style={{ width: "20px" }} src="/Levels/Four.png"></img>
                                    <p>{item.Name}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TopCarousel;
