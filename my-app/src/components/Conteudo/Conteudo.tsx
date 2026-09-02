import { useState } from 'react';
import imgQuadrado from '../../img/quadrado.png';


export default function Conteudo() {

    let numeroComum = 0;
    
    //Estado do React
    const [numeroState, setNumeroState] = useState(0);

    function aumentaVariavelComum() {
        numeroComum = numeroComum + 1;

        // O valor muda e aparece no console
        console.log("Variavel Comum: ", numeroComum);
    }

    function aumentarUseState() {
        // Por ser uma const, criamos uma arrow function para alteracao do valor
        setNumeroState((valorAtual)=> valorAtual + 1)

        console.log("Valor do estado: ", numeroState);
    }
    return(
        <main>

            <div>
                <h2>Exemplo de variável comum</h2>
                <p>Variavel Comum: {numeroComum}</p>
                <button onClick={aumentaVariavelComum}>Aumentar Variavel Comum</button>
            </div>
            <div>
                <h2>Exemplo de UseState</h2>
                <p>Valor do state: {numeroState}</p>
                <button onClick={aumentarUseState}>Aumentar o valor do state</button>
            </div>

            <section>
                <h2>Conteudo</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, ducimus.</p>
            </section>
            <section>
                <h2>Imagm com link externo</h2>
                <figure>
                    <img src="https://placehold.co/600x400/e1e1e1/000000/png" alt="Imagem de exemplo de 600x400px" />
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
                    <img src="/img/lampada.png" alt="Imagem de exemplo estática - Lampada"/>
                    <figcaption>Imagem de exemplo estática - Lampada</figcaption>
                </figure>
            </section>
        </main>
    )
}