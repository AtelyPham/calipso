import { Button, Label, Spinner, TextInput } from 'flowbite-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

export default function ResetPassword() {
  const [password, setPassword] = useState<string>('');
  const [touched, setTouched] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    setIsLoading(true);

    const newPassword = {
      tokenId: router.query.token,
      password,
    };

    await fetch('/api/auth/reset-password', {
      method: 'PUT',
      body: JSON.stringify(newPassword),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(res => {
        setIsLoading(false);
        toast('Password is reset', {
          type: 'success',
          autoClose: 2000,
          position: 'top-right',
        });
      })
      .catch(error => console.log('Error: ', error));

    router.replace('/');
  };

  return (
    <div className="flex items-center justify-center w-3/5 mx-auto">
      <div className="flex flex-col w-full space-y-5">
        <h3 className="text-center">Enter a new password for your account</h3>

        <form onSubmit={handleSubmit} className="w-full">
          <div>
            <div className="block mb-2">
              <Label
                color={touched && password === '' ? 'failure' : 'default'}
                htmlFor="password"
                value="New Password"
              />
            </div>
            <TextInput
              id="password"
              type="password"
              required={true}
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter your new password"
              minLength={8}
              className="w-full"
              onBlur={() => setTouched(true)}
              color={touched && password === '' ? 'red' : 'base'}
              helperText={
                touched && password === ''
                  ? 'Password is required'
                  : 'Password must be at least 8 characters'
              }
            />
          </div>

          <div className="w-full">
            <Button type={'submit'} disabled={!password}>
              {isLoading ? (
                <>
                  <Spinner size={'sm'} />
                  <span className="ml-2">Sending...</span>
                </>
              ) : (
                'Reset Password'
              )}
            </Button>
          </div>
        </form>

        <Button color="gray">
          <Link href={'/'}>Back to Login</Link>
        </Button>
      </div>
    </div>
  );
}
