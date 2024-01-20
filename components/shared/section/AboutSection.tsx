import SectionContainer from '@/components/SectionContainer'
import React from 'react'

export default function AboutSection() {
  return (
    <SectionContainer>
      <div>
        <div>
          <div>
            <h1 className='text-5xl font-semibold py-6'>Something to think about</h1>
          </div>
          <div>
            <p className='text-xl font-semibold'>Andersen keeps a close eye on the AI domain to shape the future of tech. Here is what we have to say.</p>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
