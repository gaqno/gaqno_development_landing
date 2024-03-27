import Link from "next/link";
import User from "../components/User";
import Repos from "../components/Repo";

export default function App() {
  return (
    <div>
      <h1>App</h1>
      <User />
      <Repos />
    </div>
  )
}