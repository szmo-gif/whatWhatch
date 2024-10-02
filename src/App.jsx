import { useState } from 'react';
import Form from './ui/Form';
import { signUp } from './API/user';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAuth = async (event) => {
    event.preventDefault();
    try {
      let userCredential
      userCredential = await signUp (email, password);
      alert(`Bonjour ${userCredential.user.email}`);
      console.log(userCredential);
      setEmail('');
      setPassword('');

    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  };

  return (
    <main>
      <h1>Bienvenue chez nous !</h1>

      <h2>Inscrivez-vous</h2>
      
      <Form
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

export default App;
