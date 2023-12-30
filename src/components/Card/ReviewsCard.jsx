/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

const ReviewsCard = ({ reviewone }) => {
  const { img, name, review } = reviewone;

  return (
    <div className="bg-white rounded-lg  overflow-hidden card">
      <div className="p-4">
        <div className="flex flex-col items-center justify-center gap-2">
          <img
            className="h-20 w-20 rounded-full object-cover"
            src={img}
            alt="User"
          />
          <div className="   text-center space-y-2">
            <p className="text-lg font-semibold text-gray-800">{name}</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-gray-700 text-center">{review}</p>
        </div>
      </div>
      <div className="bg-gray-100 py-2 px-4 mt-4">
        <div className="flex items-center"></div>
      </div>
    </div>
  );
};

export default ReviewsCard;
