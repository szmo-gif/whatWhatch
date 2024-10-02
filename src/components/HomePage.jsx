import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { auth } from "../API/firebase";

export default function HomePage() {
  return (
    <div>
      <h1>Bonjour {auth.currentUser.email}</h1>

      <Link to="/">
        <Button text="deconnexion" />
      </Link>
    </div>
  )
}