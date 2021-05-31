import React, { useRef } from 'react'
import { Form } from '@unform/web'
import styles from '../styles/pages/Login.module.css';
import Input from '../components/Form/Input';
import Cookies from 'js-cookie';

export default function Login() {
    const formRef = useRef();

    function handleFormSubmit(data) {
        Cookies.set('username', data.username);
    }

    return (
        <div className={styles.container}>
            <section>
                <div className={styles.containerBanner}>
                    <img src="/icons/banner.svg" alt="Banner Moveit" />
                </div>
            </section>
            <section>
                <div className={styles.containerLogin}>
                    <img src="/icons/logo.svg" alt="Logo Moveit" />
                    <strong>Bem-vindo</strong>
                    <img src="/icons/github.svg" alt="Logue com Github" />
                    <Form ref={formRef} onSubmit={handleFormSubmit}>
                        <Input name="username" placeholder="Digite seu username"></Input>
                        <button type="submit">
                            <img src="/icons/arrow.svg" />
                        </button>
                    </Form>
                </div>
            </section>
        </div>
    )
}