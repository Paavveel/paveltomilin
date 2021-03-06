import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { media } from '../../styles/GlobalStyles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';
import { socials } from '../../data';

// Components
import ErrorAlert from '../../components/ErrorAlert';
import SuccessAlert from '../../components/SuccessAlert';

const StyledContacts = styled(motion.div)`
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

  h4 {
    align-self: flex-start;
    font-size: 5vw;
    line-height: 7.5vw;
    font-weight: 300;
    text-transform: uppercase;
    padding: 0;
    padding-left: 22%;

    @media ${media.small} {
      font-size: 6vw;
      padding-left: 10%;
    }
  }

  p {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    flex-wrap: wrap;
    width: 100%;
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
  }

  input {
    width: 70%;
    background: transparent;
    /* user-select: none; */
    outline: none;
    border: none;
    border-bottom: 1px grey solid;
    font-size: 2.7vw;
    color: var(--blue);
    padding: 0;

    &:focus {
      border-bottom: 1px var(--blue) solid;
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
    min-height: 30vh;
    background: transparent;
    outline: none;
    border: 1px grey solid;
    font-size: 2vw;
    color: var(--blue);
    padding: 1rem;
    resize: vertical;

    &:focus {
      border: 1px var(--blue) solid;
    }

    @media ${media.small} {
      font-size: 4vw;
    }
    @media ${media.xsmall} {
      min-height: 25vh;
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
  display: flex;

  div {
    width: 100%;
  }

  @media ${media.small} {
    flex-direction: column;
  }
`;
const StyledControlContainer = styled.div`
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
const StyledSocials = styled.div`
  width: 30%;
  display: flex;
  height: 80%;

  gap: 7rem;

  @media ${media.small} {
    gap: 1rem;
  }

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
    flex-grow: 1;
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
    background-color: var(--gray);
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
  color: var(--blue);
  font-weight: 300;
  text-transform: uppercase;
  width: fit-content;

  &:focus,
  &:hover {
    text-decoration: line-through;
    font-style: italic;
  }
`;

const titleVariants = {
  offscreen: {
    y: '30%',
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};
const formVariants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
};

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
    <StyledContacts
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ amount: 0.2 }}
    >
      <StyledTitle
        variants={titleVariants}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        Let's talk!
      </StyledTitle>
      <StyledForm
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ amount: 0.3 }}
      >
        <motion.h4 variants={formVariants}>Hello,</motion.h4>
        <StyledFormContainer variants={formVariants}>
          <div>
            <p>
              <label htmlFor='name'>my name is</label>
              <input
                id='name'
                autoComplete='off'
                type='text'
                {...register('name')}
              />
              {errors.name && <span>{errors.name?.message}</span>}
            </p>
            <p>
              <label htmlFor='email'>here is my email</label>
              <input
                id='email'
                autoComplete='off'
                type='email'
                {...register('email')}
              />
              {errors.email && <span>{errors.email?.message}</span>}
            </p>
          </div>

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
                transition: {
                  ease: 'easeOut',
                },
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
              {socials.map((social, i) => {
                if (social.name === 'phone' || social.name === 'mail') {
                  return (
                    <StyledLink
                      key={i}
                      href={social.href}
                      whileHover={{
                        scale: 1.1,
                      }}
                    >
                      {social.name}
                    </StyledLink>
                  );
                }
                return (
                  <StyledLink
                    key={i}
                    href={social.href}
                    target='_blank'
                    whileHover={{
                      scale: 1.1,
                    }}
                  >
                    {social.name}
                  </StyledLink>
                );
              })}
            </div>
          </StyledSocials>
        </StyledControlContainer>
      </StyledForm>
    </StyledContacts>
  );
};

export default Contacts;
