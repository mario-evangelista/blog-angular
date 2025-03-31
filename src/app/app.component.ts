/* src/app/app.component.ts */

import { Component } from '@angular/core';
// RouterOutlet: Diretiva que marca onde os componentes das rotas ativas devem ser renderizados.
// RouterLink: Diretiva para criar links de navegação entre rotas.
import { RouterOutlet, RouterLink } from '@angular/router';

/**
 * Metadados do AppComponent, o componente raiz da aplicação.
 */
@Component({
  selector: 'app-root', // Seletor usado em index.html (<app-root></app-root>).
  standalone: true, // Componente Standalone.
  imports: [
    RouterOutlet, // Necessário para renderizar os componentes das rotas.
    RouterLink, // Necessário para usar [routerLink] no template deste componente.
  ],
  // Template HTML inline (em vez de um arquivo .html separado).
  // Define a estrutura básica da página: cabeçalho, área principal e rodapé.
  template: `
    <header class="app-header">
      <div class="container">
        <h1><a routerLink="/">Meu Blog com Angular</a></h1>
        <nav></nav>
      </div>
    </header>

    <main class="app-main">
      <div class="container">
        <router-outlet></router-outlet>
      </div>
    </main>

    <footer class="app-footer">
      <div class="container">
        <p>© {{ currentYear }} Meu Blog. Feito com Angular.</p>
      </div>
    </footer>
  `,
  // Estilos SCSS inline (em vez de um arquivo .scss separado).
  // Estes estilos se aplicam apenas a este componente (AppComponent).
  styles: [
    `
      /* Estilo aplicado ao próprio elemento host <app-root> */
      :host {
        display: flex; /* Usa flexbox para organizar header, main, footer verticalmente */
        flex-direction: column; /* Direção da coluna */
        min-height: 100vh; /* Garante que o app ocupe pelo menos toda a altura da viewport */
        /* Isso ajuda a manter o footer no final em páginas com pouco conteúdo. */
      }

      /* Classe de container para centralizar e limitar a largura do conteúdo */
      .container {
        max-width: 800px; /* Largura máxima do conteúdo */
        margin-left: auto; /* Centraliza horizontalmente */
        margin-right: auto; /* Centraliza horizontalmente */
        /* Usa a variável CSS global '--spacing-unit' definida em styles.scss, com 1rem como fallback */
        padding-left: var(--spacing-unit, 1rem);
        padding-right: var(--spacing-unit, 1rem);
      }

      /* Estilos do Cabeçalho */
      .app-header {
        background-color: var(--light-gray, #f8f9fa); /* Fundo cinza claro */
        padding: var(--spacing-unit, 1rem) 0; /* Espaçamento interno vertical */
        border-bottom: 1px solid var(--border-color, #dee2e6); /* Linha sutil abaixo */

        h1 {
          margin: 0; /* Remove margem padrão do h1 */
          font-size: 1.8rem; /* Tamanho um pouco menor que o h1 padrão */
          text-align: center; /* Centraliza o título */
          a {
            color: var(
              --text-color,
              #333
            ); /* Cor de texto normal (não a cor primária de link) */
            text-decoration: none; /* Remove sublinhado */
            &:hover {
              color: var(
                --primary-color,
                #007bff
              ); /* Muda para a cor primária no hover */
            }
          }
        }
      }

      /* Estilos da Área Principal */
      .app-main {
        flex-grow: 1; /* Faz esta seção crescer para ocupar o espaço disponível entre header e footer */
        padding: calc(var(--spacing-unit, 1rem) * 2) 0; /* Maior espaçamento vertical */
      }

      /* Estilos do Rodapé */
      .app-footer {
        background-color: var(--light-gray, #f8f9fa); /* Fundo cinza claro */
        padding: var(--spacing-unit, 1rem) 0; /* Espaçamento interno vertical */
        border-top: 1px solid var(--border-color, #dee2e6); /* Linha sutil acima */
        text-align: center; /* Centraliza o texto */
        p {
          margin: 0; /* Remove margem padrão do parágrafo */
          font-size: 0.9rem; /* Texto ligeiramente menor */
          color: var(--text-color-light, #666); /* Cor de texto mais clara */
        }
      }
    `,
  ],
})
export class AppComponent {
  // Propriedade para obter o ano atual dinamicamente.
  currentYear = new Date().getFullYear();
}
