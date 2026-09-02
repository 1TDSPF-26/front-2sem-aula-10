# Aula-02/09/2026
## //Inicializando um repositório do ZERO
1 - Clonar o repositório
git clone endereço-remoto-repositorio
2 - Inicializar a estrutura do flow estando na main
git flow init
3 - Criando a sua feature em formato especifico:
git flow feature start exemplo-seu-rm / Ex: exemplo-rm4894894
4 - Publique a sua feature. 
git flow feature publish exemplo-seu-rm
5 - Rodar o comando do npm create para gerar um boiler plate de um projeto do vite+react+ts
npm create vite@
- nome da aplicação: my-app
- framework: react
- variante: Typescript
- Linter : Oxlint
- Instalar pelo npm : YES
6 - Após a instalação derrubar o servidor com ^C[ Control + C ].
- Entre na pasta do projeto que foi criada : Ex cd my-app
7 - Acesse o vs-code com o comando code .
8 - Feche o Gitbash
9 - Iniciar a limpeza do boiler plate
- Pasta /public e seu conteúdo
- Arquivo README.md da raiz do projeto deve ser deletado, caso já exista uma README no repositório.
- Pasta /assets e seu conteúdo que fica dentro de /src
- Arquivos index.css e App.css que estão na raiz da /src
- Remover a o import de index.css que está dentro de main .tsx
- Limpar completamente o componente App.tsx e construir a estrutura de um componente funcional básico nele.
- No arquivo index.html, alterar o lang para pt-br e remover o link que faz referência para um ícone que já foi removido.
- Alterar o título da página no index.html
10 - Criar um commit
11 - Publicar alterações
12 - Exercícios
a) Criar 3 componentes funcionais[Cabecalho,Conteudo,Rodape]
b) Modularizar o componente App.tsx.
13 - Criando exemplo de imagens em Conteúdo
- Crie um elemento figure dentro dele adicione um elemento img + figcaption e preencha com os dados dessa imagem: https://placehold.co/600x400/FFFFF0/FFFFFF/png
14-Exercicio: Adicione um favicon a sua escolha na pasta public e faça a referência no index.html.
