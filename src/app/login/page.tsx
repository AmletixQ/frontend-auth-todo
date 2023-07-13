import LoginForm from "@/components/LoginForm";
import { authConfig } from "@/configs/auth";

const LoginPage = () => {
  console.log(authConfig);
  return (
    <div>
      <h1>Login page</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
