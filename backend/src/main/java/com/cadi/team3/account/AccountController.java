package com.cadi.team3.account;

import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
public class AccountController {

    private final AccountService accountService;

    @PostMapping("/sign-up")
    @ApiOperation(value = "회원가입", notes = "signupDto로 전송")
    public ResponseEntity<?> singUpRequest(@RequestBody @Valid SignupDto signupDto, Errors errors){
        return accountService.signUp(signupDto, errors);
    }

    @GetMapping("/get-account")
    @ApiOperation(value = "로그인 회원정보 조회")
    public ResponseEntity<?> getAccount(@AuthenticationPrincipal AccountPrincipal accountPrincipal){
        return new ResponseEntity<>(accountPrincipal, HttpStatus.OK);
    }

}
