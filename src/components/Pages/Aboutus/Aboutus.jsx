/* eslint-disable react/no-unescaped-entities */
import ContactUs from "./ContactUs/ContactUs";

const Aboutus = () => {
  return (
    <div>
      <div className="bg-white py-10 px-6 md:px-16 lg:px-32">
        <h2 className="text-5xl text-center text-primaryFirstColor font-semibold mb-6">
          Our Journey
        </h2>

        <p className="text-center text-xl mb-6">
          <span className="text-primaryThreeColor">
            Turning Dreams into Unforgettable Celebrations
          </span>
        </p>
        <div className="divider"></div>

        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">The Dream</h3>
          <p className="text-lg mb-4">
            Our journey began with a simple dream: to bring people together
            through unforgettable celebrations. Armed with a vision and a desire
            to turn ordinary events into extraordinary experiences, we started
            in a small office with big aspirations.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">The Early Days</h3>
          <p className="text-lg mb-4">
            We embarked on our journey by organizing small gatherings,
            birthdays, and anniversaries. With hard work and creativity as our
            driving force, we learned, grew, and earned a reputation for
            excellence. Those early days laid the foundation for what would
            become our legacy.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">Expanding Horizons</h3>
          <p className="text-lg mb-4">
            As word of our magical touch spread, we ventured into larger and
            more diverse projects. Weddings, corporate galas, and themed parties
            became our canvas, and we painted them with the colors of joy and
            unity. Our dedication to crafting unique and personalized
            experiences set us apart.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">
            Milestones and Memories
          </h3>
          <p className="text-lg mb-4">
            With each event, we celebrated milestones - both ours and our
            clients'. We witnessed couples exchange vows under starlit skies,
            companies come together in unity, and families laugh, dance, and
            create cherished memories. These moments fueled our passion and
            inspired us to aim higher.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">The Team</h3>
          <p className="text-lg mb-4">
            Behind every successful event is a team of dedicated professionals.
            Our team members are artists, planners, and storytellers, each
            contributing their unique talents and expertise. Together, we
            transform visions into reality, ensuring that every detail is
            flawless.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">The Future</h3>
          <p className="text-lg mb-4">
            Today, as we look ahead, our commitment remains unwavering. We
            continue to exceed expectations, embrace innovation, and explore new
            trends to craft exceptional experiences. We are excited to be a part
            of your next celebration and create memories that will last a
            lifetime.
          </p>
        </div>

        <p className="text-lg mb-4">
          Thank you for joining us on this incredible journey. We invite you to
          explore our portfolio, connect with our team, and let us be a part of
          your special moments. At{" "}
          <span className="text-primaryFirstColor font-bold">
            E <span className="text-primaryThreeColor">PlANNER</span>{" "}
          </span>
          , we are not just planners; we are memory-makers.
        </p>

        <p className="text-lg">Here's to the journey ahead!</p>
      </div>
      <div>
        <ContactUs></ContactUs>
      </div>
    </div>
  );
};

export default Aboutus;
