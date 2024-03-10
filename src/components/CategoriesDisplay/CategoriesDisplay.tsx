import { Image } from "@chakra-ui/image";

import "../CategoriesDisplay/CategoryDisplay.css"
import { Link } from "react-router-dom";
const CategoriesDisplay = () => {
  return (
    <nav className="category-container">

      <Link to="#">
      <div>
        <Image src="https://rukminim2.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100"
        />
        <span>Grocery</span>

      </div>
      </Link>
      <Link to="#">

      <div>
        <Image src="https://rukminim2.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100"
        />
        <span>Mobiles</span>

      </div>
      </Link>
      <Link to="#">

      <div>
        <Image src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100"
        />
        <span>Fashion</span>

      </div>
      </Link>
      <Link to="#">

      <div>
        <Image src="https://rukminim2.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100"
        />
        <span>Electronics</span>

      </div>
      </Link>
      <Link to="#">

      <div>
        <Image src="https://rukminim2.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100"
        />
        <span>Home and Furnitures</span>

      </div>
      </Link>
      <Link to="#">

      <div>
        <Image src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=100"
        />
        <span>Appliances</span>

      </div>
      </Link>
      <Link to="#">

      <div>
        <Image src="https://rukminim2.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100"
        />
        <span>Travel</span>

      </div>
      </Link>
      <Link to="#">

      <div>
        <Image src="https://rukminim2.flixcart.com/flap/80/80/image/dff3f7adcf3a90c6.png?q=100"
        />
        <span>Beauty,Toys and More</span>

      </div>
      </Link>
      <Link to="#">

      <div>
        <Image src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/05d708653beff580.png?q=100"
        />
        <span>Two Wheelers</span>

      </div>
      </Link>

    </nav>
  );
};

export default CategoriesDisplay;
