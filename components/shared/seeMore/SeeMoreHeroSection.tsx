import ModalCall from "../slider-button/ModalCall";
import {translate} from "@/utility/translate";

// @ts-ignore
function SeeMoreHeroSection({data}) {

    return (
        <div>

            <div className={`relative m-auto bg-cover h-[80vh]  lg:h-[70vh] bg-[url("https://cdn.images.express.co.uk/img/dynamic/151/750x445/1360742.jpg")]`}>
              <div className='h-full flex w-full justify-center items-end bg-gradient-to-t from-[#020d1c] from-0.5%  via-transparent via-30% to-transparent to-90%'>
                <div className='w-full lg:py-16 ml-12 max-w-6xl'>
                  <h1 className='text-2xl lg:text-6xl text-white lg:font-bold'>
                     {
                      translate(data, 'title')
                    }
                  </h1>

                  <div className="flex gap-5 items-center mt-10 pb-5">
                    <img className="rounded-[50%]" style={{height: '80px', width: '80px'}} src={
                        process.env.NEXT_PUBLIC_BACKED_BASE+ data?.photo?.data?.attributes?.formats?.thumbnail?.url
                    } alt="" />
                    <div>
                        <h1 className="md:mb-3 text-xl md:text-3xl text-white font-semibold">{
                            translate(data, 'name')
                        }</h1>
                        <p className="text-sm md:text-xl text-white">{
                            translate(data, 'designation')
                        }</p>
                    </div>
                  </div>
                </div>
              </div>
              {/*<div className='absolute top-24 right-20 flex items-center gap-3'>
                <ModalCall/>
                </div>*/}
            </div>
        </div>
    );
}

export default SeeMoreHeroSection;