export const metadata = {
  title: "Meja",
};

import axios from "axios";
import Link from "next/link";
import React from "react";

import AddMeja from "./addMeja";
import DeleteMeja from "./deleteMeja";
import EditMeja from "./editMeja";

type Meja = {
  id: number;
  nomor_meja: number;
  kapasitas: number;
  status: string;
};

const getMeja = async () => {
  const res = await axios.get("http://127.0.0.1:8000/api/meja");

  return res.data.data;
};

const Meja = async () => {
  const meja: Meja[] = await getMeja();

  return (
    <div className="py-10 px-10">
      <div className="py-10 px-10">
        <AddMeja />
      </div>

      <div className="py-10 px-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Nomor Meja</th>
                <th>Kapasitas</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {meja.map((meja, index) => (
                <tr
                  key={meja.id}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                >
                  <td>{index + 1}</td>
                  <td>{meja.nomor_meja}</td>
                  <td>{meja.kapasitas}</td>
                  <td>{meja.status}</td>
                  <td className="flex">
                  <div className="mr-1">
                      <EditMeja {...meja} />
                    </div>
                    <DeleteMeja {...meja} />
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

export default Meja;
