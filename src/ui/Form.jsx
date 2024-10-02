import Button from "./Button";
import Input from "./Input.jsx";

export default function Form({ submit, button, email, password, changeEmail, changepassword }) {

  return (
    <form onSubmit={submit}>
      <Input
        type="email"
        placeholder="entrez votre email"
        value={email}
        onChange={changeEmail}
        required
      />
      <Input
        type="password"
        placeholder="entrez votre mot de passe"
        value={password}
        onChange={changepassword}
        required
      />
      <Button type={"submit"} text={button} />
    </form>
  );
}
