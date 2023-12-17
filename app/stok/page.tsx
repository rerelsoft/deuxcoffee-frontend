export const metadata = {
  title: "Stok",
};

import axios from "axios";
import Link from "next/link";
import React from "react";

import AddStok from "./addStok";
import DeleteStok from "./deleteStok";
import EditStok from "./editStok";

type Stok = {
  id: number;
  menu_id: number;
  jumlah: number;
};

const getStok = async () => {
  const res = await axios.get("http://127.0.0.1:8000/api/stok");

  return res.data.data;
};

const Stok = async () => {
  const stok: Stok[] = await getStok();

  return (
    <div className="py-10 px-10">
      <div className="py-10 px-10">
        <AddStok />
      </div>

      <div className="py-10 px-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Menu Id</th>
                <th>Jumlah</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {stok.map((stok, index) => (
                <tr
                  key={stok.id}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                >
                  <td>{index + 1}</td>
                  <td>{stok.menu_id}</td>
                  <td>{stok.jumlah}</td>
                  <td className="flex">
                  <div className="mr-1">
                      <EditStok {...stok} />
                    </div>
                    <DeleteStok {...stok} />
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

export default Stok;
