<?php

namespace App\Controller;

use App\Repository\MovieRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MovieController extends AbstractController
{
    #[Route('/movie', name: 'app_movie_index')]
    public function app(): Response
    {
        return $this->render('movie/index.html.twig');
    }

    #[Route('/api/movie', name: 'api_movie')]
    public function apiMovie(MovieRepository $movieRepository): Response
    {
        // Get the first page of movies
        $paginatedResult = $movieRepository->getPaginatedMovies(1);
        // get the total number of movies
        $totalMovie = count($paginatedResult);

        $movies = [];
        // Use the Paginator iterator
        foreach ($paginatedResult as $movie) {
            $movies[] = $movie->getTitle();
        }

        return new JsonResponse($movies);
    }

}
