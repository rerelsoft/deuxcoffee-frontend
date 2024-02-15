export const metadata = {
  title: "Karyawan",
};

import axios from "axios";
import Link from "next/link";
import React from "react";

import AddKaryawan from "./addKaryawan";
import DeleteKaryawan from "./deleteKaryawan";
import EditKaryawan from "./editKaryawan";

type Karyawan = {
  id: number;
  nip: number;
  nik: number;
  nama: string;
  jenis_kelamin: string;
  tempat_lahir: string;
  tanggal_lahir: number;
  telpon: number;
  agama: string;
  status_nikah: string;
  alamat: string;
  golongan_id: number;
  foto: string;
};

const getKaryawan= async () => {
  const res = await axios.get("http://127.0.0.1:8000/api/karyawan");

  return res.data.data;
};

const Karyawan = async () => {
  const karyawan: Karyawan[] = await getKaryawan();

  return (
    <div className="py-10 px-10">
      <div className="py-10 px-10">
        <AddKaryawan />
      </div>

      <div className="py-10 px-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Nip</th>
                <th>Nik</th>
                <th>Nama</th>
                <th>Jenis Kelamin</th>
                <th>Tempat Lahir</th>
                <th>Tanggal Lahir</th>
                <th>Telephone</th>
                <th>Agama</th>
                <th>Status Nikah</th>
                <th>Alamat</th>
                <th>Golongan Id</th>
                <th>Foto</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {karyawan.map((karyawan, index) => (
                <tr
                  key={karyawan.id}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                >
                  <td>{index + 1}</td>
                  <td>{karyawan.nip}</td>
                  <td>{karyawan.nik}</td>
                  <td>{karyawan.nama}</td>
                  <td>{karyawan.jenis_kelamin}</td>
                  <td>{karyawan.tempat_lahir}</td>
                  <td>{karyawan.tanggal_lahir}</td>
                  <td>{karyawan.telpon}</td>
                  <td>{karyawan.agama}</td>
                  <td>{karyawan.status_nikah}</td>
                  <td>{karyawan.alamat}</td>
                  <td>{karyawan.golongan_id}</td>
                  <td>{karyawan.foto}</td>
                  <td className="flex">
                  <div className="mr-1">
                      <EditKaryawan {...karyawan} />
                    </div>
                    <DeleteKaryawan {...karyawan} />
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

export default Karyawan;
