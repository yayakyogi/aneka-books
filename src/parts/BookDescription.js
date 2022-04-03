import React from "react";

const BookDescription = (props) => {
  const { data } = props;

  function DetailBookSection(props) {
    return (
      <div className="w-60">
        <h3 className="font-medium text-sm">{props.label}</h3>
        <h5 className="text-lg font-normal text-gray-500">{props.value}</h5>
      </div>
    );
  }

  return (
    <div className="w-full md:w-80 lg:w-1/2">
      <h3 className="text-md text-gray-500 mt-3 md:mt-0">Yayak Yogi</h3>
      <h1 className="text-3xl text-gray-900 font-bold">Judul Buku</h1>
      <h4 className="font-medium mt-3">Description</h4>
      <p className="text-gray-500">
        Bagaimana akhir dari pertarungan antara "Iblis Penidur" Enmu melawan
        Tanjiro yang melancarkan jurus pamungkas Hinokami Kagura `Hekira no
        Ten`!? Namun, tiba-tiba saja sosok baru muncul di hadapan Tanjiro!
        Enbashira Kyojuro Rengoku pun beraksi. Seperti apakah takdir yang
        terpampang di hadapan Tanjiro setelah mendengar kata-kata yang diucapkan
        orang
      </p>
      <h4 className="font-medium mt-5 mb-2">Detail</h4>
      <div className="flex justify-start items-center">
        <DetailBookSection label="Jumlah Halaman" value="200" />
        <DetailBookSection label="Penerbit" value="Execmedia" />
      </div>
      <div className="flex justify-start items-center">
        <DetailBookSection label="Tanggal Terbit" value="24 Jan 2022" />
        <DetailBookSection label="Berat" value="0.2 kg" />
      </div>
      <div className="flex justify-start items-center">
        <DetailBookSection label="ISBN" value="1982912890" />
        <DetailBookSection label="Lebar" value="12.0 cm" />
      </div>
      <div className="flex justify-start items-center">
        <DetailBookSection label="Bahasa" value="Indonesia" />
        <DetailBookSection label="Panjang" value="18.0 cm" />
      </div>
    </div>
  );
};

export default BookDescription;
