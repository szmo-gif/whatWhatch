import { useState } from 'react';
import { signUp } from '../../API/user.js';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm.jsx';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleAuth = async (event) => {
    event.preventDefault();
    try {
      let userCredential
      userCredential = await signUp(email, password);
      alert(`Bonjour ${userCredential.user.email}`);
      console.log(userCredential);
      setEmail('');
      setPassword('');
      navigate('/home');

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <h1>Bienvenue chez nous !</h1>

      <h2>Inscrivez-vous</h2>

      <LoginForm
        submit={(e) => handleAuth(e)}
        button="S'inscrire"
        email={email}
        password={password}
        changeEmail={(e) => setEmail(e.target.value)}
        changepassword={(e) => setPassword(e.target.value)}
      />
    </main>
  );
}