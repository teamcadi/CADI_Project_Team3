package com.cadi.team3.model;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
public class User extends BaseTimeEntity{

     @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

     @Column(nullable = false)
     private String username;

    @Column(nullable = false)
     private String nickname;

    @Column(nullable = false)
     private String email;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
     private Role role;

    @Column(nullable = false)
    private String providerId;

    @Builder
    public User(String username, String nickname,String email, Role role, String providerId){
        this.username = username;
        this.nickname = nickname;
        this.email = email;
        this.role = role;
        this.providerId = providerId;
    }

}
