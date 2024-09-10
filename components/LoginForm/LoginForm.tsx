import { useState } from "react";
import axios from "axios";
import cookie from "js-cookie";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import Button from "../Button/Button";

const LoginForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowError, setShowError] = useState(false);
  const [isButtonLoading, setButtonLoading] = useState(false);

  const loginUser = async () => {
    try {
      setButtonLoading(true);

      const body = {
        email: email,
        password: password,
      };

      const response = await axios.post("http://localhost:3002/login", body);

      if (response.status === 200) {
        cookie.set("inventory_app_jwt", response.data.token);
        cookie.set("company_id", response.data.companyId);
        router.push("/");
      }

      console.log(response);

      setButtonLoading(false);
    } catch (err) {
      console.log("err", err);
      setShowError(true);
      setButtonLoading(false);
    }
  };

  return (
    <div className={styles.main}>
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
        placeholder="email"
        type="text"
      />
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
        placeholder="password"
        type="password"
      />

      {isShowError && <h5 className={styles.error}>Bad email or password</h5>}

      <Button onClick={loginUser} title="Login" isLoading={isButtonLoading} />
    </div>
  );
};

export default LoginForm;
