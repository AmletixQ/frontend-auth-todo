import RegisterForm from "@/components/RegisterForm";
import { FormBlock } from "@/components/UI/FormBlock";

const RegisterPage = async () => {
  return (
    <FormBlock>
      <h1>Register page</h1>
      <RegisterForm />
    </FormBlock>
  );
};

export default RegisterPage;
