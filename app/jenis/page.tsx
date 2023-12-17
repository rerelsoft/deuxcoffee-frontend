export const metadata = {
  title: "Jenis",
};

import axios from "axios";
import Link from "next/link";
import React from "react";

import AddJenis from "./addJenis";
import DeleteJenis from "./deleteJenis";
import EditJenis from "./editJenis";

type Jenis = {
  id: number;
  nama_jenis: string;
  kategori_id: number;
};

const getJenis = async () => {
  const res = await axios.get("http://127.0.0.1:8000/api/jenis");

  return res.data.data;
};

const Jenis = async () => {
  const jenis: Jenis[] = await getJenis();

  return (
    <div className="py-10 px-10">
      <div className="py-10 px-10">
        <AddJenis />
      </div>

      <div className="py-10 px-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Nama Jenis</th>
                <th>Kategori Id</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {jenis.map((jenis, index) => (
                <tr
                  key={jenis.id}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                >
                  <td>{index + 1}</td>
                  <td>{jenis.nama_jenis}</td>
                  <td>{jenis.kategori_id}</td>
                  <td className="flex">
                    <div className="mr-1">
                      <EditJenis {...jenis} />
                    </div>
                    <DeleteJenis {...jenis} />
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

export default Jenis;
