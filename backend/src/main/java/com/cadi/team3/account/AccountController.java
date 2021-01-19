package com.cadi.team3.account;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RequiredArgsConstructor
@RestController
public class AccountController {

    private final AccountService accountService;

    @PostMapping("/sign-up")
    public ResponseEntity<?> singUpRequest(@RequestBody @Valid SignupDto signupDto, Errors errors){
        return accountService.signUp(signupDto, errors);
    }

}
