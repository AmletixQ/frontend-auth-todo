import TodoPage from "@/components/todos/TodoPage";
import getServerSession from "@/hooks/getServerSession";
import { ITodoItem } from "@/interfaces/todoTypes";
import { http } from "@/lib/http";
import { cookies } from "next/headers";

const DashboardPage = async () => {
  const session = await getServerSession();
  const getTodos = async () => {
    const { data } = await http.get<ITodoItem[]>(`/todos`, {
      headers: {
        Cookie: cookies().toString(),
      },
    });
    return data;
  };

  const todos = await getTodos();
  return <TodoPage todolist={todos} session={session} />;
};

export default DashboardPage;
