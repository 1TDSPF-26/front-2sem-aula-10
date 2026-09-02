import imgQuadrado from "../../image/quadrado.png";
import { useState } from "react";
import lampadaAcessaImport from "../../image/lampada.png"
import lampadaApagadaImport from "../../image/lampada-apagada.png"


export default function Conteudo() {

    let numeroComum = 0;
    //Estado do React
    const [numeroState, setNumeroState] = useState(0);
    
    function aumentaVariavelComum(){
        numeroComum = numeroComum + 1;
        
        //O valor muda e aparece no console 
        console.log("Variavél comum: ", numeroComum)
        //Mas, não aparecerá na página

    }


    function aumentarUseState(){
        //O React altera o estado e renderiza novamente a página/componente.
        setNumeroState((valorAtual) => valorAtual + 1)
        console.log("Valor do estado: ", numeroState )
    }

    let lampadaAcessa = <img src={lampadaAcessaImport} alt="Imagem de lâmpada acessa" style={{width: "50px"}}/>;
    let lampadaApagada = <img src={lampadaApagadaImport} alt="Imagem de lâmpada apagada" style={{width: "50px"}} />;

    const [lampadaState, setLampadaState] = useState(lampadaApagada);

    function acendeLampada(){
        setLampadaState(lampadaAcessa)
    }

    function apagaLampada(){
        setLampadaState(lampadaApagada)
    }
    

  return (
    <main>

        <div>
            <h2>Exemplo de váriavel comum</h2>
            <p>Variavél Comum {numeroComum}</p>
            <button onClick={aumentaVariavelComum}>Aumentar Variavél Comum</button>
        </div>

        <div>
            <h2>Exemplo de Use State</h2>
            <p>Valor do State: {numeroState}</p>
            <button onClick={aumentarUseState}>Aumentar o valor do State</button>
        </div>

        <div>
            <h2>Usando o UseState para acender a lâmpada</h2>
            {lampadaState}
            <button onClick={acendeLampada} style={{margin : "2rem"}}>Acender lampada</button>
            <button onClick={apagaLampada}>Apagar lampada</button>
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
            <img src="/img/lampada.png" alt="Lâmpada de desenho" />
            <figcaption>Imagem de exemplo estática - Lâmpada</figcaption>
          </figure>
        </section>
    </main>
  )
}
