"use client";
import React, { SyntheticEvent, use } from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const API_URL = "http://127.0.0.1:8000/api";

const AddStok = () => {
    const [modal, setModal] = useState(false);
    const [menu_id, setMenuId] = useState("");
    const [jumlah, setJumlah] = useState("");
    const [isMutating, setIsMutating] = useState(false);
    const router = useRouter();
    function handleChange() {
        setModal(!modal);
      }

      const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        setIsMutating(true);
    
        let endpoint = `${API_URL}/stok`;
        const data = { 
            menu_id: menu_id,
            jumlah: jumlah 
        
        };
        await axios.post(endpoint, data);
        setMenuId("");
        setJumlah("");
        router.refresh();
        setModal(false);
        setIsMutating(false);
      };


  return (
    <div>
      <button className="btn btn-neutral" onClick={handleChange}>
        Add New Stok
      </button>

      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />

      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add New Stok</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label font-bold">Menu Id</label>
              <input
                type="number"
                value={menu_id}
                onChange={(e) => setMenuId(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Menu Id"
              />
            </div>

            <div className="form-control">
              <label className="label font-bold">Jumlah</label>
              <input
                type="number"
                value={jumlah}
                onChange={(e) => setJumlah(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Jumlah"
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
                  Save
                </button>
              ) : (
                <button type="button" className="btn loading">
                  Saving...
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddStok