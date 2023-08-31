import "./App.css";
import BannerList from "./components/BannerList";
import Footer from "./components/Footer";
import GuideItemList from "./components/GuideItemList";
import Newsletter from "./components/Newsletter";
import Slider from "./components/Slider";
import Home from "./pages/Home";
<link
  href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
  rel="stylesheet"
></link>;
function App() {
  return (
    <>
      <Home />
      <Slider />
      <BannerList />
      <GuideItemList />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
