import React from "react";
import Bookcard from "elements/Bookcard";

const ListBookSection = (props) => {
  return (
    <div
      className="2xl:px-72 xl:px-56 lg:px-20 md:px-10 px-2 my-10"
      ref={props.refListBookSection}
    >
      <h1 className="text-xl md:text-2xl font-normal mb-5">
        Recommendations for you
      </h1>
      <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 grid-cols-2 gap-4">
        <Bookcard
          imageUrl=" https://cdn.gramedia.com/uploads/items/9786024246945_Laut-Bercerita__w150_hauto.jpg"
          author="Yayak Yogi"
          title="title books"
          price={25000}
        />
        <Bookcard
          imageUrl=" https://cdn.gramedia.com/uploads/items/9786024246945_Laut-Bercerita__w150_hauto.jpg"
          author="Yayak Yogi"
          title="title books"
          price={25000}
        />
        <Bookcard
          imageUrl=" https://cdn.gramedia.com/uploads/items/9786024246945_Laut-Bercerita__w150_hauto.jpg"
          author="Yayak Yogi"
          title="title books"
          price={25000}
        />
        <Bookcard
          imageUrl=" https://cdn.gramedia.com/uploads/items/9786024246945_Laut-Bercerita__w150_hauto.jpg"
          author="Yayak Yogi"
          title="title books"
          price={25000}
        />
        <Bookcard
          imageUrl=" https://cdn.gramedia.com/uploads/items/9786024246945_Laut-Bercerita__w150_hauto.jpg"
          author="Yayak Yogi"
          title="title books"
          price={25000}
        />
        <Bookcard
          imageUrl=" https://cdn.gramedia.com/uploads/items/9786024246945_Laut-Bercerita__w150_hauto.jpg"
          author="Yayak Yogi"
          title="title books"
          price={25000}
        />
        <Bookcard
          imageUrl=" https://cdn.gramedia.com/uploads/items/9786024246945_Laut-Bercerita__w150_hauto.jpg"
          author="Yayak Yogi"
          title="title books"
          price={25000}
        />
      </div>
    </div>
  );
};

export default ListBookSection;
