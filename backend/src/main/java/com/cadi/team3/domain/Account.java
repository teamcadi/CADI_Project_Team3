package com.cadi.team3.domain;

import com.cadi.team3.config.BaseTimeEntity;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
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

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
     private Role role;

    @Column(nullable = false)
    private String providerId;

    private boolean emailVerified;

    private String emailCheckToken;

    private LocalDateTime createTime;



}
