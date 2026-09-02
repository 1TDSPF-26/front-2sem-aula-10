import { useState } from 'react'

export default function Lampada() {
  // Variável comum.
  // Ela pode mudar, mas não atualiza a interface.
  let lampadaComumAcesa = false

  // Estado controlado pelo React.
  // false: lâmpada apagada.
  // true: lâmpada acesa.
  const [lampadaStateAcesa, setLampadaStateAcesa] = useState(false)

  function alternarVariavelComum() {
    // Inverte o valor da variável comum.
    lampadaComumAcesa = !lampadaComumAcesa
    // O novo valor poderá ser observado no console.
    console.log('Variável comum:', lampadaComumAcesa)
  }
  function alternarUseState() {
    setLampadaStateAcesa((estadoAtual) => !estadoAtual,) //false → true, true  → false
  }

  return (
    <main>
      <h1>Variável comum versus useState</h1>

      <section>
        <h2>Lâmpada com variável comum</h2>

        <p>
          Estado: {lampadaComumAcesa ? ' acesa' : ' apagada'}
        </p>

        <img
          src={lampadaComumAcesa ? '/images/lampada-acesa.png' : '/images/lampada-apagada.png'}
          alt={lampadaComumAcesa ? 'Lâmpada controlada por variável comum acesa' : 'Lâmpada controlada por variável comum apagada'}
          width="250"
        />

        <div>
          <button
            onClick={alternarVariavelComum} type="button"> Alternar variável comum
          </button>
        </div>

        <p>
          Observe o console depois de pressionar o botão.
        </p>
      </section>

      <hr />

      <section>
        <h2>Lâmpada com useState</h2>

        <p>
          Estado: {lampadaStateAcesa ? ' acesa' : ' apagada'}
        </p>

        <img
          src={lampadaStateAcesa ? '/images/lampada-acesa.png' : '/images/lampada-apagada.png'}
          alt={lampadaStateAcesa ? 'Lâmpada controlada pelo useState acesa' : 'Lâmpada controlada pelo useState apagada'}
          width="250"
        />

        <div>
          <button
            aria-pressed={lampadaStateAcesa}
            onClick={alternarUseState}
            type="button"
          >
            {lampadaStateAcesa
              ? 'Apagar lâmpada'
              : 'Acender lâmpada'}
          </button>
        </div>
      </section>
    </main>
  )
}
