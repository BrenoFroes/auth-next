import { styled } from '@stitches/react'
import { useState } from 'react'
import { useRouter} from 'next/router'

const BackgroundContent = styled('div', {
  backgroundImage: 'url(/images/globo.png)',
  backgroundSize: 'contain',
  backgroundPosition: '60vw 0',
  backgroundRepeat: 'no-repeat',
  minHeight: '100vh',
  width: '100%'
});

const CustomContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  minHeight: '100vh',
  width: '100%',
  padding: '32px'
});

const LeftContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'start',
  background: 'rgba(29, 29, 29, 0.5)',
  mixBlenMode: 'normal',
  border: '2px solid #2A2A2A',
  backdropFilter: 'blur(200px)',
  borderRadius: '8px',
  width: '100%',
  maxWidth: '706px',
  minHeight: '807px',
  height: '100%',
  maxHeight: '100vh',
  padding: '77px',
  textAlign: 'center',

  'h1': {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '25px',
    lineHeight: '130%',
    color: '#FFFFFF',
    marginBottom: '8px'
  },

  'p': {
    fontWeight: '300',
    fontSize: '14px',
    lineHeight: '130%',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#E7E7E7',
    marginBottom: '24px'
  },
  'form' : {
    width: '100%'
  },
  
})

const Input = styled('div', {
  'input': {
    background: '#202020',
    border: '1px solid #414141',
    borderRadius: '8px',
    height: '56px',
    padding: '24px 16px 12px 16px',
    margin: '8px 0',
    width: '100%',
    color: 'white',
    fontSize: '14px', 
  },
  'textarea': {
    background: '#202020',
    border: '1px solid #414141',
    borderRadius: '8px',
    height: '92px',
    maxHeight: '92px',
    padding: '24px 16px 12px 16px',
    margin: '8px 0',
    width: '100%',
    color: 'white',
    fontSize: '14px', 
  },
  '.floating-label-group': {
    position: 'relative',
    marginTop: '0',
    marginBottom: '0',
  },
  '.floating-label': {
    fontSize: '13px',
    color: '#cccccc',
    position: 'absolute',
    pointerEvents: 'none',
    top: '28px',
    left: '12px',
    transition: 'all 0.1s ease'
  },
  'input:focus ~ .floating-label, input:not(:focus):valid ~ .floating-label, textarea:focus ~ .floating-label, textarea:not(:focus):valid ~ .floating-label': {
    top: '15px',
    bottom: '0px',
    left: '16px',
    fontSize: '12px',
    fontWeight: '500',
    opacity: '1',
    color: '#A0A0A0'
  }
})

const InputCheck = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  'input': {
    width:'20px',
    height: '20px',
    background: 'none',
    border: '1px solid #00F2B1',
    borderRadius: '4px'
  },
  'label': {
    fontWeight: '300',
    fontSize: '14px',
    lineHeight: '130%',
    display: 'flex',
    alignTtems: 'center',
    textAlign: 'center',
    color: '#E7E7E7',
    marginLeft: '11px'
  },
  "#notifications": {
    display: "block",
    position: "relative",
    paddingLeft: "35px",
    marginBottom: "12px",
    cursor: "pointer",
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    msUserSelect: "none",
    userSelect: "none"
  },
  "#notifications input": {
    position: "absolute",
    opacity: 0,
    cursor: "pointer",
    height: "0",
    width: "0"
  },
  ".checkmark": {
    position: "absolute",
    top: "0",
    left: "0",
    height: "20px",
    width: "20px",
    backgroundColor: "transparent",
    border: '1px solid #00F2B1',
    borderRadius: '4px',
  },
  "#notifications:hover input ~ .checkmark": { backgroundColor: "#006f51" },
  "#notifications input:checked ~ .checkmark": { backgroundColor: "#00F2B1" },
  ".checkmark:after": { content: '""', position: "absolute", display: "none" },
  "#notifications input:checked ~ .checkmark:after": { display: "block" },
  "#notifications .checkmark:after": {
    left: "6px",
    top: "3px",
    width: "5px",
    height: "10px",
    border: "solid #181818",
    borderWidth: "0 3px 3px 0",
    WebkitTransform: "rotate(45deg)",
    msTransform: "rotate(45deg)",
    transform: "rotate(45deg)"
  }
  
  
})

