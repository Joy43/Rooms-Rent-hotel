import { useEffect, useState } from "react";
import { FaSms, FaPhone } from "react-icons/fa";

const RoomRent = () => {
  const [hotelrent, sethotelrent] = useState([]);

  useEffect(() => {
    // Assuming you have a Hotel.json file with the provided data
    fetch("Hotel.json")
      .then((res) => res.json())
      .then((data) => sethotelrent(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {hotelrent.map((hotel) => (
        <div key={hotel.hotel_id} className="relative mx-auto w-full">
          <a
            href="#"
            className="relative inline-block w-full transform transition-transform duration-300 ease-in-out hover:-translate-y-2"
          >
            <div className="rounded-lg  p-4 shadow">
              <div className="relative flex h-52 justify-center overflow-hidden rounded-lg">
                <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                  <div className="absolute inset-0 bg-black bg-opacity-80">
                    <img src={hotel.image_url} alt={hotel.name} />
                  </div>
                </div>

                <div className="absolute bottom-0 left-5 mb-3 flex">
                  <p className="flex items-center font-medium text-white shadow-sm">
                    <FaSms className="mr-2 text-xl text-white" />
                    10
                  </p>
                </div>
                <div className="absolute bottom-0 right-5 mb-3 flex">
                  <p className="flex items-center font-medium text-gray-800">
                    <FaPhone className="mr-2 text-2xl text-white" />
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
                <h3 className="text-xl font-medium text-gray-800">Rooms:</h3>
                <ul>
                  {hotel.rooms.map((room) => (
                    <li key={room.room_id}>
                      <p>Type: {room.type}</p>
                      <p>Price: {room.price}</p>
                      <p>
                        Availability:{" "}
                        {room.availability ? "Available" : "Not Available"}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default RoomRent;
