//HOC
import DefaultHOC from "./HOC/Default.HOC";

//Pages
import HomePage from "./Pages/Home.page";

//css files for React slick sliders
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />
    </> 
  );
}

export default App;
