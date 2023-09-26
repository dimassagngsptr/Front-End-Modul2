import Home from "../components/Home";
import { Link } from "react-router-dom";

function HomePage() {
   return (
      <div>
         <Home name="Lutfi" email="lutfi@gmail.com" />
         <Link to="/students">List students</Link>
      </div>
   );
}

export default HomePage;
