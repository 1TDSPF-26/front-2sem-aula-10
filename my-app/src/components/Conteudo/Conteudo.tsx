import { useState } from "react";
import imgQuadrado from "../../img/quadrado.png";
import imgLampada from "../../img/lampada.png";

export default function Conteudo() {

  let numeroComum = 0;

  // Estado do React
  const [numeroState, setNumeroState] = useState(0);

  function aumentarNumeroComum() {
    numeroComum++;
    //O valor muda e aparece no console, mas não é renderizado na tela
    console.log("Número Comum: ", numeroComum);
  }

  function aumentarNumeroState() {
    setNumeroState(numeroState + 1);
  }


  return (
    <main>

    <div>
      <h2>Exemplo de variável comum</h2>
      <p>Número Comum: {numeroComum}</p>
      <button onClick={aumentarNumeroComum}>Aumentar Número Comum</button>
    </div>

    <div>
      <h2>Exemplo de variável de estado</h2>
      <p>Número State: {numeroState}</p>
      <button onClick={aumentarNumeroState}>Aumentar Número do State</button>
    </div>

        <section>
            <h2>Conteúdo</h2>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero perspiciatis expedita beatae, at tempora praesentium nihil fuga illum aut, maiores consequuntur porro repellendus sit laudantium, nemo explicabo modi molestiae ipsa?
            </p>
        </section>
        <section>
            <h2>Imagem com link externo</h2>
            <figure>
              <img src="https://placehold.co/600x400/e1e1e1/000000/png" alt="lampada" />
              <figcaption>Imagem de exemplo de 600x400px</figcaption>
            </figure>
        </section>
        <section>
          <h2>Imagem com referência interna</h2>
          <figure>
            <img src={imgQuadrado} alt="Imagem quadrada 400x400px" />
            <figcaption>Imagem de exemplo 400x400px</figcaption>
          </figure>
        </section>
        <section>
          <h2>Imagem com referência interna estática</h2>
          <figure>
            <img src={imgLampada} alt="Lampada de Desenho." />
            <figcaption>Imagem de exemplo estática - Lâmpada</figcaption>
          </figure>
        </section>
    </main>
  )
}