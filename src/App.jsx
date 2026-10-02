import m from './m.jpg';
import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="d1">
      <img src={m} alt="Photo étudiant" />
    <h1 >Ficher etudient</h1>
    <table>
  <tbody>
    <tr>
      <td>Nom & Prénom</td>
      <td>Nasr Salah</td>
    </tr>

    <tr>
      <td>Email</td>
      <td>slhnasr7@gmail.com</td>
    </tr>

    <tr>
      <td>Téléphone</td>
      <td>+216 48029818</td>
    </tr>

    <tr>
      <td>Filière</td>
      <td>Sciences Informatiques : Génie Logiciel et Systèmes Informatiques</td>
    </tr>

    <tr>
      <td>Année d'étude</td>
      <td>2026/2027</td>
    </tr>

    <tr>
      <td>Groupe</td>
      <td>GLSI2 C</td>
    </tr>

    <tr>
      <td>Ville</td>
      <td>Boumerdess, Mahdia</td>
    </tr>
  </tbody>
</table>

    <button onClick={() => window.location.href = "mailto:slhnasr7@gmail.com"}>
  Envoyer un email
</button>
    </div>
    </>
  )
}

export default App
