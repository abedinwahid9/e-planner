import { FaLocationDot, FaMobileScreenButton } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {
  return (
    <div className="my-10">
      <h2 className="text-5xl font-bold my-5 text-center text-primaryFirstColor">
        Contact Us
      </h2>
      <div className="divider w-3/4 mx-auto mb-10"></div>
      <div className="flex flex-col md:flex-row gap-5 p-10  items-center">
        <div className="space-y-3 w-2/4 md:pl-16">
          <div className="flex items-center gap-3">
            <FaLocationDot className="text-primarySecondColor" />
            <h2 className="text-primaryThreeColor text-lg">Dhaka,Bangladesh</h2>
          </div>
          <div className="flex items-center gap-3">
            <FaMobileScreenButton className="text-primarySecondColor" />
            <p className="text-primaryThreeColor text-lg">+88010000000</p>
          </div>
          <div className="flex items-center gap-3">
            <MdEmail className="text-primarySecondColor" />
            <p className="text-primaryThreeColor text-lg">eplanner@gmail.com</p>
          </div>
        </div>
        <div className="w-2/4">
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2 text-primaryThreeColor"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2 text-primaryThreeColor"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold mb-2 text-primaryThreeColor"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-primaryFirstColor w-full btn hover:bg-primarySecondColor text-primaryThreeColor text-xl"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
