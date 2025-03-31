# Blog Simples com Angular 19+ 📝

> Um projeto de exemplo de um blog básico construído com Angular (v19+), utilizando funcionalidades modernas como Standalone Components, Roteamento e Serviços.

Este repositório contém o código-fonte de um blog simples desenvolvido como um exercício prático ou ponto de partida para projetos maiores com Angular. Atualmente, ele utiliza dados mockados (simulados) para exibir os posts.

## ✨ Funcionalidades Implementadas

* **Listagem de Posts:** Página inicial exibe uma lista de todos os posts disponíveis.
* **Visualização de Post Individual:** Cada post tem sua própria página de detalhes acessível via slug na URL.
* **Roteamento:** Configuração de rotas usando o `AppRoutingModule` (ou `app.routes.ts` para standalone) para navegação entre a lista e os detalhes.
* **Componentes Standalone:** O projeto utiliza a arquitetura baseada em Standalone Components, introduzida como padrão em versões recentes do Angular.
* **Serviço de Dados:** Um `PostService` é responsável por fornecer os dados dos posts (atualmente mockados).
* **Estilização Básica:** Estilos aplicados usando SCSS e Variáveis CSS para uma aparência limpa e fácil manutenção.
* **Interface de Modelo:** Definição de uma interface `Post` para garantir a estrutura dos dados.

## 🚀 Tecnologias Utilizadas

* **Angular (~19):** Framework frontend principal.
* **TypeScript:** Linguagem base para o desenvolvimento Angular.
* **SCSS:** Pré-processador CSS para estilização.
* **RxJS:** Para programação reativa e gerenciamento de dados assíncronos (Observables).
* **Angular CLI:** Ferramenta de linha de comando para gerar, construir e servir a aplicação.
* **Node.js & npm:** Ambiente de execução e gerenciador de pacotes.

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

* **Node.js:** Versão LTS recomendada (que inclui o npm). [Download Node.js](https://nodejs.org/)
* **Angular CLI:** Instale globalmente via npm:
    ```bash
    npm install -g @angular/cli
    ```

## ⚙️ Setup & Instalação

Siga os passos abaixo para configurar o projeto localmente:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git](https://www.google.com/search?q=https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git)
    # ou use a URL SSH se preferir
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd nome-do-diretorio-clonado # Ex: cd blog-angular
    ```

3.  **Instale as dependências do projeto:**
    ```bash
    npm install
    ```

## ▶️ Rodando o Servidor de Desenvolvimento

Após a instalação das dependências, você pode iniciar o servidor de desenvolvimento local:

```bash
ng serve -o
````

  * O comando `ng serve` compila a aplicação, inicia um servidor web local e observa seus arquivos. Qualquer alteração nos arquivos reconstruirá automaticamente a aplicação.
  * A flag `-o` (ou `--open`) abre automaticamente a aplicação no seu navegador padrão.
  * Por padrão, a aplicação estará disponível em `http://localhost:4200/`.

O servidor também suporta Hot Module Replacement (HMR) para atualizações mais rápidas durante o desenvolvimento sem recarregar a página inteira.

## 📦 Build para Produção (Opcional)

Para criar uma versão otimizada da aplicação para implantação (deploy):

```bash
ng build
```

  * Este comando compila a aplicação com otimizações para produção (minificação, tree-shaking, etc.).
  * Os arquivos resultantes estarão na pasta `dist/nome-do-seu-projeto/browser/` (o nome exato pode variar ligeiramente dependendo da versão do CLI e configurações).
  * Esses arquivos estáticos podem ser implantados em qualquer servidor web ou plataforma de hospedagem estática (Netlify, Vercel, GitHub Pages, etc.).

## 💾 Fonte de Dados

**Importante:** Atualmente, este projeto utiliza **dados mockados (simulados)** que estão hardcoded dentro do serviço `src/app/services/post.service.ts`.

Para conectar a uma fonte de dados real, você precisará:

1.  Escolher uma fonte de dados:
      * **Headless CMS:** Contentful, Strapi, Sanity, etc. (Recomendado para blogs)
      * **API REST/GraphQL própria:** Um backend customizado (Node.js, Python, PHP, etc.)
      * **BaaS:** Firebase (Firestore), Supabase.
      * **Arquivos Markdown:** Processados no build (SSG) ou no cliente.
2.  Modificar o `PostService`:
      * Injetar o `HttpClient` do Angular (`provideHttpClient()` em `app.config.ts`).
      * Substituir os retornos `of(this.mockPosts)` e `of(post)` por chamadas HTTP (`this.httpClient.get(...)`) para buscar os dados da sua fonte escolhida.

## 🔮 Próximos Passos / Melhorias Possíveis

Este projeto é uma base. Algumas ideias para expandi-lo:

  * [ ] **Integração com Fonte de Dados Real:** Conectar a um Headless CMS ou API.
  * [ ] **Renderização de Markdown:** Se usar Markdown, adicionar uma biblioteca como `ngx-markdown`.
  * [ ] **Sanitização de HTML:** Implementar sanitização se o conteúdo vier como HTML (usar `DomSanitizer`).
  * [ ] **Área Administrativa (CRUD):** Criar rotas e componentes protegidos para criar, editar e excluir posts.
  * [ ] **Autenticação:** Adicionar login para a área administrativa.
  * [ ] **SEO e Performance:** Implementar Server-Side Rendering (SSR com Angular Universal) ou Static Site Generation (SSG com Scully/AnalogJS). Adicionar Meta Tags dinâmicas.
  * [ ] **Funcionalidades:** Paginação, busca, categorias/tags, comentários (Disqus, etc.).
  * [ ] **Testes:** Adicionar testes unitários (Karma/Jasmine) e/ou E2E (Cypress/Playwright).
  * [ ] **UI/UX:** Refinar o design, adicionar animações, melhorar a responsividade.

## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes (se você adicionar um).

```markdown
MIT License

Copyright (c) [Ano] [Seu Nome ou Nome da Organização]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

*(Opcional: Crie um arquivo chamado `LICENSE` na raiz do projeto e cole o texto da licença acima, substituindo `[Ano]` e `[Seu Nome ou Nome da Organização]`)*

## ✍️ Autor

  * **[Mário Evangelista]**
  * GitHub: [mario-evangelista](https://www.google.com/url?sa=E&source=gmail&q=https://github.com/mario-evangelista)
  * LinkedIn: [Mário Evanmgelista](https://www.linkedin.com/in/marioevangelista)
