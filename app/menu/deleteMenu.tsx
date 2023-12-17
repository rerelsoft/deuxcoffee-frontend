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

const DeleteMenu = (menu: Menu) => {
  const [modal, setModal] = useState(false);
  const [nama_menu, setNamaMenu] = useState("");
  const [harga, setHarga] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [jenis_id, setJenisId] = useState("");
  const [isMutating, setIsMutating] = useState(false);
  const router = useRouter();
  function handleChange() {
    setModal(!modal);
  }

  const handleDelete = async (menuId: Number) => {
    setIsMutating(true);
    let params = { id: menuId };
    let endpoint = `${API_URL}/menu/${menuId}`;
    const data = {
      nama_menu: nama_menu,
      harga: harga,
      deskripsi: deskripsi,
      jenis_id: jenis_id
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
            U want to delete {menu.nama_menu}?
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
                onClick={() => handleDelete(menu.id)}
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

export default DeleteMenu;
