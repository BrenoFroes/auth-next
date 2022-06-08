import { styled } from '@stitches/react'

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
  justifyContent: 'space-between',
  minHeight: '100vh',
  width: '100%'
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
  minHeight: '870px',
  height: '100%',
  maxHeight: '100vh',
  padding: '54px 177px',
  textAlign: 'center',

  '> h1': {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '25px',
    lineHeight: '130%',
    color: '#FFFFFF'
  },

  '> p': {
    fontWeight: '300',
    fontSize: '14px',
    lineHeight: '130%',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#E7E7E7'
  },

  'input': {
    background: '#202020',
    border: '1px solid #414141',
    borderRadius: '8px'
  }
})

const RightContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',

})


export default function Login() {
  return (
    <BackgroundContent>
      <div class='container m-auto'>
        <CustomContent>
          <LeftContent>
            <h1>Cadastre-se</h1>
            <p>Para começar, insira os dados abaixo:</p>
            <form>
              <input type="text"></input>
            </form>
          </LeftContent>
          <RightContent>
            <h2>TraceFinance</h2>
          </RightContent>
        </CustomContent>
      </div>
    </BackgroundContent>
  )
}
