import { useState, useEffect } from "react";

import "./style.scss";

const SignIn = () => {
  const [message, setMessage] = useState();

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/auth`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );

        const data = await response.json();

        setMessage(data.message);
      } catch (error) {
        console.error("Error fetching backend message:", error);
      }
    };

    fetchMessage();
  }, []);

  return (
    <div>
      SignIn
      {message && <p>{message}</p>}
    </div>
  );
};

export default SignIn;
