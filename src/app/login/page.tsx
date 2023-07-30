import LoginForm from "@/components/LoginForm";
import { FormBlock } from "@/components/UI/FormBlock";

const LoginPage = async () => {
  return (
    <FormBlock>
      <h1>Login page</h1>
      <LoginForm />
    </FormBlock>
  );
};

export default LoginPage;
