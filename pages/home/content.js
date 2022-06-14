import * as React from 'react'
import { useState, useEffect } from 'react'
import { createStitches, styled } from '@stitches/react'

const Initials = styled('span', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '78px',
    width: '78px',
    background: '#47E0FF',
    borderRadius: '50%',
    margin: '0 auto',
    
    'h1': {
      color: '#000000',
      fontWeight: 500,
      fontSize: '25px',
      lineHeight: '130%',
      textTransform: 'uppercase'
    }
})

export default function Content() {
    const [data, setData] = useState(null)
    const [date, setDate] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        const id = window.localStorage.getItem('id_trace')
        setLoading(true)
        fetch(`https://629f52338b939d3dc29519e3.mockapi.io/api/challenge/user/${id}`)
            .then((res) => res.json())
            .then((data) => {
                const month = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]
                let date = new Date(data.dateOfBirthday)
                let name = month[date.getMonth()];
                let formatDate = `${date.getDate() + 1} de ${name} de ${date.getFullYear()}` 
                setDate(formatDate)
                setData(data)
                setLoading(false)
            })
    }, [])
    

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>
  
    return (
      <div>
        <div>
            <Initials><h1>{data.firstName.charAt(0)}{data.lastName.charAt(0)}</h1></Initials>
            <h2>Bem vindo {data.firstName} {data.lastName}</h2>
            <hr></hr>
            <p>Você nasceu no dia {date}.</p>
        </div>
      </div>
    )
}