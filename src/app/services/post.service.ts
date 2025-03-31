/* src/app/services/post.service.ts */

import { Injectable } from '@angular/core';
// Observable e 'of' são do RxJS, usados para lidar com dados assíncronos.
// 'of' cria um Observable que emite um valor (nossos dados mockados) imediatamente.
import { Observable, of } from 'rxjs';
// Importa a interface Post para garantir a tipagem correta dos dados.
import { Post } from '../models/post.model';

/**
 * Decorador @Injectable marca esta classe como um serviço que pode ser injetado em outros componentes/serviços.
 * 'providedIn: 'root'' significa que o Angular criará uma única instância deste serviço (singleton)
 * e ela estará disponível para ser injetada em qualquer lugar da aplicação.
 */
@Injectable({
  providedIn: 'root',
})
export class PostService {
  // --- Dados Mockados (Simulados) ---
  // Em uma aplicação real, estes dados viriam de uma API, CMS ou banco de dados.
  // Usamos dados mockados para desenvolver o frontend sem depender de um backend real no início.
  private mockPosts: Post[] = [
    {
      id: 1,
      slug: 'primeiro-post', // URL amigável
      title: 'Meu Primeiro Post',
      content:
        '<p>Este é o conteúdo do <strong>primeiro post</strong> escrito em HTML.</p><p>Podemos ter múltiplos parágrafos.</p>', // Exemplo com HTML
      publishDate: new Date('2025-03-28'), // Definindo uma data específica
    },
    {
      id: 2,
      slug: 'angular-19',
      title: 'Novidades do Angular 19+',
      content:
        '<h2>Standalone APIs como Padrão</h2><p>Angular continua focando em simplificar a experiência do desenvolvedor com Standalone Components, Directives e Pipes.</p><blockquote>Isso torna NgModules opcionais para muitas aplicações.</blockquote>', // Mais HTML
      publishDate: new Date('2025-03-30'),
    },
    {
      id: 3,
      slug: 'markdown-no-blog',
      title: 'Usando Markdown no Blog',
      content:
        'É possível usar Markdown para escrever posts e depois convertê-lo para HTML no frontend usando bibliotecas como `ngx-markdown`. \n\n`npm install ngx-markdown`\n\nIsso facilita a escrita!', // Conteúdo que poderia ser Markdown
      publishDate: new Date(), // Data atual
    },
  ];

  /**
   * Construtor do serviço.
   * Aqui poderíamos injetar outras dependências, como o HttpClient para fazer requisições HTTP.
   * Ex: constructor(private httpClient: HttpClient) {}
   */
  constructor() {}

  /**
   * Retorna um Observable que emitirá um array de todos os posts.
   * @returns Observable<Post[]> - Um fluxo de dados contendo a lista de posts.
   */
  getPosts(): Observable<Post[]> {
    // ---- Em uma aplicação real com backend ----
    // Aqui você faria uma chamada HTTP para buscar os posts da sua API.
    // Exemplo: return this.httpClient.get<Post[]>('/api/posts');
    // ------------------------------------------

    // Por enquanto, retornamos os dados mockados envolvidos em um Observable usando 'of'.
    console.log('PostService: Buscando todos os posts (mock).');
    return of(this.mockPosts);
  }

  /**
   * Retorna um Observable que emitirá um único post encontrado pelo seu 'slug', ou undefined se não encontrar.
   * @param slug - O slug (identificador de URL amigável) do post a ser buscado.
   * @returns Observable<Post | undefined> - Um fluxo de dados contendo o post encontrado ou undefined.
   */
  getPostBySlug(slug: string): Observable<Post | undefined> {
    // ---- Em uma aplicação real com backend ----
    // Aqui você faria uma chamada HTTP para buscar um post específico pela sua slug ou ID.
    // Exemplo: return this.httpClient.get<Post>(`/api/posts/${slug}`);
    // ------------------------------------------

    // Procura o post na nossa lista mockada usando o método find().
    const post = this.mockPosts.find((p) => p.slug === slug);
    console.log(
      `PostService: Buscando post com slug "${slug}". Encontrado:`,
      post
    );
    // Retorna o post encontrado (ou undefined se não achou) envolvido em um Observable.
    return of(post);
  }

  /**
   * (Opcional) Métodos futuros para um painel administrativo.
   *
   * createPost(newPost: Post): Observable<Post> { ... }
   * updatePost(postId: number | string, updatedData: Partial<Post>): Observable<Post> { ... }
   * deletePost(postId: number | string): Observable<void> { ... }
   */
}
