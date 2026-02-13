package com.tuievolution.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // Tüm API yolları için izin ver
                .allowedOrigins(
                    "https://tuievolution.vercel.app", 
                    "https://tuievolution-51ep22o8i-tuievolutions-projects.vercel.app"
                ) // Vercel'deki tüm linklerinize izin veriyoruz
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}