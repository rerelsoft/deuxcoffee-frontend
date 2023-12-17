"use client";
import React, { SyntheticEvent, use } from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

type Pelanggan = {
  id: number;
  nama: string;
  email: string;
  nomor_telepon: number;
  alamat: string;
};

const API_URL = "http://127.0.0.1:8000/api";

const DeletePelanggan = (pelanggan: Pelanggan) => {
  const [modal, setModal] = useState(false);
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [nomor_telepon, setNomorTelepon] = useState("");
  const [alamat, setAlamat] = useState("");
  const [isMutating, setIsMutating] = useState(false);
  const router = useRouter();
  function handleChange() {
    setModal(!modal);
  }

  const handleDelete = async (pelangganId: Number) => {
    setIsMutating(true);
    let params = { id: pelangganId };
    let endpoint = `${API_URL}/pelanggan/${pelangganId}`;
    const data = {
      nama: nama,
      email: email,
      nomor_telepon: nomor_telepon,
      alamat: alamat
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
            U want to delete {pelanggan.nama}?
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
                onClick={() => handleDelete(pelanggan.id)}
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

export default DeletePelanggan;
