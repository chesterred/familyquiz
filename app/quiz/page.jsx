/**
Renders a Next.js page component that displays a quiz introduction with an image and a link to start the quiz.
@component
@returns {JSX.Element} The rendered page component.
*/

import { Container } from '@/components'
import Image from 'next/image'
import Link from 'next/link'
import { endpoint } from '@/utils/endpoint'
import { TbArrowBigRightFilled } from 'react-icons/tb'
import { NextResponse } from 'next/server'

export async function getRandomQuizQuestion(){
  const data = await fetch(`${endpoint}/quiz/random`,{cache:"no-store"})
  return data.json()
}

export default async function Page() {
  const data = await getRandomQuizQuestion();
  return (<Container as='main' className='flex flex-col gap-5 py-5 md:flex-row-reverse'>
    <div className='relative overflow-hidden rounded-2xl'>
      <div className='md:w-[24rem]'>
        <Image src={"/wallpaper.jpg"} height={700} width={700}></Image>
      </div>
    </div>

    <div className='md:w-[50%] flex flex-col gap-5'>
      <h1 className='text-2xl font-semibold'>Family Guy Quiz</h1>
      <p className='text-sm leading-6 text-gray-300'>Take this quiz to find out abc  abcabcabcabcabc
      abcabc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc abc
      abc  
      </p>
      <Link href={`/quiz/${data.randomQuestion}`} className='flex items-center justify-center'>
        <TbArrowBigRightFilled className='text-lg' />
        Take a quiz now !
      </Link>
    </div>
  </Container>)
}
