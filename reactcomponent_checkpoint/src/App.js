
import "./App.css";
import FullName from "./component/profile/fullname";
import Adress from "./component/profile/address";
import Photo from "./component/profile/profilephoto";
import { Button, Spinner } from "react-bootstrap";
function App() {
  return (
    <div className="portfolio">
      <Photo />
      <div className="info">
        <FullName />
        <Adress />
      </div>
      <Spinner animation="border" size="sm" role="status"></Spinner>
      <p> loading image </p>
      <Button className="btn-style" size="sm" variant="outline-dark">
        This is a button
      </Button>{" "}
    </div>
  );
}

export default App;
