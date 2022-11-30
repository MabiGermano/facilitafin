package ifpe.edu.br.facilitafin.security.oauth2.user;

import ifpe.edu.br.facilitafin.exceptions.OAuth2AuthenticationProcessingException;
import ifpe.edu.br.facilitafin.models.AuthProvider;

import java.util.Map;

public class OAuth2UserInfoFactory {
    public static OAuth2UserInfo getOAuth2UserInfo(String registrationId, Map<String, Object> attributes) {
        if(registrationId.equalsIgnoreCase(AuthProvider.google.toString())) {
            return new GoogleOAuth2UserInfo(attributes);
        } else {
            throw new OAuth2AuthenticationProcessingException("Sorry! Login with " + registrationId + " is not supported yet.");
        }
    }
}
