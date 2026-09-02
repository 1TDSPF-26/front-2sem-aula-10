# Aula — 8 de setembro de 2026
# Exercício — Lâmpada: variável comum versus `useState`

## Objetivo

Neste exercício, você criará duas lâmpadas:

1. Uma controlada por uma variável comum;
2. Outra controlada pelo Hook `useState`.

O objetivo é observar que uma variável comum pode mudar na memória, mas não atualiza automaticamente a interface. O `useState`, além de guardar o valor, solicita uma nova renderização do componente.

> **Hook** é uma função especial do React. O `useState` permite criar e atualizar o estado de um componente.

---

## Resultado esperado

A página deverá apresentar duas seções:

* Lâmpada controlada por variável comum;
* Lâmpada controlada por `useState`.

Ao clicar no primeiro botão, o valor será alterado somente no console.

Ao clicar no segundo botão, a imagem deverá alternar entre:

* Lâmpada acesa;
* Lâmpada apagada.

---

## 1. Organizar as imagens

Coloque as duas imagens dentro da pasta `public/images`:

```text
public/
└── images/
    ├── lampada-acesa.png
    └── lampada-apagada.png
```

Os arquivos da pasta `public` podem ser acessados diretamente pelo navegador.

Exemplo:

```tsx
<img src="/images/lampada-acesa.png" alt="Lâmpada acesa" />
```

---

## 2. Criar o componente

Crie a seguinte estrutura:

```text
src/
└── components/
    └── Lampada/
        └── index.tsx
```

No arquivo `src/components/Lampada/index.tsx`, comece com:

```tsx
import { useState } from 'react'

export default function Lampada() {
  // Variável comum.
  // Ela pode mudar, mas não atualiza a interface.
  let lampadaComumAcesa = false

  // Estado controlado pelo React.
  // false: lâmpada apagada.
  // true: lâmpada acesa.
  const [lampadaStateAcesa, setLampadaStateAcesa] =
    useState(false)

  function alternarVariavelComum() {
    // Inverte o valor da variável comum.
    lampadaComumAcesa = !lampadaComumAcesa

    // O novo valor poderá ser observado no console.
    console.log('Variável comum:', lampadaComumAcesa)
  }

  function alternarUseState() {
    // TODO:
    // Utilize setLampadaStateAcesa para inverter
    // o valor atual do estado.
  }

  return (
    <main>
      <h1>Variável comum versus useState</h1>

      <section>
        <h2>Lâmpada com variável comum</h2>

        <p>
          Estado:
          {lampadaComumAcesa ? ' acesa' : ' apagada'}
        </p>

        <img
          src={
            lampadaComumAcesa
              ? '/images/lampada-acesa.png'
              : '/images/lampada-apagada.png'
          }
          alt={
            lampadaComumAcesa
              ? 'Lâmpada controlada por variável comum acesa'
              : 'Lâmpada controlada por variável comum apagada'
          }
          width="250"
        />

        <div>
          <button
            onClick={alternarVariavelComum}
            type="button"
          >
            Alternar variável comum
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
          Estado:
          {lampadaStateAcesa ? ' acesa' : ' apagada'}
        </p>

        <img
          src={
            lampadaStateAcesa
              ? '/images/lampada-acesa.png'
              : '/images/lampada-apagada.png'
          }
          alt={
            lampadaStateAcesa
              ? 'Lâmpada controlada pelo useState acesa'
              : 'Lâmpada controlada pelo useState apagada'
          }
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
```

---

## 3. Completar a função do `useState`

Dentro da função `alternarUseState`, utilize a função responsável por atualizar o estado:

```tsx
function alternarUseState() {
  setLampadaStateAcesa(
    (estadoAtual) => !estadoAtual,
  )
}
```

O símbolo `!` significa **negação**. Neste exemplo, ele inverte o valor:

```text
false → true
true  → false
```

---

## 4. Utilizar o componente no App

Abra o arquivo `src/App.tsx` e importe o componente:

```tsx
import Lampada from './components/Lampada'

export default function App() {
  return <Lampada />
}
```

---

## 5. Executar o projeto

No terminal, execute:

```bash
npm run dev
```

Abra o endereço apresentado pelo Vite no navegador.

---

## 6. Testar a variável comum

1. Abra o console do navegador;
2. Pressione o botão **Alternar variável comum**;
3. Observe os valores apresentados no console;
4. Confira se a imagem foi alterada na página.

O valor da variável mudará no console, mas a imagem continuará apagada.

Isso acontece porque uma variável comum não informa ao React que a interface precisa ser renderizada novamente.

---

## 7. Testar o `useState`

Pressione o botão da segunda lâmpada.

O comportamento esperado será:

