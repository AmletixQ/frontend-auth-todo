import { getSession } from "@/lib/session";

const Dashboard = async () => {
  const session = await getSession();
  if (!session) return <h1>Redirect...</h1>;
  return (
    <div className="px-10">
      <h1 className="text-2xl font-bold text-yellow-500">
        Hello, {session.username}!
      </h1>
    </div>
  );
};

export default Dashboard;
