import React from 'react'
import { createStitches, styled } from '@stitches/react'

const Initials = styled('span', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '78px',
    width: '78px',
    background: '#47E0FF',
    borderRadius: '50%',
    
    'h1': {
      color: '#000000',
      fontWeight: 500,
      fontSize: '25px',
      lineHeight: '130%',
    }
})


export const getStaticPros = async () => {
    const id = window.localStorage.getItem('id_trace')
    const res = await fetch(`https://629f52338b939d3dc29519e3.mockapi.io/api/user/${id}`)
    const data = await res.json()

    return {
        props: { user: data }
    }
}

const ContentHome = ({ user }) => {
    return (
        <div>
            <Initials><h1>{user}</h1></Initials>
            <h2>Bem vindo Ellon Musk</h2>
            <hr></hr>
            <p>Você nasceu no dia 4 de agosto de 1984.</p>
        </div>
    )
}

export default ContentHome