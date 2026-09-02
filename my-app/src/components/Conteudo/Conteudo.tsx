import imgQuadrado from '../../img/quadrado.png'
import imgLampada from '../../img/lampada.png'

export default function Conteudo() {
  return (
    <main>
        <section>
            <h1>Seção de Conteúdo</h1>
            <p>Este é o conteúdo da seção principal da página.</p>
        </section>
        <section>
            <h2>Imagem com Link Externo</h2>
            <figure>
                <img src="https://placehold.co/600x400/FFFFF0/FFFFFF/png" alt="Imagem de exemplo" />
                <figcaption>Imagem de exemplo</figcaption>
            </figure>
        </section>
        <section>
            <h2>Imagem com referencia interna</h2>
            <figure>
                <img src={imgQuadrado} alt="Imagem quadrada" />
                <figcaption>Imagem quadrada</figcaption>
            </figure>
            <figure>
                <img src={imgLampada} alt="Imagem de lampada" />
                <figcaption>Imagem de lampada</figcaption>
            </figure>
            </section> 
    </main>
  )
}