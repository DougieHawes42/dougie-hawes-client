import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button3 } from "../../utils/buttons";
import { Input1 } from "../../utils/inputs";

import "./style.scss";

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const { email, password } = formData;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/auth/signin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Sign in failed");
      }

      localStorage.setItem("token", data.token);

      navigate("/dashboard");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="route sign-in">
      <form className="sign-in-form" onSubmit={handleSubmit}>
        <Input1
          label="email"
          value={email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <Input1
          label="password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <p onClick={() => setShowPassword(!showPassword)}>show password</p>
        <Button3 />
      </form>
    </div>
  );
};

export default SignIn;
