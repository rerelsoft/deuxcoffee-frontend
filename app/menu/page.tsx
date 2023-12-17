export const metadata = {
  title: "Menu",
};

import axios from "axios";
import Link from "next/link";
import React from "react";

import AddMenu from "./addMenu";
import DeleteMenu from "./deleteMenu";
import EditMenu from "./editMenu";

type Menu = {
  id: number;
  nama_menu: string;
  harga: number;
  deskripsi: string;
  jenis_id: number;
};

const getMenu = async () => {
  const res = await axios.get("http://127.0.0.1:8000/api/menu");

  return res.data.data;
};

const Menu = async () => {
  const menu: Menu[] = await getMenu();

  return (
    <div className="py-10 px-10">
      <div className="py-10 px-10">
        <AddMenu />
      </div>

      <div className="py-10 px-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Nama MEnu</th>
                <th>Harga</th>
                <th>Deskripsi</th>
                <th>Jenis Id</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((menu, index) => (
                <tr
                  key={menu.id}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                >
                  <td>{index + 1}</td>
                  <td>{menu.nama_menu}</td>
                  <td>{menu.harga}</td>
                  <td>{menu.deskripsi}</td>
                  <td>{menu.jenis_id}</td>
                  <td className="flex">
                  <div className="mr-1">
                      <EditMenu {...menu} />
                    </div>
                    <DeleteMenu {...menu} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Menu;
