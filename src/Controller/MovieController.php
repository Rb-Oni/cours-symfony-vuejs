<?php

namespace App\Controller;

use App\Entity\Movie;
use App\Repository\MovieRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MovieController extends AbstractController
{
    /**
     * @return Response
     */
    #[Route('/movie', name: 'app_movie_index')]
    public function app(): Response
    {
        return $this->render('movie/index.html.twig');
    }

    /**
     * @param MovieRepository $movieRepository
     * @return Response
     */
    #[Route('/api/movie/get', name: 'api_movie_get')]
    public function apiMovieGet(MovieRepository $movieRepository): Response
    {
        return $this->json($movieRepository->getPaginatedMovies());
    }

    /**
     * @param Request $request
     * @param MovieRepository $movieRepository
     * @return Response
     */
    #[Route('/api/movie/post', name: 'api_movie_post')]
    public function apiMoviePost(Request $request, MovieRepository $movieRepository): Response
    {
        $movie = new Movie();
        $title = json_decode($request->getContent(), true);
        $movie->setTitle($title['title']);

        $movieRepository->add($movie, true);

        return $this->json($movie);
    }

    /**
     * @param Request $request
     * @param Movie $movie
     * @param MovieRepository $movieRepository
     * @return Response
     */
    #[Route('/api/movie/put/{id}', name: 'api_movie_put')]
    public function apiMoviePut(Request $request, Movie $movie, MovieRepository $movieRepository): Response
    {
        $title = json_decode($request->getContent(), true);
        $movie->setTitle($title['title']);

        $movieRepository->add($movie, true);

        return $this->json($movie);
    }

    /**
     * @param Movie $movie
     * @param MovieRepository $movieRepository
     * @return Response
     */
    #[Route('/api/movie/delete/{id}', name: 'api_movie_delete')]
    public function delete(Movie $movie, MovieRepository $movieRepository): Response
    {
        $movieRepository->remove($movie, true);

        return $this->json($movieRepository->getPaginatedMovies());
    }

}
