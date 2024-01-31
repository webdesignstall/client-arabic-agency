export default function BookFree() {
    return (
        <form
              id="get-consultation"
              name="get-consultation"
              noValidate
            >
            <div className="mt-2 md:mt-3">
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
                <div className="mb-2 md:w-[50%] md:mb-2">
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
                <div className="mb-2">
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
                  <div className='md:flex'>
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
              <div className="mt-4">
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
            </form>
    );
}