import React, { useRef, useState } from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import styled from 'styled-components';
import { media } from '../../styles/GlobalStyles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';
import ErrorAlert from '../../components/ErrorAlert';
import SuccessAlert from '../../components/SuccessAlert';

const StyledContacts = styled.div`
  padding: 5rem 0 5rem;
  position: relative;
  display: flex;
  flex-direction: column;

  @media ${media.small} {
    padding: 0 0 3rem;
  }
  @media ${media.xsmall} {
    padding: 0 0 2rem;
  }
`;

const StyledTitle = styled(motion.h2)`
  margin: 0 auto;
  font-size: 9.7vw;
  font-weight: 600;
  background: linear-gradient(85deg, #ba39f7, #4992f8, #64c0d3);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-bottom: 10vh;

  @media ${media.small} {
    font-size: 12.7vw;
    padding-bottom: 5vh;
  }
`;

const StyledForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 0.2rem;
    font-size: 5vw;
    line-height: 7.5vw;
    font-weight: 300;
    text-transform: uppercase;

    @media ${media.small} {
      font-size: 6vw;
      gap: 0.4rem;
      padding: 1rem 0;
    }

    &:nth-of-type(1) {
      padding: 0;
      padding-left: 22%;

      @media ${media.small} {
        padding-left: 0;
      }
    }
  }

  input {
    width: 45%;
    background: transparent;
    user-select: none;
    outline: none;
    border: none;
    border-bottom: 1px grey solid;
    font-size: 2.7vw;
    color: var(--purple);
    padding: 0;

    &:focus {
      border-bottom: 1px var(--purple) solid;
    }

    @media ${media.small} {
      width: 100%;
      font-size: 4vw;
    }
    @media ${media.xsmall} {
      width: 100%;
      font-size: 5vw;
    }
  }

  textarea {
    width: 100%;
    min-height: 20vh;
    background: transparent;
    user-select: none;
    outline: none;
    border: 1px grey solid;
    font-size: 2vw;
    color: var(--purple);
    padding: 1rem;
    resize: vertical;

    &:focus {
      border: 1px var(--purple) solid;
    }

    @media ${media.small} {
      font-size: 4vw;
    }
    @media ${media.small} {
      font-size: 5vw;
    }
  }

  span {
    font-size: 1rem;
    line-height: 1;
    text-transform: lowercase;
    color: red;
  }
`;
const StyledFormContainer = styled(motion.div)`
  background: transparent;
  width: 85%;
`;
const StyledControlContainer = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 3vw;

  @media ${media.xsmall} {
    margin-top: 5vw;
  }
`;
const StyledControl = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledSocials = styled(motion.div)`
  width: 30%;
  display: flex;
  height: 80%;
  justify-content: space-between;

  @media ${media.small} {
    flex-direction: column;
  }

  h3 {
    font-size: 2.6vmax;
    text-transform: uppercase;
    font-weight: 400;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;

const StyledSubmitButton = styled(motion.button)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: var(--blue);
  border: none;
  color: var(--white);
  font-size: 22px;
  font-weight: 600;
  cursor: pointer;

  &:disabled {
    cursor: no-drop;
  }

  @media ${media.small} {
    width: 115px;
    height: 115px;
    font-size: 16px;
  }
`;
const StyledLink = styled(motion.a)`
  font-size: 2.2vmax;
  color: var(--purple);
  font-weight: normal;
  text-transform: uppercase;
  width: fit-content;

  &:focus,
  &:hover {
    text-decoration: line-through;
    font-style: italic;
  }
`;

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^([^0-9]*)$/, 'Name should not contain numbers')
    .max(20, 'Name should be less then 20 letters')
    .required('Name is a required field'),
  email: yup
    .string()
    .email('Email should have correct format')
    .required('Email is a required field'),
  message: yup
    .string()
    .max(500, 'Message should be less then 500 letters')
    .required('Write your message'),
});

const Contacts = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);
  const formRef = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    setIsSending(true);
    emailjs
      .sendForm(
        'service_60big02',
        'template_vylfoyb',
        formRef.current,
        'aKUWrbGSHfpnklwPZ'
      )
      .then(
        () => {
          setIsSending(false);
          setIsSent(true);
          reset();
        },
        error => {
          console.error(error.text);
          setIsSending(false);
          setIsError(true);
        }
      );
  };

  return (
    <StyledContacts>
      <StyledTitle>Let's talk!</StyledTitle>
      <StyledForm ref={formRef} onSubmit={handleSubmit(onSubmit)}>
        <StyledFormContainer>
          <p>Hello,</p>
          <p>
            <label htmlFor='name'>my name is</label>
            <input id='name' autoComplete='off' {...register('name')} />
            {errors.name && <span>{errors.name?.message}</span>}
          </p>
          <p>
            <label htmlFor='email'>here is my email</label>
            <input id='email' autoComplete='off' {...register('email')} />
            {errors.email && <span>{errors.email?.message}</span>}
          </p>
          <p>
            <label htmlFor='message'>let's talk about</label>
            <textarea
              id='message'
              autoComplete='off'
              {...register('message')}
            />
            {errors.message && <span>{errors.message?.message}</span>}
          </p>
        </StyledFormContainer>
        <StyledControlContainer>
          <StyledControl>
            <StyledSubmitButton
              disabled={isSending}
              whileHover={{
                scale: 0.9,
              }}
            >
              {isSending ? 'Sending...' : 'Send'}
            </StyledSubmitButton>
            {isSent && <SuccessAlert setIsSent={setIsSent} />}
            {isError && <ErrorAlert setIsError={setIsError} />}
          </StyledControl>

          <StyledSocials>
            <h3>stalk me</h3>
            <div>
              <StyledLink
                href='tel:+79169179195'
                whileHover={{
                  scale: 1.1,
                }}
              >
                phone
              </StyledLink>
              <StyledLink
                href='mailto:pa.tomilin@gmail.com'
                whileHover={{
                  scale: 1.1,
                }}
              >
                mail
              </StyledLink>
              <StyledLink
                href='https://t.me/paul_tm'
                whileHover={{
                  scale: 1.1,
                }}
              >
                telegram
              </StyledLink>
              <StyledLink
                href='https://github.com/Paavveel'
                whileHover={{
                  scale: 1.1,
                }}
              >
                github
              </StyledLink>
              <StyledLink
                href='#'
                whileHover={{
                  scale: 1.1,
                }}
              >
                linkedin
              </StyledLink>
              <StyledLink
                href='#'
                whileHover={{
                  scale: 1.1,
                }}
              >
                cv
              </StyledLink>
            </div>
          </StyledSocials>
        </StyledControlContainer>
      </StyledForm>
    </StyledContacts>
  );
};

export default Contacts;
