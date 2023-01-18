package com.br.facilitafin.exception;

public class NoExistentEntityException extends RuntimeException{
    private static final long serialVersionUID = 1L;
    public NoExistentEntityException(){}
    public NoExistentEntityException(String message) {
        super(message);
    }
}
