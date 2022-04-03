import React from "react";

const ListItem = (props) => {
  return (
    <div className="md:flex justify-between items-center border-b border-gray-200 py-4 px-2 mt-5 md:mt-0">
      {/* Image and Book title */}
      <div className="w-full md:w-3/5 flex justify-start items-start">
        <img
          src="https://cdn.gramedia.com/uploads/items/9786230029806_Demon_Slayer_8.jpg"
          className="w-20 mr-3"
          alt="img-cover"
        />
        <div className="w-full md:w-auto">
          <h3 className="text-sm text-gray-500 mt-3 md:mt-0">Yayak Yogi</h3>
          <h1 className="text-xl text-gray-900 font-bold">Judul Buku</h1>
          <div className="flex justify-between md:hidden mt-2">
            <div>
              <span className="text-xs">Rp 163.500 x 1</span>
            </div>
            <div className="font-semibold text-sm">Rp 163.500</div>
          </div>
          {props.isHistory && (
            <div className="block md:hidden w-full">
              <span className="text-gray-600 text-xs text-right block mt-2">
                Senin, 04 - Mar -2022
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="hidden md:block">
        <p>Rp 163.500</p>
      </div>
      <div className="hidden md:block">
        <p>x 1</p>
      </div>
      <div className="hidden md:block">
        <p>Rp 163.500</p>
      </div>
      {props.isHistory && (
        <div className="hidden md:block w-40">
          <p>Senin, 04 - Mar -2022</p>
        </div>
      )}
    </div>
  );
};

export default ListItem;
