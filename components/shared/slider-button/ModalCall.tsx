import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
function ModalCall() {
    return (
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <div className="flex items-center gap-3">
                        <svg className="BookingButton-module--phoneIcon--8bae7 Icon-module--icon--c95f8 w-4 " fill="none" viewBox="0 0 16 27"><path fill="#ffdb00" d="M13.68 0H2.32A1.965 1.965 0 00.355 1.967v23.068C.355 26.12 1.233 27 2.32 27h11.36c1.085 0 1.965-.88 1.965-1.965V1.967C15.645.882 14.765 0 13.68 0zM8 25.059a1.254 1.254 0 110-2.509 1.254 1.254 0 010 2.509zm6.173-4.299H1.828V3.32h12.345V20.76z"></path></svg>
                        <button className='hover:text-[#23beec]'>Book a call</button>
                    </div>
                
                </AlertDialogTrigger>
                <AlertDialogContent className="max-w-5xl p-0 border-none mt-5">
                    <div className="relative flex justify-between ">
                        <div className="w-[50%] py-4 px-9 rounded-l-md">
                            <h1 className="text-4xl font-medium mb-4">Booking a Call</h1>
                            <p>Select an available slot to get in touch with Andersen so that one of our representatives can contact you and start a discussion</p>
                            <form action="" className="my-5">
                                <select name="" id="" className="w-full py-1 px-3 border-b text-lg outline-none">
                                    <option >Select your industry*</option>
                                    <option value="" className="mb-1 py-1 text-lg border-none">Healthcare</option>
                                    <option value="" className="mb-1 py-1 text-lg border-none">Financial Services</option>
                                    <option value="" className="mb-1 py-1 text-lg border-none">Logistics & Supply Chain</option>
                                    <option value="" className="mb-1 py-1 text-lg border-none">Media & Telecom</option>
                                    <option value="" className="mb-1 py-1 text-lg border-none">Other</option>
                                </select>
                                <div className="flex gap-5 w-full justify-between items-center my-4">  
                                    <input className="w-full py-1 px-3 border-b text-lg outline-none" type="text" placeholder="Name"/>
                                    <input className="w-full py-1 px-3 border-b text-lg outline-none" type="email" placeholder="Corporate E-mail*"/>
                                </div>
                                <div className="flex gap-5 w-full justify-between items-center my-4">  
                                    <input className="w-full py-1 px-3 border-b text-lg outline-none" type="number" placeholder="Phone*"/>
                                    <input className="w-full py-1 px-3 border-b text-lg outline-none" type="date" placeholder="Data & time"/>
                                </div>
                                <input className="w-full py-1 px-3 border-b text-lg outline-none" type="text" placeholder="Please describe your project requirements*"/>
                                <div className="w-full my-4 text-lg"> 
                                    <input type="checkbox"/>
                                    <label htmlFor="" className="pl-3">I want to protect my data by signing an NDA </label>
                                </div>
                            </form>
                            <button className="py-2 px-10 rounded mb-5 bg-[#c4c4c4] hover:bg-[#23beec]">Book</button>
                            <div className="bg-[#d4d4d4] p-5">
                                <h1 className="text-lg text-[#636364]">This site is protected by reCAPTCHA and the Google <span className="underline text-black">Privacy Policy  </span> {" "} and <span className="underline text-black">Terms of Service</span> apply</h1>
                            </div>
                        </div>
                        <div className="w-[50%] bg-[#25303e] py-4 px-9 rounded-r-md">
                            <h1 className="text-3xl text-white/80 font-medium">Reach out to Andersen to receive a free consultation and entrust your IT initiative to a company of software experts.</h1>
                            <div className="border-b my-10 border-white/60"></div>
                            <h1 className="text-3xl font-medium text-white/80 mb-5">Contact us</h1>
                            <a href="tel:+48223906408" className="flex items-center gap-3 text-white/80 mb-4"><svg className=" text-[#23beec] w-6 h-6" fill="none" viewBox="0 0 16 27"><path fill="#ffdb00" d="M13.68 0H2.32A1.965 1.965 0 00.355 1.967v23.068C.355 26.12 1.233 27 2.32 27h11.36c1.085 0 1.965-.88 1.965-1.965V1.967C15.645.882 14.765 0 13.68 0zM8 25.059a1.254 1.254 0 110-2.509 1.254 1.254 0 010 2.509zm6.173-4.299H1.828V3.32h12.345V20.76z"></path></svg>+48 22 390 64 08</a>
                            <a href="mailto:vn@andersenlab.com" className="flex items-center gap-3 text-white/80 mb-4"><svg className=" text-yellow-400 w-6" fill="none" viewBox="0 0 19 14"><path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M17 13H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1z"></path><path fill="currentColor" fill-rule="evenodd" d="M3.52 4.09a4.22 4.22 0 0 0-1.8-.59V1.75c.87 0 1.77.35 2.59.78.84.44 1.69 1.02 2.45 1.57l1.1.81.07.06.86.63a8.64 8.64 0 0 0 .72.49l.1-.05c.2-.1.45-.26.76-.46l1.38-.93.83-.57c.81-.54 1.68-1.1 2.46-1.54.39-.21.77-.4 1.13-.54.34-.14.73-.25 1.1-.25.48 0 .87.4.87.88s-.4.87-.87.87c-.06 0-.21.02-.48.13-.26.1-.57.25-.93.45a32.48 32.48 0 0 0-3.12 2c-.52.36-1.01.7-1.44.97a12.04 12.04 0 0 1-1.3.72c-.1.05-.3.1-.5.1-.21 0-.4-.06-.52-.1a10.24 10.24 0 0 1-1.2-.74l-.88-.66a1268.23 1268.23 0 0 0-1.14-.85A19.18 19.18 0 0 0 3.52 4.1zm5.87 2.05zm.23 0z" clip-rule="evenodd"></path></svg>vn@andersenlab.com</a>
                            <div className="border-b my-10 border-white/60"></div>
                            <h1 className="text-3xl font-medium text-white/80 mb-5">Customers who trust us</h1>
                            <div className="flex items-center gap-5">
                                <img className="w-28" data-src="https://static.andersenlab.com/andersenlab/new-andersensite/cases/samsung/logo/samsung-white.svg" alt="Samsung" src="https://static.andersenlab.com/andersenlab/new-andersensite/cases/samsung/logo/samsung-white.svg" />
                                <img className="w-28" data-src="https://static.andersenlab.com/andersenlab/new-andersensite/customers/verivox-white.svg" alt="Verivox" src="https://static.andersenlab.com/andersenlab/new-andersensite/customers/verivox-white.svg"/>
                                <img className="w-28" data-src="https://static.andersenlab.com/andersenlab/new-andersensite/cases/tui/tui-logo-white.svg" alt="TUI" src="https://static.andersenlab.com/andersenlab/new-andersensite/cases/tui/tui-logo-white.svg"/>
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0">
                        <AlertDialogCancel className="border-none hover:bg-white">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl3Uca9KsfmbRVvMO17tRoZGOCrEBmtlyAnw&usqp=CAU" alt="" className="w-10 "/>
                        </AlertDialogCancel>
                    </div>
                </AlertDialogContent>
            </AlertDialog>
            )
          }
          
export default ModalCall;

  