"use client";
import React, { SyntheticEvent, use } from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

type Jenis = {
    id: number;
    nama_jenis: string;
    kategori_id: number;
  };

const API_URL = "http://127.0.0.1:8000/api";

const EditJenis = (jenis: Jenis) => {
    const [modal, setModal] = useState(false);
    const [nama_jenis, setNamaJenis] = useState(jenis.nama_jenis);
    const [kategori_id, setKategoriId] = useState(jenis.kategori_id);
    const [isMutating, setIsMutating] = useState(false);
    const router = useRouter();
    function handleChange() {
        setModal(!modal);
      }

      const handleUpdate = async (e: SyntheticEvent) => {
        e.preventDefault();
        setIsMutating(true);
    
        let endpoint = `${API_URL}/jenis/${jenis.id}`;
        const data = { 
            nama_jenis: nama_jenis,
            kategori_id: kategori_id  
        
        };
        await axios.patch(endpoint, data);
        setNamaJenis("");
        setKategoriId(Number);
        router.refresh();
        setModal(false);
        setIsMutating(false);
      };

  return (
    <div>
      <button className="btn btn-neutral" onClick={handleChange}>
        Edit
      </button>

      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />

      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit Jenis</h3>
          <form onSubmit={handleUpdate}>
            <div className="form-control">
              <label className="label font-bold">Nama Jenis</label>
              <input
                type="text"
                value={nama_jenis}
                onChange={(e) => setNamaJenis(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Nama Jenis"
              />
            </div>

            <div className="form-control">
              <label className="label font-bold">Kategori Id</label>
              <input
                type="number"
                value={kategori_id}
                onChange={(e) => setKategoriId(Number(e.target.value))}
                className="input w-full input-bordered"
                placeholder="Kategori Id"
              />
            </div>

            <div className="modal-action">
              <button
                type="button"
                className="btn btn-neutral"
                onClick={handleChange}
              >
                Close
              </button>
              {!isMutating ? (
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              ) : (
                <button type="button" className="btn loading">
                  Updating...
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditJenis