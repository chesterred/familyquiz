/**

Renders a Next.js page component that displays a grid of character avatars with links to individual character pages.
@component
@returns {JSX.Element} The rendered page component.
*/

import { Container } from '@/components'
import Image from 'next/image'
import Link from 'next/link'
import { endpoint } from '@/utils/endpoint'
import { getAllCharacters } from '@/lib/characters'


export default async function Page() {

  const data =await getAllCharacters();

  console.log(data);
  return (
    <main>
      <Container className='grid grid-cols-2 gap-1 py-5 md:grid-cols-3 lg:grid-cols-4'>
        {data?.characters.map((item) => (
          <Link href={`characters/${item.slug}`} key={item.name} className='overflow-hidden rounded-md'>
            <div>
              <Image src={item.avatar} height={500} width={500} />
              {/* 可以在这里添加其他需要显示的内容 */}
            </div>
          </Link>
        ))}
      </Container>
    </main>
  );
  
}
