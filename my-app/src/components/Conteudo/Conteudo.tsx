import { useState } from "react";
import imgQuadrado from "../../img/quadrado.png";

export default function Conteudo(){

    let numeroComum = 0;

    //estado do React
    const [numeroState, setNumeroState] = useState(0);

    function aumentaVariavelComum(){
        numeroComum = numeroComum + 1;

        //O valor muda e aparece no console
        console.log(`Váriavel comum: ${numeroComum}`);
        //mas não aparecerá na página
    }

    function aumentarUseState(){
        //o React altera o estado e renderiza a página/componente
        setNumeroState((valorAtual) => valorAtual + 1);
        console.log(`Valor do estado: ${numeroState}`);
    }


    return(
        <main>

            <div>
                <h2>Exemplo de variável comum</h2>
                <p>Variável comum: {numeroComum}</p>
                <button onClick={aumentaVariavelComum}>Aumentar variável comum</button>
            </div>

            <div>
                <h2>Exemplo de vvariável de UseState</h2>
                <p>Valor do state: {numeroState}</p>
                <button onClick={aumentarUseState}>Aumentar valor do state</button>
            </div>

            <section>
                <h2>Conteúdo</h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem deserunt magni nobis recusandae molestiae debitis assumenda vero incidunt unde dolore harum officiis consectetur commodi est, sunt obcaecati similique labore voluptatum?

                </p>
            </section>

            <section>
                <h2>Imagem com link externo</h2>

                <figure>
                    <img src="https://placehold.co/600x400/FFFFF0/FFFFFF/png" alt="Imagem de exemplo externo." />
                    <figcaption>Imagem utilizada para representar o conteúdo da aplicação 600x400.</figcaption>
                </figure>
            </section>

            <section>
                <h2>Imagem com referência local</h2>

                <figure>
                    <img src={imgQuadrado} alt="Imagem quadrada de 400x400." />
                    <figcaption>Imagem de exemplo de 400x400</figcaption>
                </figure>
            </section>

            <section>
                <h2>Imagem de referência interna estática</h2>

                <figure>
                    <img src="/img/lampada.png" alt="Lãmpada desenhada." />
                    <figcaption>Imagem de exemplo estática - Lâmpada</figcaption>
                </figure>
            </section>



        </main>
    );
}