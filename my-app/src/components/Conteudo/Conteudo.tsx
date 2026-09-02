import { useState } from "react";
import ImagemQuadrado from "../../img/quadrado.png";


export default function Conteudo() {
  let numeroComum = 0;
  //estado do react
  const [numeroState, setNumeroState] = useState(0);

  function aumentarVariavelComun() {
    numeroComum = numeroComum + 1;
    //valor muda e aparece no console

    console.log("variavel comum = ", numeroComum);
  }

  function AumentearNumeroState() {
    setNumeroState((valorAtual) => valorAtual + 1)
    console.log("Valor do estado:", numeroState);

  }

  return (
    <main>

      <div>
        <h2>Exemplo de Variavel Comun</h2>
        <p>Variavel Comum: {numeroComum}</p>
        <button onClick={aumentarVariavelComun}>Aumentar Variavel Comun</button>
      </div>
      <div>
        <h2>Exemplo de Uso State</h2>
        <p>Valor do State: {numeroState}</p>
        <button onClick={AumentearNumeroState}>Aumentar Valor State</button>

      </div>

      <section>
        <h2>Conteúdo da aplicação</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam ullam asperiores explicabo at, similique beatae! Omnis error reprehenderit incidunt minus accusamus blanditiis, eveniet quo facere quidem nihil atque eius distinctio animi praesentium iusto totam dolorum veritatis consequatur vel, magnam corporis assumenda adipisci repellat? Sapiente dolore perferendis excepturi laudantium culpa aperiam.</p>
        <figure>
          <img src="https://placehold.co/600x400/FFFFF0/FFFFFF/png" alt="imagem" />
          <figcaption>Imagem de Exemplo 600x400</figcaption>
        </figure>
      </section>
      <section>
        <h2>Imagem com Referencia Interna</h2>
        <figure>
          <img src={ImagemQuadrado} alt="Imagem Quadrada" />
          <figcaption>Imagem Quadrado</figcaption>
        </figure>
      </section>
      <section>
        <h2>Imagem Interna Estatica</h2>
        <figure>
          <img src="/image/lampada.png " alt="lampada Desenho" />
          <figcaption>Imagem de Exemplo Estatica -Lampada</figcaption>
        </figure>
      </section>


    </main>
  )
}
