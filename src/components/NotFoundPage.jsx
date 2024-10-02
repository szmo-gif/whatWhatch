import { Link } from "react-router-dom";
import Button from "../ui/Button";

export default function NotFoundPage() {
  return (
    <main>
      <h1>404</h1>
      <h2>Page not found</h2>

      <Link to="/">
        <Button text="Retourner sur la page d'accueil" />
      </Link>
    </main>
  )
}