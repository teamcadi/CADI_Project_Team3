package com.cadi.team3.movie;

import com.cadi.team3.movie.dto.MovieResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


@RequiredArgsConstructor
@RestController
public class MovieController {
    private final MovieService movieService;

    //영화 검색
    @GetMapping("search/{title}")
    public MovieResponseDto get(@PathVariable String title){
        return movieService.findByKeyword(title);
    }


}
