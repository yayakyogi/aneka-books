import React from "react";
import Bookcard from "elements/Bookcard";

const ListBookSection = (props) => {
  return (
    <div
      className="2xl:px-72 xl:px-56 lg:px-20 md:px-10 px-2 my-10"
      ref={props.refListBookSection}
    >
      <h1 className="text-xl md:text-2xl font-normal mb-5">
        {props.isPageSearch ? (
          <>
            <span>Show browsing data for "</span>
            <span className="font-semibold">{`${props.search}`}"</span>
          </>
        ) : (
          "Recommendations for you"
        )}
      </h1>
      <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 grid-cols-2 gap-4">
        {props.data?.items?.map((item, index) => {
          return (
            <Bookcard
              id={item.id}
              key={`bookcard-${index}`}
              imageUrl={item.volumeInfo?.imageLinks?.thumbnail}
              title={item.volumeInfo?.title}
              price={25000}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ListBookSection;
