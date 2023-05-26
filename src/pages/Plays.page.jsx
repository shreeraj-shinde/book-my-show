import React from "react";
import DefaultLayout from "../Layout/Default.Layout";
import Poster from "../Poster/Poster.Component";
import PlayFilter from "../Components/PlayFilters/PlayFilter.Component";

const Playspage = () => {
  return (
    <>
      <div className="container mx-auto px-4 my-10">
        <div className="w-full flex flex-col-reverse lg:flex lg:flex-row-reverse gap-4 ">
          <div className="lg:w-3/4 p-4 bg-white rounded">
            <h2 className="text-2xl font-bold mb-4">Plays in Pune</h2>
            <div className="flex flex-wrap">
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-abhangawari-by-mahesh-kale-pune-0-2023-5-17-t-11-10-29.jpg"
                  title=" Abhangawari by Mahesh Kale"
                  subtitle=" Retro | Marathi | All age groups | 2hrs 30mins"
                />
              </div>

              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-emiway-bantai-live-in-concert-0-2023-5-10-t-4-11-30.jpg"
                  title=" Abhangawari by Mahesh Kale"
                  subtitle=" Retro | Marathi | All age groups | 2hrs 30mins"
                />
              </div>

              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-abhangawari-by-mahesh-kale-pune-0-2023-5-17-t-11-10-29.jpg"
                  title=" Abhangawari by Mahesh Kale"
                  subtitle=" Retro | Marathi | All age groups | 2hrs 30mins"
                />
              </div>

              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-unfiltered-comedy-show-balewadi-0-2023-2-7-t-4-37-37.jpg"
                  title=" Unfiltered Comedy Show @ Balewadi"
                  subtitle=" Retro | Marathi | All age groups | 2hrs 30mins"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-1/4 p-4 bg-white rounded ">
            <h2 className="text-2xl font-bold mb-4">Filter</h2>
            <div className="">
              <PlayFilter
                title="Date"
                tags={["Today", "Tomorrow", "This Weekend"]}
              />
              <PlayFilter
                title="Language"
                tags={["English", "Hindi", "Marathi"]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayout(Playspage);
