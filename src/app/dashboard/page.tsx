import { http } from "@/lib/http";
import axios from "axios";

const DashboardPage = async () => {
  const getData = async () => {
    const { data } = await axios.get(
      "http://localhost:3000/api/todo/get?user_id=1",
    );
    return data;
  };
  console.log(await getData());
  return (
    <div>
      <h2>Home page</h2>
    </div>
  );
};

export default DashboardPage;
