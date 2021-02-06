package com.cadi.team3.movie;

import com.cadi.team3.movie.dto.MovieResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@RequiredArgsConstructor
@Service
public class MovieApi {
    private final RestTemplate restTemplate;

    private final String CLIENT_ID="TIzsReWa2Y0LQLPWtweT";
    private final String CLIENT_SECRET ="vAlETozopo";
    private final String OpenApiUrl_getMovie = "https://openapi.naver.com/v1/search/movie.json?query={title}";

    public MovieResponseDto requestMovie(String title){
        final HttpHeaders headers = new HttpHeaders();
        headers.set("Client-Id",CLIENT_ID);
        headers.set("Client-Secret",CLIENT_SECRET);

        final HttpEntity <String> entity = new HttpEntity<>(headers);

        return restTemplate.exchange(OpenApiUrl_getMovie, HttpMethod.GET,entity,MovieResponseDto.class,title).getBody();

    }
}
