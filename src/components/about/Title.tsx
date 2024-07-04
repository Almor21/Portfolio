import React from 'react'
import { Bodoni_Moda } from 'next/font/google';

const bodoni = Bodoni_Moda({ subsets: ['latin'] });

function Title({children} :{children: React.ReactNode}) {
  return (
      <h1 className={`${bodoni.className} font-bold text-2xl`}>{children}</h1>
  )
}

export default Title
