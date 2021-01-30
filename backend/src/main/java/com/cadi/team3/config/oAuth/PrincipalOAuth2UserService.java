package com.cadi.team3.config.oAuth;

import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;

//@RequiredArgsConstructor
//@Service
public class PrincipalOAuth2UserService extends DefaultOAuth2UserService {
//
//    private final UserRepository userRepository;
//
//    @Override
//    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
//        String providerId = userRequest.getClientRegistration().getRegistrationId();
//        OAuth2User oAuth2User = super.loadUser(userRequest);
//
//        OAuth2UserInfo oAuth2UserInfo = null;
//
//        if(providerId.equals("google")){
//            oAuth2UserInfo = new GoogleUserInfo(oAuth2User.getAttributes());
//        }
//        else if(providerId.equals("facebook")){
//            oAuth2UserInfo = new FacebookUserInfo(oAuth2User.getAttributes());
//        }else if(providerId.equals("naver")){
//            oAuth2UserInfo = new NaverUserInfo((Map) oAuth2User.getAttributes().get("response"));
//        }
//
//        String provider = oAuth2UserInfo.getProvider();
//        String username = providerId+"_"+provider;
//        String nickname = oAuth2UserInfo.getName();
//        String email = oAuth2UserInfo.getEmail();
//        Role role = Role.ROLE_USER;
//
//
//        Optional<Account> userOptional = userRepository.findByUsername(username);
//
//        if(!userOptional.isPresent()) {
//            Account accountEntity = new Account().builder()
//                    .username(username)
//                    .providerId(providerId)
//                    .nickname(nickname)
//                    .role(role)
//                    .email(email)
//                    .build();
//            userRepository.save(accountEntity);
//        }
//        return super.loadUser(userRequest);
//    }
}
