import imagem2 from "../../img/quadrado.png"

export default function Conteudo(){
    return(
        <main>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae rerum repudiandae itaque repellendus nisi, voluptates ex nihil, magnam iusto facere rem, nulla dolor laudantium aliquid? Dolores eveniet molestiae eligendi excepturi quis repellat fugit necessitatibus ipsa. Sapiente sunt soluta eveniet sequi inventore quos modi, quas rerum cum illo excepturi iste aspernatur.</p>
            <section>
                <h2>Imagem com link externo</h2>
                <figure><img src="https://placehold.co/600x400/FFFFF0/000000/png" alt="exemplo de imagem" />
                <figcaption>exemplo de imagem</figcaption></figure>
            </section>
            <section>
                <h2>imagem com link externo</h2>
                <img src={imagem2} alt="imagem exemplo link externo" />
                <figcaption>imagem exemplo link externo</figcaption>
            </section>
            <section>
                <h2>imagem exemplo com referencia estatica interna</h2>
                <img src="/image/image.png" alt="imagem lampada" />
                <figcaption>imagem lampada</figcaption>
            </section>
        </main>
    )
}