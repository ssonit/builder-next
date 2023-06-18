import { BuilderComponent, BuilderPage } from "@builder.io/react";
import { NextPage } from "next";

interface LoginProps {}

const Login: NextPage<LoginProps> = ({}) => {
  return (
    <div>
      <h1>Login page</h1>
      {/* <BuilderComponent
        model="page"
        contentLoaded={(data, content) => {
          console.log(data, content);
        }}
      ></BuilderComponent> */}

      <BuilderPage model="page"></BuilderPage>
    </div>
  );
};

export default Login;
