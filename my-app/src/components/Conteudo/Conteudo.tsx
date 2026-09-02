import imgQuadrado from "../../img/quadrado.png";

export default function Conteudo() {
  return (
    <main>
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
          <img src="/image/lampada.png" alt="" />
          <figcaption>Imagem de exemplo estática - Lâmpada</figcaption>
        </figure>
      </section>
    </main>
  );
}
