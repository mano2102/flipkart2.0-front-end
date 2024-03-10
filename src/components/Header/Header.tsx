import React, { useState } from "react";
import "./header.css";
import { Image } from "@chakra-ui/image";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";

import Login from "../Login/Login";

const Header = () => {
  const [modelstate, setModelstate] = useState(false);

  return (
    <>
      <header>
        <div className="header-wrapper-one">
          <div className="site-logo">
            <Image src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" />
          </div>
          <div className="search-bar">
            <Input
              type="search"
              placeholder="Search Product,Categories and Brands"
            />
          </div>
        </div>
        <div className="header-wrapper-two">
          <div>
            <Button
              onClick={() => {
                setModelstate(!modelstate);
              }}
            >
              Login
            </Button>
          </div>

          <div>
            <button>Cart</button>
          </div>
          <div>Become a Seller</div>
        </div>
      </header>
      {modelstate && (
        <div className="custom-model-container">
          <div className="custom-model">
            <div className="custom-model-header">
              <Button
                onClick={() => {
                  setModelstate(!modelstate);
                }}
              >
                X
              </Button>
            </div>
            <div className="custom-model-body">
              <Login />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
