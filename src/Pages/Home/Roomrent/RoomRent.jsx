import { useEffect, useState } from "react";
import { FaSms, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const RoomRent = () => {
  const [hotelRent, setHotelRent] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/booking")
      .then((res) => res.json())
      .then((data) => setHotelRent(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleShowRooms = (rooms) => {
    setSelectedRoom(rooms);
    setShowModal(true);
  };

  return (
    <div>
      <div className="text-center m-4 justify-center">
        <h1 className="text-3xl text-center md:text-4xl font-medium mb-2">
          {" "}
          Popular Hotel Destinations
        </h1>
        <h1 className="text-xl">Most popular choices for room</h1>
      </div>
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {hotelRent.map((hotel) => (
          <div key={hotel._id} className="relative mx-auto w-full">
            <a
              href="#"
              className="relative inline-block w-full transform transition-transform duration-300 ease-in-out hover:-translate-y-2"
            >
              <div className="rounded-lg p-4 shadow">
                <div className="relative flex h-52 justify-center overflow-hidden rounded-lg">
                  <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                    <div className="absolute inset-0 bg-black bg-opacity-80">
                      <img src={hotel.image_url} alt={hotel.name} />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-5 mb-3 flex">
                    <p className="flex items-center font-medium text-white shadow-sm">
                      <FaSms className="mr-2 text-xl" />
                      10
                    </p>
                  </div>
                  <div className="absolute bottom-0 right-5 mb-3 flex">
                    <p className="flex items-center font-medium text-gray-800">
                      <FaPhone className="mr-2 text-2xl" />
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <h2
                    className="line-clamp-1 text-2xl font-medium text-gray-800 md:text-lg"
                    title={hotel.name}
                  >
                    {hotel.name}
                  </h2>
                  <p className="text-primary mt-2 inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                    <span className="text-sm uppercase">Address: </span>
                    <span>{hotel.address}</span>
                  </p>
                  <p className="text-primary mt-2 inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                    <span className="text-sm uppercase">Phone: </span>
                    <span>{hotel.phone}</span>
                  </p>
                  <p className="text-primary mt-2 inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                    <span className="text-sm uppercase">Email: </span>
                    <span>{hotel.email}</span>
                  </p>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl justify-center text-center font-medium text-gray-800">
                    <button
                      className="btn"
                      onClick={() => handleShowRooms(hotel.rooms)}
                    >
                      Rooms Details
                    </button>
                  </h3>
                </div>
              </div>
            </a>

            {showModal && (
              <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
                  <div className="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">
                    <div className="flex justify-around">
                      <div>
                        <h2 className="text-2xl font-medium text-gray-800">
                          Room Details
                        </h2>
                      </div>
                      <div>
                        <button
                          className="btn btn-outline cursor-pointer text-gray-500 hover:text-gray-600"
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-0">
                    <ul className="flex flex-col gap-4">
                      {selectedRoom &&
                        selectedRoom.map((room) => (
                          <li
                            className="flex items-center gap-4"
                            key={room.room_id}
                          >
                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="h-3 w-3"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 12.75l6 6 9-13.5"
                                ></path>
                              </svg>
                            </span>
                            <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                              <p>Type: {room.type}</p>
                              <p>Price: {room.price}</p>
                              <p>
                                Availability:{" "}
                                {room.availability
                                  ? "Available"
                                  : "Not Available"}
                              </p>
                            </p>
                          </li>
                        ))}
                    </ul>
                  </div>
                  {/* ----------------------------button booking------------- */}
                  <div className="mt-3 p-0">
                    <Link to="/book">
                      <button
                        className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-dark="true"
                      >
                        Book Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomRent;