```text
Clique no botão
      ↓
O estado é invertido
      ↓
O React renderiza o componente novamente
      ↓
A imagem e o texto são atualizados
```

A cada clique, a lâmpada deverá alternar entre acesa e apagada.

---

## Entendendo a operação ternária

A imagem é escolhida por uma operação ternária:

```tsx
lampadaStateAcesa
  ? '/images/lampada-acesa.png'
  : '/images/lampada-apagada.png'
```

A estrutura de uma operação ternária é:

```text
condição ? valor verdadeiro : valor falso
```

Portanto:

```text
lampadaStateAcesa === true
→ mostra lampada-acesa.png

lampadaStateAcesa === false
→ mostra lampada-apagada.png
```

---

## Requisitos obrigatórios

* [ ] Criar o componente `Lampada`;
* [ ] Importar `useState`;
* [ ] Criar uma variável comum;
* [ ] Criar um estado com `useState`;
* [ ] Utilizar as imagens acesa e apagada;
* [ ] Utilizar uma operação ternária;
* [ ] Criar um botão para cada exemplo;
* [ ] Alterar o texto do botão do `useState`;
* [ ] Utilizar textos alternativos no atributo `alt`;
* [ ] Não utilizar CSS;
* [ ] Não utilizar Tailwind CSS;
* [ ] Testar o resultado no navegador;
* [ ] Verificar a variável comum no console.

---

## Perguntas para responder

1. Por que a variável comum não atualiza a imagem na página?
2. O que a função `setLampadaStateAcesa` faz?
3. O que o símbolo `!` faz com um valor booleano?
4. Qual é a função da operação ternária?
5. O que acontece quando o estado é atualizado?
6. Por que utilizamos dois arquivos de imagem?
7. Qual é a diferença entre `lampadaStateAcesa` e `setLampadaStateAcesa`?

> **Valor booleano** é um valor que possui somente duas possibilidades: `true`, que significa verdadeiro, ou `false`, que significa falso.

---

## Desafio

Depois de concluir o exercício:

1. Faça a lâmpada começar acesa;
2. Adicione um título diferente para cada estado;
3. Mostre a mensagem `Economize energia!` quando a lâmpada estiver acesa;
4. Mostre a mensagem `A lâmpada está descansando.` quando ela estiver apagada;
5. Crie um segundo componente utilizando o mesmo conceito.

---

## Registrar a atividade no Git

Confira as alterações:

```bash
git status
```

Adicione os arquivos:

```bash
git add .
```

Crie o commit:

```bash
git commit -m "feat: adiciona exercício da lâmpada com useState"
```

Publique as alterações:

```bash
git push
```



---

# Aula — 2 de setembro de 2026

## Inicialização de um projeto do zero

Nesta aula, criaremos uma aplicação com **Vite + React + TypeScript**, utilizando uma branch do Git Flow.

---

## 1. Clonar o repositório

Abra o Git Bash e execute:

```bash
git clone <endereço-remoto-do-repositório>
```

Entre na pasta do repositório:

```bash
cd <nome-do-repositório>
```

---

## 2. Inicializar o Git Flow

Antes de executar o comando, confirme que você está na branch `main`:

```bash
git branch
```

Inicialize a estrutura do Git Flow:

```bash
git flow init
```

Pressione `Enter` para aceitar as opções apresentadas.

---

## 3. Criar uma feature

A **feature**, ou funcionalidade, será a branch utilizada para desenvolver a atividade.

Utilize o seguinte padrão:

```bash
git flow feature start exemplo-seu-rm
```

Exemplo:

```bash
git flow feature start exemplo-rm4894894
```

O Git Flow criará uma branch com o prefixo `feature/`:

```text
feature/exemplo-rm4894894
```

---

## 4. Publicar a feature

Publique a branch no repositório remoto:

```bash
git flow feature publish exemplo-rm4894894
```

---

## 5. Criar o projeto com Vite

Execute o comando:

```bash
npm create vite@latest
```

Selecione as seguintes opções:

| Pergunta                | Opção        |
| ----------------------- | ------------ |
| Nome da aplicação       | `my-app`     |
| Framework               | `React`      |
| Variante                | `TypeScript` |
| Linter                  | `Oxlint`     |
| Instalar utilizando npm | `Yes`        |

Aguarde a criação e a instalação do projeto.

---

## 6. Encerrar o servidor e entrar na aplicação

Se o servidor de desenvolvimento estiver em execução, encerre-o utilizando:

```text
Ctrl + C
```

Entre na pasta criada pelo Vite:

```bash
cd my-app
```

---

## 7. Abrir o projeto no Visual Studio Code

Execute:

```bash
code .
```

O ponto representa a pasta atual.

