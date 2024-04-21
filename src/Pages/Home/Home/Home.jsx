import CityDestinations from "../../CityTrending/CityDestinations";
import Cover from "../Cover/Cover";
import Faq from "../FAQ/faq";

import RoomRent from "../Roomrent/RoomRent";

const Home = () => {
  return (
    <div>
      <div>
        <Cover></Cover>
      </div>
      <hr className="bg-slate-500 border-spacing-3" />
      <div>
        <RoomRent></RoomRent>
      </div>
      <div>
        <CityDestinations></CityDestinations>
      </div>
      <div className="mt-3 mb-3">
        <Faq></Faq>
      </div>
    </div>
  );
};

export default Home;
