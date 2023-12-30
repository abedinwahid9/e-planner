import { useEffect, useState } from "react";
import { getStoredBookData } from "../../Utility/LocalStorage";
import { Link, useLoaderData } from "react-router-dom";

const BookOnline = () => {
  const [bookingDatas, setBookingDatas] = useState([]);
  const data = useLoaderData();
  const events = data.events;

  useEffect(() => {
    const getData = getStoredBookData();

    if (events.length > 0) {
      const giveBooking = events.filter((data) => {
        return getData.includes(data.id);
      });
      setBookingDatas(giveBooking);
    }
  }, []);

  return (
    <div>
      <h2 className="my-5 text-center lg:text-5xl md:text-3xl font-bold">
        Your booking service
      </h2>
      <div className="divider w-3/4 mx-auto"></div>
      <div className="px-10 py-5 flex flex-col gap-6">
        {bookingDatas.length === 0 ? (
          <h2 className="text-center font-extrabold text-2xl text-primarySecondColor">
            No booking service
          </h2>
        ) : (
          bookingDatas.map((bookingData, i) => {
            return (
              <div key={i}>
                <div>
                  <div className="flex bg-base-100 shadow-xl  rounded-lg  overflow-hidden">
                    <div className="w-2/5">
                      <img
                        className="h-full object-fit"
                        src={bookingData.image}
                        alt="Album"
                      />
                    </div>
                    <div className="p-5 w-3/5">
                      <div className="inline-flex mb-2 ">
                        <h2 className="bg-primarySecondColor font-medium  px-3 py-1 rounded ">
                          {bookingData.event_type}
                        </h2>
                      </div>
                      <p className="font-semibold md:text-xl text-base  text-[#000]">
                        {bookingData.name}
                      </p>
                      <p className="font-medium md:text-xl text-xs   text-primaryThreeColor">
                        {bookingData.short_description}
                      </p>
                      <p className=" font-semibold text-base mt-2 mb-4">
                        {bookingData.price}
                      </p>
                      <Link to={`/${bookingData.id}`}>
                        <button className="bg-primaryFirstColor py-2 px-4 text-base font-semibold rounded">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default BookOnline;
