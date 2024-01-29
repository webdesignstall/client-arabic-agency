import ModalCall from "../slider-button/ModalCall";

function SeeMoreHeroSection() {
    return (
        <div>

            <div className={`relative m-auto bg-cover h-[40vh] lg:h-[70vh] bg-[url("https://cdn.images.express.co.uk/img/dynamic/151/750x445/1360742.jpg")]`}>
              <div className='h-full flex w-full justify-center items-end bg-gradient-to-t from-[#020d1c] from-0.5%  via-transparent via-30% to-transparent to-90%'>
                <div className='w-full lg:py-16 ml-12 max-w-6xl'>
                  <h1 className='text-3xl lg:text-6xl text-white lg:font-bold'>
                    {/* {
                      translate(homeData, 'heroSectionTitle')
                    } */}
                    How Predictive Analytics 
                  </h1>
                  <h1 className='text-3xl lg:text-6xl text-white lg:font-bold'>
                    {/* {
                      translate(homeData, 'heroSectionTitle')
                    } */}
                    Impacts the Future of Healthcare 
                  </h1>
                  <div className="flex gap-5 items-center mt-10">
                    <img className="w-20 rounded-[50%]" src="https://images.ctfassets.net/96fo3urb6c1x/3r65sYgsryTtwZcm76IVt0/825430e880c1e995af3ae7cddbfd7b1b/Sergey_Avdeychik.jpg?w=150&h=150&q=100&fm=webp" alt="" />
                    <div>
                        <h1 className="mb-3 text-xl md:text-3xl text-white font-semibold">Sergey Avdeychik</h1>
                        <p className="text-lg md:text-xl text-white">Director of Healthcare Technologies at Andersen</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='absolute top-24 right-20 flex items-center gap-3'>
                <ModalCall/>
            </div>
            </div>
        </div>
    );
}

export default SeeMoreHeroSection;