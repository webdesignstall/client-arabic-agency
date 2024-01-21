import SectionContainer from '@/components/SectionContainer'
export default function RatingSection() {
  return (
    <SectionContainer>
      <div>
        <div className=' grid grid-cols-9'>
          <div className='text-xl font-light text-justify lg:text-3xl lg:font-semibold col-span-7 lg:col-span-5 leading-snug max-w-3xl'>
            Elevate your success with efficient custom AI solutions sculpted by our expert team with vast expertise.
          </div>
          <div className='border-r'>

          </div>
          <div className=''>

          </div>
          <div className='w-20  h-20 bg-cover bg-[url("https://static.andersenlab.com/andersenlab/new-andersensite/icons/logos/clutch-top-info-tech-white.svg")]'>
            100% reviews
          </div>
        </div>
      </div>
    </SectionContainer>

  )
}
