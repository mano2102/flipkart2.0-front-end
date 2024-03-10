import React from "react";
import "../Login/login.css";
import { Image } from "@chakra-ui/image";
import TextField from "@mui/material/TextField";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";

// import { EditableTextarea } from "@chakra-ui/editable";

const Login = () => {
  return (
    <div className="login-container">


    <div className="login-wrapper">
      <div className="login-wrapper-image">
        <Image src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?t=st=1710065042~exp=1710068642~hmac=77cda63da844a28c0814eb344c7a995b33e7c1ca26f5173734dc24365883bc5e&w=826" />
      </div>
      <div className="login-number">
        <form>
          <div className="profile-pic">
            <Image src="https://th.bing.com/th/id/R.f29406735baf0861647a78ae9c4bf5af?rik=GKTBhov2iZge9Q&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_206976.png&ehk=gCH45Zmryw3yqyqG%2fhd8WDQ53zwYfmC8K9OIkNHP%2fNU%3d&risl=&pid=ImgRaw&r=0" />
          </div>
          <h1>Welcome Back</h1>
          <Input placeholder="Enter your mobile number" type="number" />
          <Input placeholder="Enter your password" type="password" />
          <Button>Login</Button>
          
         
        </form>
      </div>

     
    </div>
    </div>
  );
};

export default Login;
