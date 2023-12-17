"use client";
import React, { SyntheticEvent, use } from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

type Menu = {
  id: number;
  nama_menu: string;
  harga: number;
  deskripsi: string;
  jenis_id: number;
};

const API_URL = "http://127.0.0.1:8000/api";

const EditMenu = (menu: Menu) => {
    const [modal, setModal] = useState(false);
    const [nama_menu, setNamaMenu] = useState(menu.nama_menu);
    const [harga, setHarga] = useState(menu.harga);
    const [deskripsi, setDeskripsi] = useState(menu.deskripsi);
    const [jenis_id, setJenisId] = useState(menu.jenis_id);
    const [isMutating, setIsMutating] = useState(false);
    const router = useRouter();
    function handleChange() {
        setModal(!modal);
      }

      const handleUpdate = async (e: SyntheticEvent) => {
        e.preventDefault();
        setIsMutating(true);
    
        let endpoint = `${API_URL}/menu/${menu.id}`;
        const data = { 
          nama_menu: nama_menu,
          harga: harga,
          deskripsi: deskripsi,
          jenis_id: jenis_id
        };
        await axios.patch(endpoint, data);
        setNamaMenu("");
        setHarga(Number);
        setDeskripsi("");
        setJenisId(Number);
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
          <h3 className="font-bold text-lg">Edit Menu</h3>
          <form onSubmit={handleUpdate}>
            <div className="form-control">
              <label className="label font-bold">Nama Menu</label>
              <input
                type="text"
                value={nama_menu}
                onChange={(e) => setNamaMenu(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Nama Menu"
              />
            </div>

            <div className="form-control">
              <label className="label font-bold">Harga</label>
              <input
                type="number"
                value={harga}
                onChange={(e) => setHarga(Number(e.target.value))}
                className="input w-full input-bordered"
                placeholder="Harga"
              />
            </div>

            <div className="form-control">
              <label className="label font-bold">Deskripsi</label>
              <input
                type="text"
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Deskripsi"
              />
            </div>

            <div className="form-control">
              <label className="label font-bold">Jenis Id</label>
              <input
                type="number"
                value={jenis_id}
                onChange={(e) => setJenisId(Number(e.target.value))}
                className="input w-full input-bordered"
                placeholder="Jenis Id"
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

export default EditMenu