package com.br.facilitafin.config;

public class SecurityConstants {
    public static final String SECRET = "09e954b62d254ea4fac3e87616cce9845f8134013018c0f2da9bf9c9d075c2a0";
    public static final long EXPIRATION_TIME = 900_000; // 15 mins
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String HEADER_STRING = "Authorization";
    public static final String SIGN_UP_URL = "/api/services/controller/user";
}
