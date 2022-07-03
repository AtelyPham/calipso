import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
import Header from '../components/Header/Header'
import Input from '../components/Input'
import { MailIcon } from '../assets'
import Button from '../components/Button'
import IconButton from '../components/IconButton'

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Capliso - Your travel agent</title>
        <meta name='description' content='Find a city and go' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='h-screen w-screen relative'>
        <video
          className='object-cover h-full w-full absolute'
          autoPlay
          loop
          muted
        >
          <source src='/hero-video.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>

        <Header />

        {/** Right card */}
        <div className='absolute p-6 w-72 bg-white rounded-lg border border-gray-200 shadow-md top-1/4 left-2/3'>
          <div className='mb-2'>
            <Image
              className='rounded-lg'
              priority
              src='/beach.jpg'
              alt='beach'
              width={256}
              height={144}
              objectFit='cover'
            />
          </div>
          <Input id='email' leadingIcon={<MailIcon />} />
          <Button className='w-full'>Login</Button>
        </div>

        {/** Find city */}
        <div className='w-full flex justify-center absolute bottom-[10%] mx-auto'>
          <div>
            <h1 className='uppercase text-3xl font-semibold text-white mb-2'>
              Find city
            </h1>
            <div className='bg-white px-8 py-3.5 rounded-full flex'>
              <div className='relative z-0 w-52 pr-8'>
                <label
                  htmlFor='location'
                  className='block text-sm font-medium text-gray-900'
                >
                  Location
                </label>
                <input
                  type='text'
                  id='location'
                  className='block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder='Which city do you prefer?'
                />
              </div>

              <div className='relative z-0 w-40 pl-4 pr-8 border-l-2 border-l-slate-200'>
                <label
                  htmlFor='continents'
                  className='block text-sm font-medium text-gray-900'
                >
                  Continents
                </label>
                <input
                  type='text'
                  id='continents'
                  className='block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder='E.g. Asian'
                />
              </div>

              <div className='relative z-0 w-40 pl-4 pr-8 border-l-2 border-l-slate-200'>
                <label
                  htmlFor='trending'
                  className='block text-sm font-medium text-gray-900'
                >
                  Trending
                </label>
                <input
                  type='text'
                  id='trending'
                  className='block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder='City'
                />
              </div>

              <div className='ml-6'>
                <IconButton>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M14.325 12.899L19.705 18.279C19.8941 18.4682 20.0003 18.7248 20.0002 18.9923C20.0001 19.2599 19.8937 19.5164 19.7045 19.7055C19.5153 19.8946 19.2587 20.0008 18.9912 20.0007C18.7236 20.0006 18.4671 19.8942 18.278 19.705L12.898 14.325C11.2897 15.5707 9.26729 16.1569 7.24214 15.9643C5.21699 15.7718 3.34124 14.815 1.99649 13.2886C0.651744 11.7622 -0.0609975 9.7808 0.0032639 7.74753C0.0675253 5.71427 0.903963 3.78185 2.34242 2.34339C3.78087 0.904939 5.71329 0.0685019 7.74656 0.00424047C9.77982 -0.0600209 11.7612 0.652721 13.2876 1.99747C14.814 3.34222 15.7708 5.21796 15.9634 7.24312C16.1559 9.26827 15.5697 11.2907 14.324 12.899H14.325ZM8.00001 14C9.59131 14 11.1174 13.3678 12.2427 12.2426C13.3679 11.1174 14 9.59129 14 7.99999C14 6.40869 13.3679 4.88257 12.2427 3.75735C11.1174 2.63213 9.59131 1.99999 8.00001 1.99999C6.40871 1.99999 4.88259 2.63213 3.75737 3.75735C2.63215 4.88257 2.00001 6.40869 2.00001 7.99999C2.00001 9.59129 2.63215 11.1174 3.75737 12.2426C4.88259 13.3678 6.40871 14 8.00001 14Z'
                      fill='white'
                    />
                  </svg>
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Home
