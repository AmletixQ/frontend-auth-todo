import Button from "@/components/UI/Button";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header>
        <Button>Sign out</Button>
      </header>
      <main>{children}</main>
    </>
  );
};

export default layout;
