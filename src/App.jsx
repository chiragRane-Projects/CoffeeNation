import AppBanner from "./components/AppBanner/AppBanner";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Service from "./components/Service/Service";
import WhereToBuy from "./components/Where To Buy/WhereToBuy";

const App = () => {
  return (
    <h1 className="overflow-x-hidden">
      <Hero/>
      <Service/>
      <WhereToBuy/>
      <AppBanner/>
      <Footer/>
    </h1>
  )
}

export default App;