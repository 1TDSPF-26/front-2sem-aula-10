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
