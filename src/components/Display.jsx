import React, { useEffect, useState} from "react";

function Display(props) {

  const dataToShow = props.dataGif;
  
  return (
    <div className="grid place-items-center min-h-screen bg-black">

    <div className="p-4 max-w-5xl grid gap-4 grid-cols-2 md:grid-cols-4">
     
      {
        dataToShow == '' ? <h1 className="font-extrabold col-span-2 text-white text-5xl">SEARCH FOR A GIF</h1> :
        dataToShow.map((item) => {
          return (
            <div className="">
            <div className="h-30 md:h-auto md:square" key={item.id}>
              <img className="rounded-xl" src={item.images.fixed_height.url} alt="GIF image" />
            </div>
              </div>
          );
        })
      }
      </div>
    </div>
  );
}

export default Display;
