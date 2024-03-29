import React from 'react';
import './assets/Form.css';

export default function Form() {

    const onSubmit = e => {
        e.preventDefault();

        // validation codes..
        
        console.log(e.target.email.value + ":" + e.target.password.value);
        

        // ajax login
    }

    return (
        <form
            id="loginForm"
            name="loginForm"
            method="post"
            action="/do/not/post"
            onSubmit={onSubmit}>
            
            <label htmlFor="email">이메일</label>
            <input
                id="email"
                name="email"
                type="text" />

            <label htmlFor="password">패스워드</label>
            <input id="password" name="password" type="password" />

            <input type="submit" value="로그인" />
        </form>
    );
}