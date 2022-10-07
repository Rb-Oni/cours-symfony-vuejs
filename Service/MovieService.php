<?php

namespace App\Service;

use App\Repository\MovieRepository;

class MovieService
{

    public function __construct()
    {
    }

    /**
     * Do some work with paginated movies
     */
/*    public function workWithMovie()
    {
        // Get the first page of movies
        $paginatedResult = $this->movieRepository->getMovies(1);
        // get the total number of movies
        $totalMovie = count($paginatedResult);

        // Use the Paginator iterator
        foreach ($paginatedResult as $movie) {
            $movie->doSomething();
        }
    }*/

}