package com.cadi.team3.utils;

import com.cadi.team3.movie.MovieDto;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Component
public class MovieRankingSearch {
    @Value("${rank.key}")
    public String  key = "29595549429faddd13e0fbdab5b86f23";;

    public String get(){
        RestTemplate rest = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        String body = "";

        HttpEntity<String> requestEntity = new HttpEntity<String>(body, headers);
        ResponseEntity<String> responseEntity = rest.exchange("http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key="+key+"&targetDt="+LocalDateTime.now().minusDays(1).format(DateTimeFormatter.ofPattern("yyyyMMdd")), HttpMethod.GET, requestEntity, String.class);
        HttpStatus httpStatus = responseEntity.getStatusCode();
        int status = httpStatus.value();
        String response = responseEntity.getBody();
        return response;
    }

    public List<MovieDto> getRankList(String get){
        List<MovieDto> movieDtos = new ArrayList<>();
        JSONArray array = new JSONObject(get).getJSONObject("boxOfficeResult").getJSONArray("dailyBoxOfficeList");
        for(int i=0; i<array.length(); i++){
            MovieDto movieDto =  new MovieDto();
            JSONObject item = array.getJSONObject(i);
            int rank = item.getInt("rank");
            String movieNm = item.getString("movieNm");
            movieDto.setRank(rank);
            movieDto.setMovieNm(movieNm);
            movieDtos.add(movieDto);
        }
        return movieDtos;
    }


    public static void main(String[] args) {
        MovieRankingSearch movieRankingSearch = new MovieRankingSearch();
        String get = movieRankingSearch.get();
        for(int i=0;i<get.length();i++){
            System.out.println(movieRankingSearch.getRankList(get).get(i).getMovieNm());
        }
    }
}
