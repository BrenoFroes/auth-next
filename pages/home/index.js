import * as React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { useRouter} from 'next/router'
import { createStitches } from '@stitches/react'
import Content from './content'

export const { styled, css } = createStitches({
  media: {
    sm: '(max-width: 576px)',
    md: '(max-width: 768px)',
    lg: '(max-width: 992px)',
    xl: '(max-width: 1200px)',
    xxl: '(max-width: 1400px)',
  },
})


const BackgroundContent = styled('div', {
  backgroundImage: 'url(/images/globo.png)',
  backgroundSize: 'contain',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  minHeight: '100vh',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  '@md': {
    padding: '32px'
  },
})

const CustomContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: '32px',
  background: 'rgba(29, 29, 29, 0.5)',
  mixBlendMode: 'normal',
  opacity: 0.7,
  border: '2px solid #2A2A2A',
  backdropFilter: 'blur(200px)',
  borderRadius: '8px',
  maxWidth: '820px',
  width: '100%',
  minHeight: '428px',
  height: 'auto',
  margin: 'auto',
  '@xl': {
  },
  '@lg': {
    padding: '24px'
  },
  '@md': {
    padding: '16px'
  },
  'h2': {
    fontWeight: 700,
    textAlign: 'center',
    fontSize: '45px',
    lineHeight: '130%',
    display: 'flex',
    alignItems: 'center',
    color: '#FFFFFF',
    margin: '40px auto 16px',
    '@lg': {
      fontSize: '32px',
    },
  },
  'hr': {
    width: '43px',
    height: '11px',
    background: '#00F2B1',
    border: 'none',
    borderRadius: '20px',
    margin: '16px auto 16px auto',
    transition: 'all 1s'
  },
  'hr:hover': {
    width: '373px'
  },
  'p': {
    fontWeight: 300,
    fontSize: '18px',
    lineHeight: '130%',
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: '16px'
  }
})

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

function Home () {
  return (
    <BackgroundContent>
      <div className='container m-auto'>
        <CustomContent>
          <Content></Content>
        </CustomContent>
      </div>
    </BackgroundContent>
  )
}

export default Home