import React from "react";
import parse from "html-react-parser";

const BookDescription = (props) => {
  const { data } = props;

  function DetailBookSection(props) {
    return (
      <div className="w-60">
        <h3 className="font-medium text-sm">{props.label}</h3>
        <h5 className="text-md font-normal text-gray-500">{props.value}</h5>
      </div>
    );
  }

  return (
    <div className="w-full md:w-80 lg:w-1/2">
      <h3 className="text-md text-gray-500 mt-3 md:mt-0">
        {data.volumeInfo.authors}
      </h3>
      <h1 className="text-3xl text-gray-900 font-bold">
        {data.volumeInfo.title}
      </h1>
      <h4 className="font-medium mt-3">Description</h4>
      <p className="text-gray-500">
        {data.volumeInfo.description === undefined
          ? "Description not available"
          : parse(data.volumeInfo.description)}
      </p>
      <h4 className="font-medium mt-5 mb-2">Detail</h4>
      <div className="flex justify-start items-center mt-3">
        <DetailBookSection
          label="Page Count"
          value={data.volumeInfo.pageCount}
        />
        <DetailBookSection
          label="Publisher"
          value={data.volumeInfo.publisher}
        />
      </div>
      <div className="flex justify-start items-center mt-3">
        <DetailBookSection
          label="Published Date"
          value={data.volumeInfo.publishedDate}
        />
        <DetailBookSection label="Language" value={data.volumeInfo.language} />
      </div>
      <h1
        className={`font-medium text-sm ${
          data.volumeInfo.industryIdentifiers ? "my-3" : "mt-3"
        }`}
      >
        ISBN
      </h1>
      {data.volumeInfo.industryIdentifiers == null && (
        <p className="text-gray-500">not found</p>
      )}
      {data.volumeInfo.industryIdentifiers?.map((item, index) => {
        return (
          <DetailBookSection
            key={index}
            label={item.type}
            value={item.identifier}
          />
        );
      })}
    </div>
  );
};

export default BookDescription;
