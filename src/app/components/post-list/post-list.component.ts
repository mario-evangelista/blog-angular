/* src/app/components/post-list/post-list.component.ts */

// Component: Para definir metadados do componente.
// OnInit: Interface para o hook de ciclo de vida ngOnInit (executado após a criação do componente).
// inject: Função moderna para injeção de dependência.
import { Component, OnInit, inject } from '@angular/core';
// CommonModule: Necessário para usar diretivas como *ngIf, *ngFor, e pipes como 'async', 'date', 'slice' no template Standalone.
import { CommonModule } from '@angular/common';
// RouterLink: Necessário para usar a diretiva [routerLink] no template para navegação.
import { RouterLink } from '@angular/router';
// Importa o serviço que busca os dados dos posts.
import { PostService } from '../../services/post.service';
// Importa a interface Post para tipagem.
import { Post } from '../../models/post.model';
// Importa Observable do RxJS para lidar com o fluxo de dados assíncrono do serviço.
import { Observable } from 'rxjs';

/**
 * Metadados do Componente PostListComponent.
 */
@Component({
  selector: 'app-post-list', // Nome da tag HTML para usar este componente (<app-post-list></app-post-list>).
  standalone: true, // Indica que este é um Standalone Component (não precisa ser declarado em um NgModule).
  imports: [
    CommonModule, // Importa módulos/componentes/diretivas necessários para o template deste componente Standalone.
    RouterLink,
  ],
  templateUrl: './post-list.component.html', // Caminho para o arquivo HTML do template.
  styleUrl: './post-list.component.scss', // Caminho para o arquivo de estilos SCSS específico deste componente.
})
export class PostListComponent implements OnInit {
  // Implementa OnInit para usar o hook ngOnInit.

  // --- Injeção de Dependência ---
  // Forma moderna (preferida desde Angular 14+) de injetar o PostService.
  // A função 'inject()' obtém a instância do serviço.
  private postService = inject(PostService);

  // --- Propriedades do Componente ---
  /**
   * Propriedade para armazenar o Observable retornado pelo serviço.
   * Usar um Observable aqui permite que o template use o pipe 'async' para
   * se inscrever/desinscrever automaticamente e lidar com os dados quando chegarem.
   * O tipo é 'Observable<Post[] | undefined>' para indicar que pode ser um array de Posts ou undefined inicialmente.
   */
  posts$: Observable<Post[]> | undefined;

  /**
   * Hook de Ciclo de Vida ngOnInit.
   * É chamado pelo Angular uma vez depois que as propriedades de entrada (@Input) do componente
   * foram inicializadas. É um bom lugar para buscar dados iniciais.
   */
  ngOnInit(): void {
    console.log('PostListComponent: ngOnInit executado.');
    // Chama o método getPosts() do serviço e atribui o Observable resultante à propriedade posts$.
    this.posts$ = this.postService.getPosts();
    // O template agora pode usar `*ngIf="posts$ | async as posts"` para exibir os dados.
  }
}
