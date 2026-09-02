import { useState } from "react";
import imgQuadrado from "../../img/quadrado.png";

export default function Conteudo() {

    let numeroComum = 0;

    //Estado do React
    const [numeroState, setNumeroState] = useState(0);

    function aumentaVariavelComum(){
      numeroComum = numeroComum + 1;

      //O valor nmuda e aparece no console
      console.log("Variavel comum:", numeroComum)
      //Mas não aparecerá na página
    }

    function aumentarUseState(){
      //O React altera o estado e renderiza novamente a p[agina/componente]
      setNumeroState((valorAtual)=> valorAtual + 1);
      console.log("Valor do estado: ", numeroState)
    }

  return (
    <main>

      <div>
        <h2>Exemplo de variável comum</h2>
        <p>Variável comum: {numeroComum}</p>
        <button onClick={aumentaVariavelComum}>Aumentar variável comum</button>
      </div>
      <div>
        <h2>Exemplo de UseState</h2>
        <p>Valor do state: {numeroState}</p>
        <button onClick={aumentarUseState}>Aumentar o valor do state</button>
      </div>
      <section>
        <h2>Conteúdo principal</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe aspernatur temporibus dolorum doloribus eaque. 
        Consequatur necessitatibus, voluptate odit facilis suscipit explicabo praesentium incidunt blanditiis fugit sequi, 
        quos aperiam tenetur ducimus!</p>
      </section>
      <section>
        <h2>Imagem com link externo</h2>
        <figure>
          <img src="https://placehold.co/600x400/FFFFF0/FFFFFF/png" alt="Imagem de exemplo de 600x400px" />
          <figcaption>Imagem de exemplo 600x400px</figcaption>
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
        <h2>Imagem com referência interna</h2>
        <figure>
          <img src="/image/lampada.png" alt="Lâmpada de Desenho" />
          <figcaption>Imagem de exemplo estática - Lâmpada</figcaption>
        </figure>
      </section>
    </main>
  );
}
