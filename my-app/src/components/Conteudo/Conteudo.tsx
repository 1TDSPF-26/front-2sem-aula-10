import imgQuadrado from "../../img/quadrado.png";

export default function Conteudo(){
    return(
        <main>

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
                <h2>Imagem de referência intern estática</h2>
                <figure>
                    <img src="/img/lampada.png" alt="Lãmpada desenhada." />
                    <figcaption>Imagem de exemplo estática - Lâmpada</figcaption>
                </figure>
            </section>

        </main>
    );
}