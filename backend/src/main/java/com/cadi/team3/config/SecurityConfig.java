package com.cadi.team3.config;

import com.cadi.team3.config.oAuth.PrincipalOAuth2UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@RequiredArgsConstructor
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    //private final PrincipalOAuth2UserService principalOAuth2UserService;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable();
        http.authorizeRequests()
                .mvcMatchers("/","/sign-up","/login")
                .permitAll()
                .anyRequest().authenticated();


                /*
                *
                * OAuth2 Login
                * */
//                .and()
//                .oauth2Login()
//                .userInfoEndpoint()
//                .userService(principalOAuth2UserService);
    }
}
