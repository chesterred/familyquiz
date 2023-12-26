/**
Renders a navigation component with a sticky header, containing a logo and a link to take a quiz.
@component
@returns {JSX.Element} The rendered navigation component.
*/

import Link from 'next/link'
import { Container } from '.'
import Image from 'next/image'
import { TbArrowBigRightFilled } from 'react-icons/tb'

export const Navigation = () => {
  return (
    <div className='sticky top-0 backdrop-blur-xl bg-gray-300'>
      <Container className='flex items-center py-5 justify-between gap-1 font-semibold text-blue-500'>
        <Link href="/">
          <Image src="/logo.png"  width={70} height={50}/>
        </Link>
        <Link href="/quiz" className='flex items-center justify-center gap-1 px-5 font-semibold text-black
        transition-colors bg-green-500 rounded-md duration-700 hover:bg-green-600'>
          <TbArrowBigRightFilled className='text-lg' />
          Take a quiz
        </Link>
      </Container>
    </div>
  )
}
