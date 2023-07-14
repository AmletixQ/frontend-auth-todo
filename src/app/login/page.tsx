import LoginForm from "@/components/LoginForm";

const LoginPage = () => {
  return (
    <div>
      <h1>Login page</h1>
      <LoginForm url={process.env.DEVELOP_URL} />
    </div>
  );
};

export default LoginPage;
