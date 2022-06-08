import Head from 'next/head'

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/images/logo.ico"></link>
                <title>Trace Finance - Cadastrar Usuário</title>
            </Head>
            <main>{children}</main>
        </>
    )
}