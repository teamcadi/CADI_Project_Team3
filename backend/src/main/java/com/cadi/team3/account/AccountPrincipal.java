package com.cadi.team3.account;

import com.cadi.team3.domain.Account;
import com.sun.tools.javac.util.List;
import lombok.Getter;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;

@Getter
public class AccountPrincipal extends User {

    private Account account;

    public AccountPrincipal(Account account){
        super(account.getEmail(), account.getPassword(), List.of(new SimpleGrantedAuthority(account.getRole().toString())));
    }
}
