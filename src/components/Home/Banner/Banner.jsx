import "./Banner.scss";
import BannerImg from '../../../assets/banner-img.png'
const Banner = () => {
    return (
      <div className="hero_banner">
        <div className="content">
            <div className="text_content">
             <h1>Sales</h1>
             <p>
              Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
             Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem
             ipsum dolor
             </p>
             <div className="ctas">
                <div className="banner_cta">Read More</div>
                <div className="banner_cta v2">Shop Now</div>
             </div>
            </div>
            <img className="banner_img" src={BannerImg} alt="img" />
        </div>
      </div>


    )
};

export default Banner;
