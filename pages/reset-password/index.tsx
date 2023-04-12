import { Button, Label, Spinner, TextInput } from 'flowbite-react';
import { authOptions } from '../api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import axios from 'axios';

export default function ResetPassword() {
  const [email, setEmail] = useState<string>('');
  const [touched, setTouched] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const resp = await axios.post('/api/auth/reset-password', { email });

      console.log(resp.data);

      toast('Message Sent', {
        type: 'success',
        autoClose: 2000,
        position: 'top-right',
      });
    } catch (error) {
      let msg = '';
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.log(error.response.data);
          msg = (error.response.data as any).message;
        } else if (error.request) {
          console.log(error.request);
          msg = 'Request failed';
        } else {
          console.log('Error', error.message);
          msg = error.message;
        }
      } else {
        msg = 'Something went wrong';
        console.log('Error: ', error);
      }

      toast(msg, {
        type: 'error',
        autoClose: 2000,
        position: 'top-right',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Reset Password</title>
      </Head>
      <div className="flex items-center justify-center w-3/5 h-screen max-w-sm mx-auto">
        <div className="flex flex-col w-full space-y-5 prose">
          <h1 className="text-center">Reset Your Password</h1>
          <h4 className="text-center">
            Enter the email address associated with your account, and we will
            send you a link to reset your password
          </h4>

          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <div className="block mb-2">
              <Label
                color={touched && email === '' ? 'failure' : 'default'}
                htmlFor="email"
                value="Your email"
              />
            </div>
            <TextInput
              id="email"
              type="email"
              placeholder="Enter your email address"
              color={touched && email === '' ? 'red' : 'base'}
              className="w-full"
              required={true}
              value={email}
              onChange={e => setEmail(e.target.value)}
              onBlur={() => setTouched(true)}
              helperText={
                touched && email === '' && <span>Email is required!</span>
              }
            />

            <div className="mt-4 [&>button]:w-full">
              <Button type={'submit'} disabled={!email || isLoading}>
                {isLoading ? (
                  <>
                    <Spinner size={'sm'} />
                    <span className="ml-2">Sending...</span>
                  </>
                ) : (
                  'Send Email'
                )}
              </Button>
            </div>
          </form>

          <Link className="block w-full text-center" href={'/'}>
            Back to Login
          </Link>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
