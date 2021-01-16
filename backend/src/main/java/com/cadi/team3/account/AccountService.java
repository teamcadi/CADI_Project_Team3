package com.cadi.team3.account;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.Errors;
import org.springframework.validation.ObjectError;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;


@RequiredArgsConstructor
@Service
public class AccountService {

    private final AccountRepository accountRepository;

    private List<String> validCheck(SignupDto signupDto, Errors errors){
        List<String> errorList = new ArrayList<>();

        Iterator<ObjectError> it = errors.getAllErrors().iterator();
        while(it.hasNext()){
            errorList.add(it.next().getDefaultMessage());
        }

        if(accountRepository.existsByEmail(signupDto.getEmail())){
            errorList.add("해당 이메일은 중복됩니다.");
        }
        if(accountRepository.existsByNickname(signupDto.getNickname())){
            errorList.add("해당 닉네임은 중복됩니다.");
        }
        return errorList;
    }

    @Transactional
    public ResponseEntity<?> signUp(SignupDto dto, Errors errors){

        List<String> errorList = validCheck(dto,errors);

        if(!errorList.isEmpty()) return new ResponseEntity<>(errorList,HttpStatus.CONFLICT);

        // TODO AccountRepository로 회원 생성 구현
        return new ResponseEntity<>("Account_Info",HttpStatus.CREATED);


    }

}
