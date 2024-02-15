"use client";
import React, { SyntheticEvent, use } from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

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

const API_URL = "http://127.0.0.1:8000/api";

const DeleteKaryawan = (karyawan: Karyawan) => {
  const [modal, setModal] = useState(false);
  const [nip, setNip] = useState("");
  const [nik, setNik] = useState("");
  const [nama, setNama] = useState("");
  const [jenis_kelamin, setJenisKelamin] = useState("");
  const [tempat_lahir, setTempatLahir] = useState("");
  const [tanggal_lahir, setTanggalLahir] = useState("");
  const [telpon, setTelpon] = useState("");
  const [agama, setAgama] = useState("");
  const [status_nikah, setStatusNikah] = useState("");
  const [alamat, setAlamat] = useState("");
  const [golongan_id, setGolonganId] = useState("");
  const [foto, setFoto] = useState("");
  const [isMutating, setIsMutating] = useState(false);
  const router = useRouter();
  function handleChange() {
    setModal(!modal);
  }

  const handleDelete = async (karyawanId: Number) => {
    setIsMutating(true);
    let params = { id: karyawanId };
    let endpoint = `${API_URL}/karyawan/${karyawanId}`;
    const data = {
      nip: nip,
      nik: nik,
      nama: nama,
      jenis_kelamin: jenis_kelamin,
      tempat_lahir: tempat_lahir,
      tanggal_lahir: tanggal_lahir,
      telpon: telpon,
      agama: agama,
      status_nikah: status_nikah,
      alamat: alamat,
      golongan_id: golongan_id,
      foto: foto,
    };
    await axios.delete(endpoint);

    router.refresh();
    setModal(false);
    setIsMutating(false);
  };

  return (
    <div>
      <button className="btn btn-error" onClick={handleChange}>
        Delete
      </button>

      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />

      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            {" "}
            U want to delete {karyawan.nama}?
          </h3>

          <div className="modal-action">
            <button
              type="button"
              className="btn btn-neutral"
              onClick={handleChange}
            >
              Close
            </button>
            {!isMutating ? (
              <button
                type="button"
                className="btn btn-error"
                onClick={() => handleDelete(karyawan.id)}
              >
                Delete
              </button>
            ) : (
              <button type="button" className="btn loading">
                Deleting...
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteKaryawan;