---

## 8. Fechar o Git Bash

Depois que o projeto abrir no Visual Studio Code, feche a janela do Git Bash.

Os próximos comandos poderão ser executados pelo terminal integrado do Visual Studio Code.

Para abrir o terminal integrado, utilize:

```text
Ctrl + `
```

---

## 9. Limpar o boilerplate do Vite

**Boilerplate** é a estrutura inicial de arquivos e códigos criada automaticamente por uma ferramenta.

Realize a limpeza abaixo.

### 9.1. Remover arquivos públicos desnecessários

Remova o conteúdo inicial da pasta:

```text
public/
```

A pasta poderá ser mantida ou recriada posteriormente para receber arquivos públicos, como o favicon.

### 9.2. Remover o README duplicado

Remova o arquivo abaixo somente se já existir outro `README.md` na raiz do repositório:

```text
my-app/README.md
```

### 9.3. Remover os recursos visuais do Vite

Exclua a pasta:

```text
src/assets/
```

### 9.4. Remover os arquivos CSS

Exclua:

```text
src/index.css
src/App.css
```

### 9.5. Remover os imports dos arquivos CSS

No arquivo `src/main.tsx`, remova:

```tsx
import './index.css'
```

No arquivo `src/App.tsx`, remova:

```tsx
import './App.css'
```

### 9.6. Limpar o componente App

Apague o conteúdo gerado pelo Vite em `src/App.tsx` e crie um componente funcional básico:

```tsx
export default function App() {
  return (
    <main>
      <h1>Minha aplicação React</h1>
    </main>
  )
}
```

### 9.7. Atualizar o arquivo index.html

No arquivo `index.html`:

1. Altere o idioma para português do Brasil:

```html
<html lang="pt-BR">
```

2. Remova o `<link>` que aponta para o ícone do Vite.

3. Altere o título da página:

```html
<title>Minha aplicação React</title>
```

---

## 10. Criar um commit

Confira os arquivos alterados:

```bash
git status
```

Adicione as alterações:

```bash
git add .
```

Crie o commit:

```bash
git commit -m "feat: cria estrutura inicial da aplicação"
```

---

## 11. Publicar as alterações

Envie o commit para a feature publicada anteriormente:

```bash
git push
```

---

## 12. Exercício — Criar componentes

Crie três componentes funcionais:

```text
Cabecalho
Conteudo
Rodape
```

Sugestão de organização:

```text
src/
├── components/
│   ├── Cabecalho/
│   │   └── index.tsx
│   ├── Conteudo/
│   │   └── index.tsx
│   └── Rodape/
│       └── index.tsx
├── App.tsx
└── main.tsx
```

Depois, modularize o componente `App.tsx`, importando e utilizando os três componentes.

A estrutura esperada será semelhante a:

```tsx
import Cabecalho from './components/Cabecalho'
import Conteudo from './components/Conteudo'
import Rodape from './components/Rodape'

export default function App() {
  return (
    <>
      <Cabecalho />
      <Conteudo />
      <Rodape />
    </>
  )
}
```

---

## 13. Adicionar uma imagem ao componente Conteudo

Dentro do componente `Conteudo`, crie:

* Um elemento `<figure>`;
* Um elemento `<img>`;
* Um elemento `<figcaption>`.

Utilize a imagem:

```text
https://placehold.co/600x400/FFFFF0/FFFFFF/png
```

Exemplo da estrutura:

```tsx
export default function Conteudo() {
  return (
    <main>
      <h2>Conteúdo principal</h2>

      <figure>
        <img
          src="https://placehold.co/600x400/FFFFF0/FFFFFF/png"
          alt="Imagem ilustrativa do conteúdo"
        />

        <figcaption>
          Imagem utilizada para representar o conteúdo da aplicação.
        </figcaption>
      </figure>
    </main>
  )
}
```

O atributo `alt` apresenta uma descrição textual da imagem e ajuda pessoas que utilizam leitores de tela.

---

## 14. Exercício — Adicionar um favicon

**Favicon** é o pequeno ícone exibido na aba do navegador.

1. Escolha um ícone;
2. Coloque o arquivo dentro da pasta `public`;
3. Adicione a referência no `index.html`.

Exemplo:

```html
<link rel="icon" type="image/png" href="/favicon.png">
```

A estrutura ficará semelhante a:

```text
my-app/
├── public/
│   └── favicon.png
├── src/
└── index.html
```

---

## 15. Finalizar a atividade

Confira novamente as alterações:

```bash
git status
```

Adicione os arquivos:

```bash
git add .
```

Crie o commit:

```bash
git commit -m "feat: adiciona componentes e favicon"
```

Publique as alterações:

```bash
git push
```
