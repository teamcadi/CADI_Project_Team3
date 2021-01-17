package com.cadi.team3.domain;

import com.cadi.team3.account.Role;
import com.cadi.team3.config.BaseTimeEntity;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false ,of = "id")

@Entity
@Builder
public class Account extends BaseTimeEntity {

     @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(unique = true)
     private String nickname;

    @Column(unique = true)
     private String email;

    @Column(nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
     private Role role;

//    private String providerId;

    private boolean emailVerified;

    private String emailCheckToken;

    private LocalDateTime registerTime;

    public void setRegisterTime(LocalDateTime registerTime) {
        this.registerTime = registerTime;
    }

    @CreatedDate
    private LocalDateTime createdTime;

    public void generateEmailCheckToken(){
        this.emailCheckToken = UUID.randomUUID().toString();
    }

}
