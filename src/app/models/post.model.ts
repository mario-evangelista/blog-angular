/* src/app/models/post.model.ts */

/**
 * Define a estrutura (o formato) de um objeto Post.
 * Usar uma interface garante que todos os lugares que trabalham com 'Post'
 * sigam o mesmo formato, ajudando a evitar erros e melhorando a autocompletude no código.
 */
export interface Post {
  /**
   * Identificador único do post.
   * Pode ser um número (vindo de um banco de dados) ou uma string (como um 'slug').
   */
  id: number | string;

  /**
   * Título principal do post, exibido de forma proeminente.
   */
  title: string;

  /**
   * Conteúdo completo do post.
   * Pode conter HTML ou Markdown (que precisará ser processado antes de exibir).
   */
  content: string;

  /**
   * Nome do autor do post (opcional).
   * O '?' indica que esta propriedade pode ou não existir em um objeto Post.
   */
  author?: string;

  /**
   * Data de publicação do post (opcional).
   */
  publishDate?: Date;

  /**
   * Uma string amigável para URLs, geralmente derivada do título (ex: 'meu-primeiro-post').
   * Útil para criar rotas mais legíveis e para SEO (opcional, mas recomendado).
   */
  slug?: string;
}
