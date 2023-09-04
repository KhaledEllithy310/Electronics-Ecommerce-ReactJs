import BannerList from "../components/BannerList";
import Footer from "../components/Footer";
import GuideItemList from "../components/GuideItemList";
import Newsletter from "../components/Newsletter";
import Slider from "../components/Slider";
import Products from "../components/products";

const Home = () => {
  return (
    <div>
      <Slider />
      <BannerList />
      <GuideItemList />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
