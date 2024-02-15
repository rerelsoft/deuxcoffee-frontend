export const metadata = {
  title: "Pemesanan",
};

import React from "react";
import axios from "axios";
import Link from "next/link";

type Pemesanan = {
  id: number;
  menu: any;
  jenis: any;
};

type Menu = {
  id: number;
  nama_menu: any;
};

type Jenis = {
  id: number;
  nama_jenis: any;
};

const getJenis = async () => {
  const res = await axios.get("http://127.0.0.1:8000/api/jenis");

  return res.data.data;
};

const getMenu = async () => {
  const res = await axios.get("http://127.0.0.1:8000/api/menu");

  return res.data.data;
};

const getPemesanan = async () => {
  const res = await axios.get("http://127.0.0.1:8000/api/pemesanan");

  return res.data.data;
};

const Pemesanan = async () => {
  const pemesanan: Pemesanan[] = await getPemesanan();
  const menu: Menu[] = await getMenu();
  const jenis: Jenis[] = await getJenis();

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap -mx-2">
        {/* Pemesanan */}
        <div className="w-full md:w-1/2 px-2">
          <div className="text-black p-4">
            <label className="label font-bold">Nama Pemesan</label>
            <input
              type="text"
              className="input w-full input-bordered"
              placeholder="Nama Pemesan"
            />
          </div>


          <div className="px-3">
          {jenis.map((jenis, index) => ( 
                   <div key={index}>
                  <label className="label font-bold">
                    Jenis
                  </label>
                  <div></div>
                    </div>
              ))}
            <ul className="menu menu-horizontal rounded-box p-3 bg-base-200">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>

          {/* menu minuman
          {menu.map((menu, index) => (
            <div key={index} className="w-full md:w-1/2 px-2 rounded-box">
              <ul>
                <li className="bg-blue-500 text-white p-6">
                  {" "}
                  {menu.nama_menu}
                  <ul>
                    <li className="bg-red-500 text-white p-5"></li>
                  </ul>
                </li>
              </ul>
            </div>
          ))} */}
        </div>
        <div className="w-full md:w-1/2 px-2">
          <div className="bg-green-500 text-white p-4">Column 2 Content</div>
        </div>
      </div>
    </div>
  );
};

export default Pemesanan;
