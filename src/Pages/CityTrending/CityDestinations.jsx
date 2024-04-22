import kasmir from "../../assets/images/kasmir.jpg";
import Australia from "../../assets/images/in-Austria.jpg";
import iran from "../../assets/images/iran.jpg";
import { Link } from "react-router-dom";

const CityDestinations = () => {
  return (
    <div>
      <div className="text-center m-4 justify-center">
        <h1 className="text-3xl text-center md:text-4xl font-medium mb-2">
          {" "}
          Trending Destinations
        </h1>
        <h1 className="text-xl">Most popular choices for room</h1>
      </div>
      {/* ----------trnding 1------- */}

      <div className="grid grid-cols-2">
        {/* ------kokata ---------*/}
        <Link to="/cityroom">
          <div className="da relative flex  flex-col justify-center overflow-hidden ">
            <div className="group relative m-0 flex h-72 w-full rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
              <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                <img
                  src="https://cf.bstatic.com/xdata/images/city/600x600/684571.jpg?k=2166dfd3192f12497a35d57434f14f2f9175eca9e2698b04eeb827064c3c9d4d&o="
                  className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                  alt=""
                />
              </div>
              <div className="absolute flex gap-2 bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                <h1 className="font-serif  p-1 text-3xl font-extrabold text-white shadow-xl">
                  Kolkata
                </h1>

                <svg width="75" height="50" xmlns="http://www.w3.org/2000/svg">
                  <rect width="75" height="16.67" fill="#FF9933" />

                  <rect y="16.67" width="75" height="16.66" fill="#FFFFFF" />

                  <rect y="33.33" width="75" height="16.67" fill="#138808" />

                  <circle cx="37.5" cy="25" r="5.5" fill="#000080" />
                  <path
                    d="M 37.5 19.5
             A 5.5 5.5 0 0 1 37.5 30.5
             A 5.5 5.5 0 0 1 37.5 19.5
             z
             M 37.5 22
             A 2.5 2.5 0 0 0 37.5 27
             A 2.5 2.5 0 0 0 37.5 22
             z"
                    fill="#FFFFFF"
                  />
                </svg>
              </div>
            </div>
          </div>
        </Link>

        {/* --------------bd ------------- */}
        <div className=" relative flex  flex-col justify-center overflow-hidden ">
          <div className="group relative m-0 flex h-72 w-full rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
            <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
              <img
                src="https://cf.bstatic.com/xdata/images/city/600x600/666853.jpg?k=b2212159e829c00b8b19af72b6211b25325d70811829e2eb4ef1045f8a568be5&o="
                className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                alt=""
              />
            </div>
            <div className="absolute flex gap-2 bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
              <h1 className="font-serif  opacity-100 p-1 text-3xl font-extrabold text-white shadow-xl">
                Coxes Brazar
              </h1>

              <svg width="75" height="50" xmlns="http://www.w3.org/2000/svg">
                <rect width="75" height="50" fill="#006A4E" />

                <circle cx="37.5" cy="25" r="12" fill="#E31E25" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* -------------- tranding -2----------*/}

      <div className="grid gap-4 p-2 grid-cols-3">
        {/* ------kasmir---------- */}
        <div className="da relative flex flex-col justify-center overflow-hidden ">
          <div className="group relative m-0 flex h-72 w-full rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
            <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
              <img
                src={kasmir}
                className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                alt=""
              />
            </div>
            <div className="absolute gap-2 flex bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
              <h1 className="font-serif  opacity-100 p-1 text-3xl font-extrabold text-white shadow-xl">
                kasmir
              </h1>
              <svg width="75" height="50" xmlns="http://www.w3.org/2000/svg">
                <rect width="75" height="16.67" fill="#FF9933" />

                <rect y="16.67" width="75" height="16.66" fill="#FFFFFF" />

                <rect y="33.33" width="75" height="16.67" fill="#138808" />

                <circle cx="37.5" cy="25" r="5.5" fill="#000080" />
                <path
                  d="M 37.5 19.5
             A 5.5 5.5 0 0 1 37.5 30.5
             A 5.5 5.5 0 0 1 37.5 19.5
             z
             M 37.5 22
             A 2.5 2.5 0 0 0 37.5 27
             A 2.5 2.5 0 0 0 37.5 22
             z"
                  fill="#FFFFFF"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* --------------2 australia------------- */}

        <div className="da relative  flex  flex-col justify-center overflow-hidden ">
          <div className="group relative m-0 flex h-72 w-full rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
            <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
              <img
                src={Australia}
                className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                alt=""
              />
            </div>
            <div className="absolute flex gap-2 bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
              <h1 className="font-serif text-3xl font-bold text-white shadow-xl">
                Australia
              </h1>
              <svg width="75" height="50" xmlns="http://www.w3.org/2000/svg">
                <rect width="75" height="50" fill="#0000FF" />

                <rect x="25" y="10" width="5" height="30" fill="#FF0000" />
                <rect x="45" y="10" width="5" height="30" fill="#FF0000" />

                <rect x="20" y="25" width="35" height="5" fill="#FF0000" />
                <rect x="20" y="35" width="35" height="5" fill="#FF0000" />

                <polygon
                  points="33.5,15 36.5,15 37.5,12 38.5,15 41.5,15 39,17 40,20 37.5,18.5 35,20 36,17 33.5,15"
                  fill="#FFFFFF"
                />

                <polygon
                  points="31.5,30 34,26.5 37,26.5 35,30 37,33.5 34,33.5 31.5,30"
                  fill="#FFFFFF"
                />

                <polygon
                  points="36.5,25 39.5,25 40.5,22 41.5,25 44.5,25 42,27 43,30 40.5,28.5 38,30 39,27 36.5,25"
                  fill="#FFFFFF"
                />

                <polygon
                  points="31.5,20 34,16.5 37,16.5 35,20 37,23.5 34,23.5 31.5,20"
                  fill="#FFFFFF"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* -------------3 Iran----------- */}

        <div className=" relative  flex  flex-col justify-center overflow-hidden ">
          <div className="group relative m-0 flex h-72 w-full rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
            <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
              <img
                src={iran}
                className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
                alt=""
              />
            </div>
            <div className="absolute flex gap-2 bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
              <h1 className="font-serif text-3xl font-bold text-white shadow-xl">
                Iran
              </h1>
              <svg width="75" height="50" xmlns="http://www.w3.org/2000/svg">
                <rect width="75" height="50" fill="#008000" />

                <rect y="20" width="75" height="10" fill="#FFFFFF" />

                <rect x="0" y="0" width="10" height="50" fill="#FF0000" />

                <rect x="65" y="0" width="10" height="50" fill="#FF0000" />

                <text
                  x="25"
                  y="35"
                  fontFamily="Arial"
                  fontSize="14"
                  fill="#FFFFFF"
                >
                  الله
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityDestinations;
