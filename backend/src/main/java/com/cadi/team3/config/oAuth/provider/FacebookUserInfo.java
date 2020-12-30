package com.cadi.team3.config.oAuth.provider;

import lombok.RequiredArgsConstructor;

import java.util.Map;

@RequiredArgsConstructor
public class FacebookUserInfo implements OAuth2UserInfo{

    private final Map<String,Object> attribute;

    @Override
    public String getProvider() {
        return (String)attribute.get("id");
    }

    @Override
    public String getProviderId() {
        return "facebook";
    }

    @Override
    public String getName() {
        return (String)attribute.get("name");
    }

    @Override
    public String getEmail() {
        return (String)attribute.get("email");
    }
}
