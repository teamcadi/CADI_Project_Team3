package com.cadi.team3.account;

import com.cadi.team3.domain.SignupDto;
import com.sun.tools.javac.comp.Todo;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
public class AccountController {


    @PostMapping("/sign-up")
    public void singUpRequest(@Valid SignupDto signupDto, Errors errors){
        if(errors.hasErrors()){
            // TODO 에러 처리
        }

        else return;  // TODO 회원가입 처리
    }

}
