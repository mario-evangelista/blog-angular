/* src/app/components/post-detail/post-detail.component.ts */

import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
// ActivatedRoute: Serviço do Angular para obter informações sobre a rota ativa no momento (incluindo parâmetros).
// RouterLink: Para usar [routerLink] no template (ex: link de voltar).
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';
// Observable, switchMap: Operadores RxJS.
// switchMap é útil para mapear um valor de um Observable (parâmetro da rota) para outro Observable (resultado da busca do post).
import { Observable, switchMap } from 'rxjs';

/**
 * Metadados do Componente PostDetailComponent.
 */
@Component({
  selector: 'app-post-detail', // Tag HTML: <app-post-detail></app-post-detail>
  standalone: true, // Componente Standalone.
  imports: [CommonModule, RouterLink], // Módulos/Componentes necessários para o template.
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss',
})
export class PostDetailComponent implements OnInit {
  // --- Injeção de Dependência ---
  // Injeta o serviço ActivatedRoute para acessar os parâmetros da URL.
  private route = inject(ActivatedRoute);
  // Injeta o PostService para buscar os dados do post específico.
  private postService = inject(PostService);

  // --- Propriedades do Componente ---
  /**
   * Observable que emitirá os dados do post a ser exibido, ou undefined se não for encontrado.
   * O template usará o pipe 'async' para se inscrever neste Observable.
   */
  post$: Observable<Post | undefined> | undefined;

  /**
   * Hook ngOnInit: Executado quando o componente é inicializado.
   */
  ngOnInit(): void {
    console.log('PostDetailComponent: ngOnInit executado.');
    // O objetivo aqui é pegar o parâmetro ':slug' da URL atual e usar o PostService para buscar o post correspondente.

    // 1. Acessa 'this.route.paramMap', que é um Observable que emite um mapa dos parâmetros da rota atual.
    this.post$ = this.route.paramMap.pipe(
      // 2. Usa o operador 'switchMap'. Quando paramMap emite um novo valor (ex: usuário navegou para outro post),
      //    ele cancela a requisição anterior (se houver) e inicia uma nova busca.
      switchMap((params) => {
        // 3. Obtém o valor do parâmetro 'slug' do mapa de parâmetros.
        //    O nome 'slug' deve corresponder ao que foi definido na configuração da rota ('path: 'post/:slug'').
        const slug = params.get('slug');
        console.log(`PostDetailComponent: Slug da URL = ${slug}`);

        // 4. Verifica se o slug foi encontrado na URL.
        if (slug) {
          // 5. Se encontrou o slug, chama o serviço para buscar o post por esse slug.
          //    O resultado (um Observable<Post | undefined>) é retornado pelo switchMap.
          return this.postService.getPostBySlug(slug);
        } else {
          // 6. Se o slug não foi encontrado na URL (improvável com a configuração de rota atual, mas bom verificar),
          //    retorna um Observable que emite 'undefined' imediatamente.
          console.warn('PostDetailComponent: Slug não encontrado na URL.');
          return new Observable<Post | undefined>((subscriber) =>
            subscriber.next(undefined)
          );
          // Alternativa: return of(undefined); // usando 'of' do RxJS
        }
      })
    ); // Fim do .pipe()

    // O Observable 'post$' agora está configurado. O template usará 'async' para obter o valor.
  }
}
