import Head from 'next/head'
import { styled } from '@stitches/react'

const Content = styled('main', {
    '&.content': {
        backgroundColor: '#121212',
        width: '100%',
        minHeight: '100vh'
    }
})

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/images/logo.ico"></link>
                <title>Trace Finance - Cadastrar Usuário</title>
            </Head>
            <Content className='content'>{children}</Content>
        </>
    )
}