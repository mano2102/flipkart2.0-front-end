import React from "react";
import "./header.css";
import { Image } from "@chakra-ui/image";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Button, IconButton } from "@chakra-ui/button";
import { SearchIcon } from "@chakra-ui/icons";

const Header = () => {
  return (
    <header>
      <div className="header-wrapper-one">
        <div className="site-logo">
          <Image src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" />
        </div>
        <div className="search-bar">
            <Input 
            type='search'
            placeholder="Search Product,Categoris and Brands"
            
            />
        </div>
      </div>
      <div className="header-wrapper-two">
        <div>
            <Button>Login</Button>
        </div>
        <div>Cart</div>
        <div>Become a Seller</div>
      </div>
    </header>
  );
};

export default Header;
