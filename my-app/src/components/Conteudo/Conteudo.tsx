import imgQuadrado from '../../img/quadrado.png';


export default function Conteudo() {
    return(
        <main>
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