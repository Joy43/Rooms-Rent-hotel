import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CityRooms = () => {
  const [categoryroom, setcategoryroom] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/rooms")
      .then((res) => res.json())
      .then((data) => setcategoryroom(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  console.log(categoryroom);
  return (
    <div>
      <div className="lg:grid grid-cols-1">
        {categoryroom.map((rooms, _id) => (
          <div key={_id}>
            <div className="mx-auto  h-screen flex items-center justify-center px-8">
              <div className="flex flex-col w-full bg-white rounded shadow-lg sm:w-3/4 md:w-1/2 lg:w-3/5">
                <div>
                  <img
                    className="w-full h-64 bg-top bg-cover rounded-t"
                    src={rooms.image}
                    alt=""
                  />
                </div>
                <div className="flex flex-col w-full md:flex-row">
                  <div className="flex flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase shadow-2xl  bg-slate-300 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
                    <div className="md:text-lg">{rooms.from}</div>
                    <div className="md:text-xl bg-red-200">From</div>
                    <div className="md:text-xl">{rooms.to}</div>
                  </div>
                  <div className="p-4 font-normal text-gray-800 md:w-3/4">
                    <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800">
                      {rooms.title}
                    </h1>
                    <p className="leading-normal">{rooms.description}</p>
                    <div className="flex flex-row items-center mt-4 text-gray-700">
                      <div className="w-1/2">{rooms.location}</div>
                      <div className="w-1/2 flex justify-end">
                        <img src={rooms.host.image} alt="" className="w-8" />
                      </div>
                    </div>
                    <div className="mt-3 p-0">
                      <Link to="/book">
                        <button
                          className="block w-full select-none rounded-lg bg-black py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                          data-ripple-dark="true"
                        >
                          Book Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityRooms;
