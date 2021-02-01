package com.cadi.team3.account;

import com.cadi.team3.domain.Account;
import lombok.Getter;
import org.springframework.security.core.userdetails.User;


@Getter
public class AccountPrincipal extends User {

    private Account account;

    public AccountPrincipal(Account account){
        super(account.getEmail(),
                account.getPassword(),
                account.getRoles());
        this.account = account;
    }



}
