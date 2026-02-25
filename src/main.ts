import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { name } from './bases/01-types.ts'
import { user  } from './bases/02-objetosInterfaces.ts'
import { userClass } from './bases/03-classes.ts'
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <h2>${name}</h2>
    <h2> ${user[1].nombre} : ${user[1].edad}</h2>
    <h2>Nombre ${userClass.nombre} <br> Edad: ${userClass.edad} </h2>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>

  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
