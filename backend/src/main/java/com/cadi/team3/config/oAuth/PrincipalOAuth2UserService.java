package com.cadi.team3.config.oAuth;

import com.cadi.team3.config.oAuth.provider.GoogleUserInfo;
import com.cadi.team3.config.oAuth.provider.OAuth2UserInfo;
import com.cadi.team3.model.Role;
import com.cadi.team3.model.User;
import com.cadi.team3.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class PrincipalOAuth2UserService extends DefaultOAuth2UserService {

    private final UserRepository userRepository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        String providerId = userRequest.getClientRegistration().getRegistrationId();
        OAuth2User oAuth2User = super.loadUser(userRequest);

        OAuth2UserInfo oAuth2UserInfo = null;

        if(providerId.equals("google")){
            oAuth2UserInfo = new GoogleUserInfo(oAuth2User.getAttributes());
        }

        String provider = oAuth2UserInfo.getProvider();
        String username = providerId+"_"+provider;
        String nickname = oAuth2UserInfo.getName();
        String email = oAuth2UserInfo.getEmail();
        Role role = Role.ROLE_USER;

        User userEntity = userRepository.findByUsername(username);
        if(userEntity == null){
            userEntity = new User().builder()
                    .username(username)
                    .providerId(providerId)
                    .nickname(nickname)
                    .role(role)
                    .email(email)
                    .build();
            userRepository.save(userEntity);
        }

        return super.loadUser(userRequest);
    }
}
