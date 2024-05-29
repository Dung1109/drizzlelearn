import { getData } from "@/actions/todoActions";
import AddTodo from "@/component/AddTodo";
import Todo from "@/component/Todo";
import Todos from "@/component/Todos";

export default async function Home() {
  const data = await getData();
  return <Todos todos={data} />;
}
