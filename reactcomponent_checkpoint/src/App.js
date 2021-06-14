
import "./App.css";
import FullName from "./component/profile/fullname";
import Adress from "./component/profile/address";
import Photo from "./component/profile/profilephoto";
import { Button } from "react-bootstrap";
function App() {
  return (
    <div className="portfolio">
      <Photo />
      <div className="info">
        <FullName />
        <Adress />
      </div>
      <Button variant="primary">Primary</Button>{" "}
    </div>
  );
}

export default App;
