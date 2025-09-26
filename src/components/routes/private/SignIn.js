import { useState } from "react";

import { Button3 } from "../../utils/buttons";
import { Input1 } from "../../utils/inputs";

import "./style.scss";

const SignIn = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const { username, password } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="route sign-in">
      <form className="sign-in-form" onSubmit={handleSubmit}>
        <Input1
          label="username"
          value={username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />
        <Input1
          label="password"
          type="password"
          value={password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <Button3 />
      </form>
    </div>
  );
};

export default SignIn;
