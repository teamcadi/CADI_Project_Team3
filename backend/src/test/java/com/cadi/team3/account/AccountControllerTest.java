package com.cadi.team3.account;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import javax.transaction.Transactional;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class AccountControllerTest {

    @Autowired private MockMvc mockMvc;

    @Autowired private ObjectMapper objectMapper;

    @DisplayName("가입 Valid 확인 #1 - form 값이 잘 못 된 경우")
    @Test
    public void sign_up_form_test1() throws Exception{
        // given
        SignupDto signupDto = SignupDto.builder()
                .nickname("vividswan2131232131232131242145**")
                .password("1234")
                .email("vividswan")
                .build();

        // when
        final ResultActions perform = mockMvc.perform(post("/sign-up")
                .content(objectMapper.writeValueAsString(signupDto))
                .contentType(MediaType.APPLICATION_JSON));

        //then
        perform.andExpect(status().is4xxClientError());
    }

    @Transactional
    @DisplayName("가입 Valid 확인 #2 - 올바른 form 값인 경우")
    @Test
    public void sign_up_form_test2() throws Exception{
        //given
        SignupDto signupDto = SignupDto.builder()
                .nickname("vividswan")
                .password("1234567890")
                .email("vividswan@naver.com")
                .build();

        //when
        final ResultActions perform = mockMvc.perform(post("/sign-up")
                .content(objectMapper.writeValueAsString(signupDto))
                .contentType(MediaType.APPLICATION_JSON));

        //then
        perform.andExpect(status().is2xxSuccessful());
    }
}