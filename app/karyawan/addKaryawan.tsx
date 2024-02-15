"use client";
import React, { SyntheticEvent, use } from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const API_URL = "http://127.0.0.1:8000/api";

const AddKaryawan = () => {
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

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setIsMutating(true);

    let endpoint = `${API_URL}/karyawan`;
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
    await axios.post(endpoint, data);
    setNip("");
    setNik("");
    setNama("");
    setJenisKelamin("");
    setTempatLahir("");
    setTanggalLahir("");
    setTelpon("");
    setAgama("");
    setStatusNikah("");
    setAlamat("");
    setGolonganId("");
    setFoto("");
    router.refresh();
    setModal(false);
    setIsMutating(false);
  };

  return (
    <div>
      <button className="btn btn-neutral" onClick={handleChange}>
        Add New Karyawan
      </button>

      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />

      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add New Karyawan</h3>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="form-control">
              <label className="label font-bold">Nip</label>
              <input
                type="number"
                value={nip}
                onChange={(e) => setNip(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Nip"
              />
            </div>

            <div className="form-control">
              <label className="label font-bold">Nik</label>
              <input
                type="number"
                value={nik}
                onChange={(e) => setNik(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Nik"
              />
            </div>

            <div className="form-control">
              <label className="label font-bold">Nama</label>
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Nama"
              />
            </div>

            <div className="form-control">
              <label className="label font-bold">Jenis Kelamin</label>
              <select
                defaultValue={"Pilih jenis kelamin"}
                name=""
                id=""
                onChange={(e) => setJenisKelamin(e.target.value)}
                className="input w-full input-bordered"
              >
                <option disabled>Pilih jenis kelamin</option>
                <option value="pria">pria</option>
                <option value="wanita">wanita</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label font-bold">Tempat Lahir</label>
              <input
                type="text"
                value={tempat_lahir}
                onChange={(e) => setTempatLahir(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Tempat Lahir"
              />
            </div>

            <div className="form-control">
              <label className="label font-bold">Tanggal Lahir</label>
              <input
                type="date"
                value={tanggal_lahir}
                onChange={(e) => setTanggalLahir(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Tanggal Lahir"
              />
            </div>

            <div className="form-control">
              <label className="label font-bold">Telfon</label>
              <input
                type="number"
                value={telpon}
                onChange={(e) => setTelpon(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Telfon"
              />
            </div>

            <div className="form-control">
              <label className="label font-bold">Agama</label>
              <input
                type="text"
                value={agama}
                onChange={(e) => setAgama(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Agama"
              />
            </div>

            <div className="form-control">
              <label className="label font-bold">Status Nikah</label>
              <select
                defaultValue={"Pilih status nikah"}
                name=""
                id=""
                onChange={(e) => setStatusNikah(e.target.value)}
                className="input w-full input-bordered"
              >
                <option disabled>Pilih status nikah</option>
                <option value="belum nikah">belum nikah</option>
                <option value="nikah">nikah</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label font-bold">Alamat</label>
              <input
                type="text"
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Alamat"
              />
            </div>

            <div className="form-control">
              <label className="label font-bold">Golongan Id</label>
              <input
                type="number"
                value={golongan_id}
                onChange={(e) => setGolonganId(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Golongan Id"
              />
            </div>

            <div className="form-control">
              <label className="label font-bold">Foto</label>
              <input
                type="text"
                value={foto}
                onChange={(e) => setFoto(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Foto"
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
  );
};

export default AddKaryawan;
