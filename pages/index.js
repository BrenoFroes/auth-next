import * as React from "react";
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { useRouter} from 'next/router'
import { createStitches } from '@stitches/react'

export const { styled, css } = createStitches({
  media: {
    sm: '(max-width: 576px)',
    md: '(max-width: 768px)',
    lg: '(max-width: 992px)',
    xl: '(max-width: 1200px)',
    xxl: '(max-width: 1400px)',
  },
});

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
  padding: '32px',
  '@xl': {
    padding: '0',
  },
  '@lg': {
    flexDirection: 'column',
    padding: '24px'
  },
  '@md': {
    padding: '16px'
  }
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
  maxHeight: 'auto',
  padding: '77px',
  textAlign: 'center',
  '@xl': {
    padding: '32px'
  },
  '@lg': {
    order: 2,
    padding: '48px'
  },
  '@md': {
    padding: '32px'
  },

  'h1': {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '25px',
    lineHeight: '130%',
    color: '#FFFFFF',
    marginBottom: '8px'
  },

  'p.subtitle': {
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
  'input, textarea, select, input:visited, input:target, input:focus, input:not(:focus), input:valid': {
    background: '#202020 !important',
    border: '1px solid #414141',
    borderRadius: '8px',
    height: '56px',
    padding: '24px 16px 12px 16px',
    margin: '8px 0',
    width: '100%',
    color: 'white',
    fontSize: '14px', 
  },
  'select': {
    padding: '24px 24px 12px 12px'
  },
  'textarea':{
    height: '92px'
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
    transition: 'all 0.1s ease',
    display: 'flex'
  },
  '.floating-label > span': {
    color: '#FA4D56',
    display: 'none'
  },
  '.floating-label > p': {
    display: 'none'
  },
  'input:focus ~ .floating-label, input:not(:focus):valid ~ .floating-label, textarea:focus ~ .floating-label, textarea:not(:focus):valid ~ .floating-label, select:focus ~ .floating-label, select:not(:focus):valid ~ .floating-label': {
    top: '15px',
    bottom: '0px',
    left: '16px',
    fontSize: '12px',
    fontWeight: '500',
    opacity: '1',
    color: '#A0A0A0'
  },
  'input:focus ~ .floating-label > span, input:not(:focus):valid ~ .floating-label > span, textarea:focus ~ .floating-label > span, textarea:not(:focus):valid ~ .floating-label > span, select:focus ~ .floating-label > span, select:not(:focus):valid ~ .floating-label > span': {
    display: 'flex',
    marginLeft: '8px'
  },
  'input:focus ~ .floating-label > p, input:not(:focus):valid ~ .floating-label > p': {
    display: 'flex',
    marginLeft: '8px'
  },
  '.input-red, .input-red:focus, .input-red:active, .input-red:target': {
    border: '1px solid #FA4D56'
  },
  'input[type=date] ~ .floating-label, input[type=date] ~ .floating-label': {
    top: '15px',
    bottom: '0px',
    left: '16px',
    fontSize: '12px',
    fontWeight: '500',
    opacity: '1',
    color: '#A0A0A0'
  },
  'input[type=date]::-webkit-calendar-picker-indicator ':{
    borderRadius: '4px',
    marginRight: '-12px',
    color: '#fff',
    backgroundColor: '#fff',
    fill: '#fff',
  },
  'p.error': {
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '130%',
    display: 'flex',
    alignItems: 'center',
    color: '#FA4D56'
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
  ".contentNotifications": {
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
  ".contentNotifications input": {
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
  ".contentNotifications:hover input ~ .checkmark": { backgroundColor: "#006f51" },
  ".contentNotifications input:checked ~ .checkmark": { backgroundColor: "#00F2B1" },
  ".checkmark:after": { content: '""', position: "absolute", display: "none" },
  ".contentNotifications input:checked ~ .checkmark:after": { display: "block" },
  ".contentNotifications .checkmark:after": {
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
  padding: '16px',

  '@lg': {
    order: 1,
    padding: '32px 16px',
    maxWidth: '100%'
  },

  'h2': {
    fontWeight: '700',
    fontSize: '45px',
    lineHeight: '130%',
    display: 'flex',
    alignItems: 'center',
    color: '#FFFFFF',

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
  const { register, formState: { errors }, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      dateOfBirthday: '',
      country: 'Brazil',
      bio: '',
      receiveNotifications: ''
    }
  })
  
  const router = useRouter()

  // const onChangeInput = e => setDataForm({...dataForm, [e.target.name]: e.target.value})

  const sendUser = async function (payload) {
    try {
      const res = await fetch('https://629f52338b939d3dc29519e3.mockapi.io/api/challenge/user', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json'}
      })

      const responseEnv = await res.json()

      console.log(responseEnv.error ? "Erro. Tente novamente mais tarde!" : responseEnv)
      window.localStorage.setItem('id_trace', `${responseEnv.id}`);
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
            <p className="subtitle">Para começar, insira os dados abaixo:</p>  
            <form onSubmit={handleSubmit(data => { sendUser(data)})}>
              <Input>
                <div className="floating-label-group">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    className={ errors.firstName ? 'form-control input-red' : 'form-control' }
                    required
                    {...register("firstName", { required: true })}
                    aria-label="Primeiro nome"/>
                  <label className="floating-label">Nome <span>*</span></label>
                </div>
              </Input>
              <Input>
                <div className="floating-label-group">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    className={ errors.lastName ? 'form-control input-red' : 'form-control' }
                    required
                    {...register("lastName", { required: true })}
                    aria-label="Sobrenome"/>
                  <label className="floating-label">Sobrenome <span>*</span></label>
                </div>
              </Input>
              <Input>
                <div className="floating-label-group">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    className={ errors.email ? 'form-control input-red' : 'form-control' }
                    required
                    {...register('email', {
                      required: "Este campo é obrigatório.",
                      pattern: {
                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                        message: "Por favor, insira um e-mail válido."
                      } 
                    })}
                    aria-label="Email"/>
                  <ErrorMessage
                    errors={errors}
                    name="email"
                    render={({ message }) => <p className="error">{message}</p>}
                  />
                  <label className="floating-label">E-mail <span>*</span></label>
                </div>
              </Input>
              <Input>
                <div className="floating-label-group">
                  <input
                    id="dateOfBirthday"
                    name="dateOfBirthday"  
                    className={ errors.dateOfBirthday ? 'form-control input-red' : 'form-control' }
                    type="date"
                    required
                    {...register('dateOfBirthday', {
                      required: "Este campo é obrigatório.",
                      valueAsDate: true
                    })}
                    aria-label="dateOfBirthday"/>
                  <ErrorMessage
                    errors={errors}
                    name="dateOfBirthday"
                    render={({ message }) => <p className="error">{message}</p>}
                  />
                  <label className="floating-label">Data de nascimento<span>*</span></label>
                </div>
              </Input>
              <Input>
                <div className="floating-label-group">
                  <input
                      id="password"
                      name="password" 
                      className={ errors.password ? 'form-control input-red' : 'form-control' }
                      type="password"
                      required
                      {...register("password", { required: true })}
                      aria-label="Senha"/>
                    <label className="floating-label">Senha <span>*</span></label>
                </div>
              </Input>
              <Input>
                <div className="floating-label-group">
                  <select id="country"
                    name="country" 
                    className={ errors.country ? 'form-control input-red' : 'form-control' }
                    type="country"
                    {...register("country", { required: true })}
                    aria-label="País">
                      <option value="Afghanistan">Afghanistan</option>
                      <option value="Åland Islands">Åland Islands</option>
                      <option value="Albania">Albania</option>
                      <option value="Algeria">Algeria</option>
                      <option value="American Samoa">American Samoa</option>
                      <option value="Andorra">Andorra</option>
                      <option value="Angola">Angola</option>
                      <option value="Anguilla">Anguilla</option>
                      <option value="Antarctica">Antarctica</option>
                      <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                      <option value="Argentina">Argentina</option>
                      <option value="Armenia">Armenia</option>
                      <option value="Aruba">Aruba</option>
                      <option value="Australia">Australia</option>
                      <option value="Austria">Austria</option>
                      <option value="Azerbaijan">Azerbaijan</option>
                      <option value="Bahamas">Bahamas</option>
                      <option value="Bahrain">Bahrain</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Barbados">Barbados</option>
                      <option value="Belarus">Belarus</option>
                      <option value="Belgium">Belgium</option>
                      <option value="Belize">Belize</option>
                      <option value="Benin">Benin</option>
                      <option value="Bermuda">Bermuda</option>
                      <option value="Bhutan">Bhutan</option>
                      <option value="Bolivia">Bolivia</option>
                      <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                      <option value="Botswana">Botswana</option>
                      <option value="Bouvet Island">Bouvet Island</option>
                      <option value="Brazil">Brazil</option>
                      <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                      <option value="Brunei Darussalam">Brunei Darussalam</option>
                      <option value="Bulgaria">Bulgaria</option>
                      <option value="Burkina Faso">Burkina Faso</option>
                      <option value="Burundi">Burundi</option>
                      <option value="Cambodia">Cambodia</option>
                      <option value="Cameroon">Cameroon</option>
                      <option value="Canada">Canada</option>
                      <option value="Cape Verde">Cape Verde</option>
                      <option value="Cayman Islands">Cayman Islands</option>
                      <option value="Central African Republic">Central African Republic</option>
                      <option value="Chad">Chad</option>
                      <option value="Chile">Chile</option>
                      <option value="China">China</option>
                      <option value="Christmas Island">Christmas Island</option>
                      <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Comoros">Comoros</option>
                      <option value="Congo">Congo</option>
                      <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                      <option value="Cook Islands">Cook Islands</option>
                      <option value="Costa Rica">Costa Rica</option>
                      <option value="Cote D'ivoire">Cote D'ivoire</option>
                      <option value="Croatia">Croatia</option>
                      <option value="Cuba">Cuba</option>
                      <option value="Cyprus">Cyprus</option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Denmark">Denmark</option>
                      <option value="Djibouti">Djibouti</option>
                      <option value="Dominica">Dominica</option>
                      <option value="Dominican Republic">Dominican Republic</option>
                      <option value="Ecuador">Ecuador</option>
                      <option value="Egypt">Egypt</option>
                      <option value="El Salvador">El Salvador</option>
                      <option value="Equatorial Guinea">Equatorial Guinea</option>
                      <option value="Eritrea">Eritrea</option>
                      <option value="Estonia">Estonia</option>
                      <option value="Ethiopia">Ethiopia</option>
                      <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                      <option value="Faroe Islands">Faroe Islands</option>
                      <option value="Fiji">Fiji</option>
                      <option value="Finland">Finland</option>
                      <option value="France">France</option>
                      <option value="French Guiana">French Guiana</option>
                      <option value="French Polynesia">French Polynesia</option>
                      <option value="French Southern Territories">French Southern Territories</option>
                      <option value="Gabon">Gabon</option>
                      <option value="Gambia">Gambia</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Germany">Germany</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Gibraltar">Gibraltar</option>
                      <option value="Greece">Greece</option>
                      <option value="Greenland">Greenland</option>
                      <option value="Grenada">Grenada</option>
                      <option value="Guadeloupe">Guadeloupe</option>
                      <option value="Guam">Guam</option>
                      <option value="Guatemala">Guatemala</option>
                      <option value="Guernsey">Guernsey</option>
                      <option value="Guinea">Guinea</option>
                      <option value="Guinea-bissau">Guinea-bissau</option>
                      <option value="Guyana">Guyana</option>
                      <option value="Haiti">Haiti</option>
                      <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                      <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                      <option value="Honduras">Honduras</option>
                      <option value="Hong Kong">Hong Kong</option>
                      <option value="Hungary">Hungary</option>
                      <option value="Iceland">Iceland</option>
                      <option value="India">India</option>
                      <option value="Indonesia">Indonesia</option>
                      <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                      <option value="Iraq">Iraq</option>
                      <option value="Ireland">Ireland</option>
                      <option value="Isle of Man">Isle of Man</option>
                      <option value="Israel">Israel</option>
                      <option value="Italy">Italy</option>
                      <option value="Jamaica">Jamaica</option>
                      <option value="Japan">Japan</option>
                      <option value="Jersey">Jersey</option>
                      <option value="Jordan">Jordan</option>
                      <option value="Kazakhstan">Kazakhstan</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Kiribati">Kiribati</option>
                      <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                      <option value="Korea, Republic of">Korea, Republic of</option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Kyrgyzstan">Kyrgyzstan</option>
                      <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                      <option value="Latvia">Latvia</option>
                      <option value="Lebanon">Lebanon</option>
                      <option value="Lesotho">Lesotho</option>
                      <option value="Liberia">Liberia</option>
                      <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                      <option value="Liechtenstein">Liechtenstein</option>
                      <option value="Lithuania">Lithuania</option>
                      <option value="Luxembourg">Luxembourg</option>
                      <option value="Macao">Macao</option>
                      <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                      <option value="Madagascar">Madagascar</option>
                      <option value="Malawi">Malawi</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Maldives">Maldives</option>
                      <option value="Mali">Mali</option>
                      <option value="Malta">Malta</option>
                      <option value="Marshall Islands">Marshall Islands</option>
                      <option value="Martinique">Martinique</option>
                      <option value="Mauritania">Mauritania</option>
                      <option value="Mauritius">Mauritius</option>
                      <option value="Mayotte">Mayotte</option>
                      <option value="Mexico">Mexico</option>
                      <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                      <option value="Moldova, Republic of">Moldova, Republic of</option>
                      <option value="Monaco">Monaco</option>
                      <option value="Mongolia">Mongolia</option>
                      <option value="Montenegro">Montenegro</option>
                      <option value="Montserrat">Montserrat</option>
                      <option value="Morocco">Morocco</option>
                      <option value="Mozambique">Mozambique</option>
                      <option value="Myanmar">Myanmar</option>
                      <option value="Namibia">Namibia</option>
                      <option value="Nauru">Nauru</option>
                      <option value="Nepal">Nepal</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="Netherlands Antilles">Netherlands Antilles</option>
                      <option value="New Caledonia">New Caledonia</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="Nicaragua">Nicaragua</option>
                      <option value="Niger">Niger</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Niue">Niue</option>
                      <option value="Norfolk Island">Norfolk Island</option>
                      <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                      <option value="Norway">Norway</option>
                      <option value="Oman">Oman</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Palau">Palau</option>
                      <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                      <option value="Panama">Panama</option>
                      <option value="Papua New Guinea">Papua New Guinea</option>
                      <option value="Paraguay">Paraguay</option>
                      <option value="Peru">Peru</option>
                      <option value="Philippines">Philippines</option>
                      <option value="Pitcairn">Pitcairn</option>
                      <option value="Poland">Poland</option>
                      <option value="Portugal">Portugal</option>
                      <option value="Puerto Rico">Puerto Rico</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Reunion">Reunion</option>
                      <option value="Romania">Romania</option>
                      <option value="Russian Federation">Russian Federation</option>
                      <option value="Rwanda">Rwanda</option>
                      <option value="Saint Helena">Saint Helena</option>
                      <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                      <option value="Saint Lucia">Saint Lucia</option>
                      <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                      <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                      <option value="Samoa">Samoa</option>
                      <option value="San Marino">San Marino</option>
                      <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Senegal">Senegal</option>
                      <option value="Serbia">Serbia</option>
                      <option value="Seychelles">Seychelles</option>
                      <option value="Sierra Leone">Sierra Leone</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Slovakia">Slovakia</option>
                      <option value="Slovenia">Slovenia</option>
                      <option value="Solomon Islands">Solomon Islands</option>
                      <option value="Somalia">Somalia</option>
                      <option value="South Africa">South Africa</option>
                      <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                      <option value="Spain">Spain</option>
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="Sudan">Sudan</option>
                      <option value="Suriname">Suriname</option>
                      <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                      <option value="Swaziland">Swaziland</option>
                      <option value="Sweden">Sweden</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                      <option value="Taiwan">Taiwan</option>
                      <option value="Tajikistan">Tajikistan</option>
                      <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                      <option value="Thailand">Thailand</option>
                      <option value="Timor-leste">Timor-leste</option>
                      <option value="Togo">Togo</option>
                      <option value="Tokelau">Tokelau</option>
                      <option value="Tonga">Tonga</option>
                      <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                      <option value="Tunisia">Tunisia</option>
                      <option value="Turkey">Turkey</option>
                      <option value="Turkmenistan">Turkmenistan</option>
                      <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                      <option value="Tuvalu">Tuvalu</option>
                      <option value="Uganda">Uganda</option>
                      <option value="Ukraine">Ukraine</option>
                      <option value="United Arab Emirates">United Arab Emirates</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                      <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                      <option value="Uruguay">Uruguay</option>
                      <option value="Uzbekistan">Uzbekistan</option>
                      <option value="Vanuatu">Vanuatu</option>
                      <option value="Venezuela">Venezuela</option>
                      <option value="Viet Nam">Viet Nam</option>
                      <option value="Virgin Islands, British">Virgin Islands, British</option>
                      <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                      <option value="Wallis and Futuna">Wallis and Futuna</option>
                      <option value="Western Sahara">Western Sahara</option>
                      <option value="Yemen">Yemen</option>
                      <option value="Zambia">Zambia</option>
                      <option value="Zimbabwe">Zimbabwe</option>
                  </select>
                  <ErrorMessage
                    errors={errors}
                    name="country"
                    render={({ message }) => <p className="error">{message}</p>}/>
                  <label className="floating-label">País <span>*</span></label>
                </div>
              </Input>
              <Input>
                <div className="floating-label-group">
                  <textarea id="bio" name="bio" className="form-control" maxLength="90" type="text" 
                  {...register("bio", { required: false })}/>
                  <label className="floating-label">Bio</label>
                </div>
              </Input>
              <Button type="submit">Enviar</Button>
              <InputCheck>
                <label className="contentNotifications">Deseja receber notificações?
                  <input type="checkbox" id="notifications" name="receiveNotifications"
                    {...register("receiveNotifications", { required: false })}></input>
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
