import logo from "./logo.svg";
import "./App.css";
import logo from "./logo.svg";
import "./App.css";
import FullName from "./component/profile/fullname";
import Adress from "./component/profile/address";
import Photo from "./component/profile/profilephoto";
function App() {
  return (
    <div className="portfolio">
      <Photo />
      <div className="info">
        <FullName />
        <Adress />
      </div>
    </div>
  );
}

export default App;
