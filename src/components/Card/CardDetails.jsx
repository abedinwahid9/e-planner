import { useLoaderData, useParams } from "react-router-dom";
import { getStoredBookData, saveBookData } from "../Utility/LocalStorage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CardDetails = () => {
  const params = useParams();
  const id = params.id;

  const data = useLoaderData();

  const cardData = data.events.find((card) => card.id == id);

  const { image, name, price, details } = cardData;

  const arrayOfObjects = Object.entries(details).map(([key, value]) => ({
    key,
    value,
  }));

  const handleBookBtn = (id) => {
    const checkData = getStoredBookData().includes(parseInt(id));

    if (!checkData) {
      toast("Donation successful!");
    } else {
      toast("already Donation done!");
    }

    saveBookData(parseInt(id));
  };

  return (
    <>
      <div className="lg:h-[650px] md:h-[400px] h-[200px] rounded-lg overflow-hidden">
        <div
          className="bg-cover bg-center w-full h-full flex items-end"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div className="bg-[#0b0b0b80] w-full py-7 pl-7">
            <button
              onClick={() => handleBookBtn(id)}
              className="bg-primaryFirstColor md:px-5 md:py-3 px-4 py-2 text-[#fff] font-semibold  rounded"
            >
              Price {price}
            </button>
          </div>
        </div>
      </div>
      <div className="my-10 md:px-6 px-2">
        <h2 className="text-[#000] font-bold text-5xl">{name}</h2>
        <div className="divider"></div>
        {arrayOfObjects.map((detail, i) => {
          return (
            <div key={i}>
              <p className="mt-5 text-secondaryTextColor text-lg font-bold">
                {detail.key} :{" "}
                <span className="text-base font-medium">{detail.value}</span>
              </p>
            </div>
          );
        })}
      </div>{" "}
      <ToastContainer />
    </>
  );
};

export default CardDetails;