const Button = styled('button', {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '16px 24px',
  gap: '10px',
  height: '56px',
  background: '#2A2A2A',
  borderRadius: '8px',
  color: 'white',
  margin: '8px auto 25px auto',
  transition: 'all 1s',
  fontSize: '14px',
  fontWeight: '500',
  '&:hover': {
    color: '#121212',
    backgroundColor: '#00F2B1'
  }
})

const RightContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
  maxWidth: '353px',
  width: '100%',
  'h2': {
    fontWeight: '700',
    fontSize: '45px',
    lineHeight: '130%',
    display: 'flex',
    alignItems: 'center',
    color: '#FFFFFF'
  },
  'hr': {
    width: '43px',
    height: '11px',
    background: '#00F2B1',
    border: 'none',
    borderRadius: '20px',
    margin: '16px auto 16px 0',
    transition: 'all 1s'
  },
  'hr:hover': {
    width: '100%'
  },
  'p': {
    fontWeight: '300',
    fontSize: '18px',
    lineHeight: '130%',
    display: 'flex',
    alignItems: 'center',
    color: '#FFFFFF'
  }
})


export default function Login() {
  const [dataForm, setDataForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    country: '',
    receiveNotifications: null
  })

  const router = useRouter()

  const onChangeInput = e => setDataForm({...dataForm, [e.target.name]: e.target.value})

  const sendUser = async e => {
    e.preventDefault()
    try {
      const res = await fetch('https://629f52338b939d3dc29519e3.mockapi.io/api/challenge/user', {
        method: 'POST',
        body: JSON.stringify(dataForm),
        headers: { 'Content-Type': 'application/json'}
      })

      const responseEnv = await res.json()

      console.log(responseEnv.error ? "Erro. Tente novamente mais tarde!" : responseEnv)
      if (responseEnv.error) {
        console.log("Erro. Tente novamente mais tarde!")
      } else {
        router.push("/home")
      }
    } catch(err) {
      console.log(err ? err : "Erro. Tente novamente mais tarde!")
    }
  }

  return (
    <BackgroundContent>
      <div className='container m-auto'>
        <CustomContent>
          <LeftContent>
            <h1>Cadastre-se</h1>
            <p>Para começar, insira os dados abaixo:</p>  
            <form method="POST" onSubmit={sendUser}>
              <Input>
                <div className="floating-label-group">
                  <input type="text" id="name" name="firstName" className="form-control" required onChange={onChangeInput} value={dataForm.firstName}/>
                  <label className="floating-label">Nome</label>
                </div>
              </Input>
              <Input>
                <div className="floating-label-group">
                  <input type="text" id="lastName" name="lastName" className="form-control" required  onChange={onChangeInput} value={dataForm.lastName}/>
                  <label className="floating-label">Sobrenome</label>
                </div>
              </Input>
              <Input>
                <div className="floating-label-group">
                  <input type="text" id="email" name="email" className="form-control" required  onChange={onChangeInput} value={dataForm.email}/>
                  <label className="floating-label">E-mail</label>
                </div>
              </Input>
              <Input>
                <div className="floating-label-group">
                  <input type="text" id="dateOfBirthday" name="dateOfBirthday" className="form-control" required  onChange={onChangeInput} value={dataForm.dateOfBirthday}/>
                  <label className="floating-label">Data de nascimento</label>
                </div>
              </Input>
              <Input>
                <div className="floating-label-group">
                  <input type="password" id="password" name="password" className="form-control" required  onChange={onChangeInput} value={dataForm.password}/>
                  <label className="floating-label">Senha</label>
                </div>
              </Input>
              <Input>
                <div className="floating-label-group">
                  <textarea id="bio" name="bio" className="form-control" maxLength="90" required  onChange={onChangeInput} value={dataForm.bio}/>
                  <label className="floating-label">Bio</label>
                </div>
              </Input>
              <Button type="submit">Enviar</Button>
              <InputCheck>
                <label id="notifications">Deseja receber notificações?
                  <input type="checkbox"></input>
                  <span className="checkmark"></span>
                </label>
              </InputCheck>
            </form>
          </LeftContent>
          <RightContent>
            <h2>Teste técnico</h2>
            <hr/>
            <p>Controle suas contas nacionais e internacionais em um único lugar!</p>
          </RightContent>
        </CustomContent>
      </div>
    </BackgroundContent>
  )
}
