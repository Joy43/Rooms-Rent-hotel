import axios from "axios";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import useAuth from "../../../Hook/useAuth";
import useFrom from "../../../Hook/useCheckfrom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const CheckOutFrom = () => {
  const [setPreviewImage] = useState("");
  const [formData, setFormData] = useState({
    emailAddress: "",
    name: "",
    keyWord: "",
    designation: "",

    date: "",
    textarea: "",
    imageUrl: "display_url",
  });

  const { user } = useAuth();
  const AxiosChexkfrom = useFrom();

  useEffect(() => {
    if (user) {
      setFormData((prevData) => ({
        ...prevData,
        emailAddress: user.email || "",
        name: user.displayName || "",
      }));
    }
  }, [user]);

  const handleInputChange = async (e) => {
    const { id, value, files } = e.target;

    if (id === "fileUpload" && files.length > 0) {
      const file = files[0];
      const formData = new FormData();
      formData.append("image", file);
      formData.append("key", image_hosting_key);

      try {
        const response = await axios.post(image_hosting_api, formData);
        const imageUrl = response.data.data.url;

        setFormData((prevData) => ({
          ...prevData,
          [id]: imageUrl,
        }));

        setPreviewImage(imageUrl);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await AxiosChexkfrom.post("/bookingFrom", formData);

      if (response.status === 200) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Upload successful",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div>
      <div className="max-w-4xl  m-4 p-6 mx-auto  bg-indigo-600 rounded-md shadow-md ">
        <form onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-white dark:text-gray-200">
                Email Address
              </label>
              <input
                id="emailAddress"
                type="email"
                placeholder="Email Address"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                value={formData.emailAddress}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="text-white dark:text-gray-200">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="text-white dark:text-gray-200">Adress</label>
              <input
                id="keyWord"
                type="text"
                placeholder="adress"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                value={formData.keyWord}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="text-white dark:text-gray-200">
                select Type of Room
              </label>
              <select
                id="designation"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                value={formData.designation}
                onChange={handleInputChange}
              >
                <option value="">Select Room type</option>
                <option value="Lower">Single</option>
                <option value="RemoteWorker">Double</option>
                <option value="Freelancer">suite</option>
              </select>
            </div>

            <div>
              <label className="text-white dark:text-gray-200">Date</label>
              <input
                id="date"
                type="date"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                value={formData.date}
                onChange={handleInputChange}
              />
            </div>
            {/* -----------text area------- */}
            <div>
              <label className="text-white dark:text-gray-200">
                Description
              </label>
              <textarea
                id="textarea"
                placeholder="Text Area"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                value={formData.textarea}
                onChange={handleInputChange}
              ></textarea>
            </div>
          </div>
          {/* -----------image upload------- */}

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className=" px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOutFrom;
