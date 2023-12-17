"use client";
import React, { SyntheticEvent, use } from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

type Category = {
  id: number;
  nama: string;
};

const API_URL = "http://127.0.0.1:8000/api";
const DeleteCategory = (category: Category) => {
  const [modal, setModal] = useState(false);
  const [nama, setNama] = useState("");
  const [isMutating, setIsMutating] = useState(false);
  const router = useRouter();
  function handleChange() {
    setModal(!modal);
  }
  const handleDelete = async (categoryId: Number) => {
    setIsMutating(true);
    let params = { id: categoryId };
    let endpoint = `${API_URL}/category/${categoryId}`;
    const data = { nama: nama };
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
            U want to delete {category.nama}?
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
                onClick={() => handleDelete(category.id)}
                className="btn btn-error"
              >
                Delete
              </button>
            ) : (
              <button type="button" className="btn loading">
                deleting...
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteCategory;
