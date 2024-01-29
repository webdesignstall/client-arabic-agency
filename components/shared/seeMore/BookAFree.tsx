import React from 'react';

function BookAFree() {
    return (
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/5">
          <div className="py-12">
            <div className="container mx-auto text-center">
              <h2 className="md:text-4xl font-heading font-bold mb-4 text-xl text-left">
              Book a free IT consultation
              {/* {translate(homeData, 'expertiseSectionTitle')} */}
              </h2>
              <p className="text-gray-600 mb-3 md:text-2xl text-lg text-left">
                What happens next?
              </p>
              <div className="flex justify-center">
                <div className=" w-full">
                  <div className="p-8">
                    <ul className="space-y-4">
                      <li className="flex items-center space-x-4 text-left md:text-base text-sm">
                        <div className="rounded-full bg-blue-500 p-3 text-white">
                          <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-gray-500">
                            An expert contacts you after having analyzed your
                            requirements;
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center space-x-4 text-left md:text-base text-sm">
                        <div className="rounded-full bg-blue-500 p-3 text-white">
                          <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-gray-500 ">
                            If needed, we sign an NDA to ensure the highest
                            privacy level;
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center space-x-4 text-left md:text-base text-sm">
                        <div className="rounded-full bg-blue-500 p-3 text-white">
                          <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-gray-500">
                            We submit a comprehensive project proposal with
                            estimates, timelines, CVs, etc.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-gray-600 mb-3 text-left md:text-2xl text-lg mt-8">
                  Customer who trust us
                </h3>
                <div className=" flex justify-space-between w-full">
                  <img
                    src="https://static.andersenlab.com/andersenlab/new-andersensite/cases/samsung/logo/samsung-gray.svg"
                    alt="Customers who trust us"
                    className="w-4/12 mr-2"
                  />

                  <img
                    src="https://static.andersenlab.com/andersenlab/new-andersensite/customers/verivox-gmbh.svg"
                    alt="SAMSUNG VeriVOX TUI"
                    className="w-4/12 mr-2"
                  />

                  <img
                    src=" https://static.andersenlab.com/andersenlab/new-andersensite/customers/tui.svg"
                    alt="SAMSUNG VeriVOX TUI"
                    className="w-4/12"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-8/12  p-4 mt-3">
          <div className="w-full ">
            <form
              id="get-consultation"
              name="get-consultation"
              noValidate
            >
            <div className="mt-2 md:mt-6">
                <div className="relative">
                <select
                    className="w-full px-4 py-2 border-b rounded-md focus:outline-none  bg-transparent"
                    name="industry"
                >
                    <option value="" disabled>
                    Select your industry*
                    </option>
                    <option value="healthcare">Healthcare</option>
                    <option value="financial-services">
                    Financial Services
                    </option>
                    <option value="logistics-supply-chain">
                    Logistics & Supply Chain
                    </option>
                    <option value="media-telecom">Media & Telecom</option>
                    <option value="other">Other</option>
                </select>
                </div>
            </div>
              <div className="md:flex items-center gap-5 mt-5">
                <div className="mb-2 md:w-[50%] md:mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    className="px-2 w-full border-b outline-none rounded-md"
                  />
                </div>
                <div className="mb-2 md:w-[50%] md:mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Corporate E-mail*
                  </label>
                  <input
                    type="email"
                    className="px-2 w-full border-b outline-none rounded-md"
                  />
                </div>
              </div>
              <div className="sm:col-span-2 md:col-span-1">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Phone*
                  </label>
                  <input
                    type="tel"
                    className="px-2 w-full border-b outline-none rounded-md"
                  />
                  <p className="mt-1 text-gray-600 text-sm">
                    We will call you ASAP or you can{" "}
                    <span className="font-bold">schedule a call</span>
                  </p>
                </div>
              </div>
              <div className="sm:col-span-2 md:col-span-1">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Please describe your project requirements*
                  </label>
                  <textarea
                    className="mt-1 p-2 w-full border outline-none rounded-md"
                    maxLength={1000}
                  ></textarea>
                </div>
              </div>

                <div className="mb-2 md:mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 19 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12.921 0.5a6.087 6.087 0 0 1 4.299 1.77A5.996 5.996 0 0 1 19 6.542a6.001 6.001 0 0 1-1.78 4.273l-.002.001-8.01 7.924A4.334 4.334 0 0 1 6.148 20a4.336 4.336 0 0 1-4.012-2.684 4.265 4.265 0 0 1-.317-1.619 4.265 4.265 0 0 1 1.268-3.042L11.08 4.71a2.594 2.594 0 0 1 1.843-.759 2.61 2.61 0 0 1 2.414 1.616 2.577 2.577 0 0 1-.573 2.806l-7.368 7.323a.872.872 0 0 1-1.228 0 .86.86 0 0 1 0-1.22l7.368-7.324a.856.856 0 0 0 0-1.221.865.865 0 0 0-.614-.253c-.231 0-.45.09-.614.253l-7.992 7.944a2.552 2.552 0 0 0-.759 1.821c0 .688.27 1.335.76 1.822a2.58 2.58 0 0 0 1.832.755 2.58 2.58 0 0 0 1.832-.755l.002-.002 8.01-7.924a4.29 4.29 0 0 0 .953-4.675 4.282 4.282 0 0 0-.954-1.427 4.35 4.35 0 0 0-3.07-1.264 4.35 4.35 0 0 0-3.07 1.264L1.87 11.425a.872.872 0 0 1-1.228 0 .86.86 0 0 1 0-1.22L8.623 2.27A6.08 6.08 0 0 1 12.921 0.5Z"></path>
                      </svg>
                      Attach file
                    </div>
                  </label>
                  <div className='md:flex gap-5'>
                  <input
                    type="file"
                    name="files"
                    accept=".doc,.docx,.pdf,.ppt,.pptx"
                    multiple
                  />
                  <p className="mt-1 text-gray-600 text-sm">
                    No more than 3 files may be attached up to 3MB each.
                    Formats: doc, docx, pdf, ppt, pptx.
                  </p>
                  </div>
                </div>
              <div className="mt-4 md:flex items-center gap-4 col-span-2">
                  <button
                    type="submit"
                    className="w-full md:w-fit px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none focus:bg-blue-700"
                  >
                    Send request
                  </button>
                <label className="flex items-center mt-2 md:mt-0">
                  <input type="checkbox" name="nda" className="form-checkbox" />
                  <span className="ml-2 text-gray-700">
                    I want to protect my data by signing an NDA.
                  </span>
                </label>
                
              </div>
                <h1 className='text-center text-xl mt-2 md:mt-5'>This site is protected by reCAPTCHA and the Google <span className='border-b text-black border-black hover:text-blue-700'>Privacy Policy</span> and <span className='border-b text-black border-black hover:text-blue-700'>Terms of Service</span> apply.</h1>
            </form>
          </div>
        </div>
      </div>
    );
}

export default BookAFree;