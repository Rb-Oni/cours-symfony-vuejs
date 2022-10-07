<?php

namespace App\Controller;

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

    #[Route('/api/movie/{title}', name: 'api_movie')]
    public function apiMovie(string $title): Response
    {
        return new JsonResponse('hello ' . $title);
    }

}
