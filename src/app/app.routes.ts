/* src/app/app.routes.ts */

// Importa o tipo Routes do módulo de roteamento do Angular.
import { Routes } from '@angular/router';

// Importa os componentes que serão associados às rotas.
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';

/**
 * Define as rotas da aplicação.
 * Cada objeto na array 'routes' representa uma configuração de rota.
 */
export const routes: Routes = [
  {
    path: '', // Caminho da rota raiz (ex: http://localhost:4200/)
    redirectTo: 'posts', // Redireciona a rota raiz para '/posts'
    pathMatch: 'full', // Exige que o caminho seja exatamente vazio ('') para redirecionar. Importante para rotas de redirecionamento.
  },
  {
    path: 'posts', // Caminho para a lista de posts (ex: http://localhost:4200/posts)
    component: PostListComponent, // Componente a ser renderizado quando esta rota for ativada.
    title: 'Meu Blog - Posts', // Define o título da página no navegador para esta rota (bom para acessibilidade e SEO).
  },
  {
    path: 'post/:slug', // Caminho para um post específico. ':slug' é um parâmetro dinâmico.
    // O valor real na URL (ex: 'primeiro-post') será capturado pelo componente.
    // Ex: http://localhost:4200/post/primeiro-post
    component: PostDetailComponent, // Componente que exibirá o detalhe do post.
    // title: '...' // Poderíamos definir um título dinâmico aqui usando um Resolver ou no próprio componente.
  },
  {
    // Rota Curinga (Wildcard): Captura qualquer URL que não corresponda às rotas anteriores.
    path: '**',
    // Redireciona URLs não encontradas de volta para a lista de posts.
    // Alternativamente, poderia apontar para um componente 'NotFoundComponent'.
    redirectTo: 'posts',
    // Ou: component: NotFoundComponent, title: 'Página não encontrada'
  },
];
