import RegisterForm from "@/components/RegisterForm";

const RegisterPage = () => {
  return (
    <div>
      <h1>Register page</h1>
      <RegisterForm url={process.env.DEVELOP_URL}/>
    </div>
  );
};

export default RegisterPage;
