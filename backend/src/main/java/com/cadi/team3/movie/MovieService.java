package com.cadi.team3.movie;

import com.cadi.team3.movie.dto.MovieResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class MovieService {
    private static MovieApi movieApi;

    public static MovieResponseDto findByKeyword(String title){
        return movieApi.requestMovie(title);
    }
}
