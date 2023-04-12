import axios from 'axios';
import { Button, Label, Spinner, TextInput } from 'flowbite-react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Signup = () => {
  const emailRef = React.useRef<HTMLInputElement | null>(null);
  const passwordRef = React.useRef<HTMLInputElement | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    try {
      setIsLoading(true);
      const resp = await axios.post('/api/auth/signup', {
        email,
        password,
      });

      const { message } = resp.data;
      console.log('Message: ', message);

      router.push('/api/auth/signin');
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
    <div>
      <Head>
        <title>Sign up</title>
      </Head>

      <div className="flex flex-col items-center justify-center w-full h-screen max-w-sm mx-auto">
        <div>
          <h1 className="text-4xl font-bold text-center text-gray-700 py-7">
            Sign Up
          </h1>
        </div>

        <form className="w-full" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <div className="block mb-2">
                <Label htmlFor="email" value="Email" />
              </div>
              <TextInput
                id="email"
                ref={emailRef}
                type="email"
                name="email"
                placeholder="Enter your email..."
                required
              />
            </div>

            <div>
              <div className="block mb-2">
                <Label htmlFor="password" value="Password" />
              </div>
              <TextInput
                ref={passwordRef}
                id="password"
                name="password"
                type="password"
                required={true}
              />
            </div>

            <p>
              Already have an account?{' '}
              <Link className="hover:underline" href={`/api/auth/signin`}>
                Sign in
              </Link>
            </p>
          </div>

          <div className="mt-6 [&>button]:w-full">
            <Button disabled={isLoading} type="submit">
              {isLoading && <Spinner />}{' '}
              <span className={isLoading ? 'ml-2 inline-block' : ''}>
                Sign Up
              </span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
