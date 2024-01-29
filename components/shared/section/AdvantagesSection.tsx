import SectionContainer from '@/components/SectionContainer'
import {translate} from "@/utility/translate";
// @ts-ignore
export default function AdvantagesSection({homeData}) {
  return (
    <SectionContainer>
      <div>
        <div>
          <div>
            <h1 className='lg:text-6xl text-3xl font-semibold py-10'>
              
            {translate(homeData, 'homeSectionNineTitle')}
            </h1>
          </div>
          <div>
            <div className='grid lg:grid-cols-2 gap-12'>
              <div>
                <div className=''>
                  <h3 className='text-2xl font-semibold py-4'>Multi-industry track record</h3>
                  <p className='text-lg'>Andersen's portfolio of delivered IT projects includes over 1,000 successful tech initiatives in the most demanding and data-driven sectors.</p>
                </div>
              </div>
              <div>
                <div className=''>
                  <h3 className='text-2xl font-semibold py-4'>Multi-industry track record</h3>
                  <p className='text-lg'>Andersen's portfolio of delivered IT projects includes over 1,000 successful tech initiatives in the most demanding and data-driven sectors.</p>
                </div>
              </div>
              <div>
                <div className=''>
                  <h3 className='text-2xl font-semibold py-4'>Multi-industry track record</h3>
                  <p className='text-lg'>Andersen's portfolio of delivered IT projects includes over 1,000 successful tech initiatives in the most demanding and data-driven sectors.</p>
                </div>
              </div>
              <div>
                <div className=''>
                  <h3 className='text-2xl font-semibold py-4'>Multi-industry track record</h3>
                  <p className='text-lg'>Andersen's portfolio of delivered IT projects includes over 1,000 successful tech initiatives in the most demanding and data-driven sectors.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
