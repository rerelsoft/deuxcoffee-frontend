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

const EditKaryawan = (karyawan: Karyawan) => {
    const [modal, setModal] = useState(false);
    const [nip, setNip] = useState(karyawan.nip);
    const [nik, setNik] = useState(karyawan.nik);
    const [nama, setNama] = useState(karyawan.nama);
    const [jenis_kelamin, setJenisKelamin] = useState(karyawan.jenis_kelamin);
    const [tempat_lahir, setTempatLahir] = useState(karyawan.tempat_lahir);
    const [tanggal_lahir, setTanggalLahir] = useState(karyawan.tanggal_lahir);
    const [telpon, setTelpon] = useState(karyawan.telpon);
    const [agama, setAgama] = useState(karyawan.agama);
    const [status_nikah, setStatusNikah] = useState(karyawan.status_nikah); 
        const [alamat, setAlamat] = useState(karyawan.alamat);

    const [golongan_id, setGolonganId] = useState(karyawan.golongan_id);
    const [foto, setFoto] = useState(karyawan.foto);

    const [isMutating, setIsMutating] = useState(false);
    const router = useRouter();
    function handleChange() {
        setModal(!modal);
      }

      const handleUpdate = async (e: SyntheticEvent) => {
        e.preventDefault();
        setIsMutating(true);
    
        let endpoint = `${API_URL}/karyawan/${karyawan.id}`;
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
        await axios.patch(endpoint, data);
        setNip(Number);
        setNik(Number);
        setNama("");
        setJenisKelamin("");
        setTempatLahir("");
        setTanggalLahir(Number);
        setTelpon(Number);
        setAgama("");
        setStatusNikah("");
        setAlamat("");
        setGolonganId(Number);
        setFoto("");
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
          <h3 className="font-bold text-lg">Edit Pelanggan</h3>
          <form onSubmit={handleUpdate}>
            <div className="form-control">
<label className="label font-bold">Nip</label>
              <input
                type="number"
                value={nip}
                onChange={(e) => setNip(Number(e.target.value))}
                className="input w-full input-bordered"
                placeholder="Nip"
              />
            </div>

            <div className="form-control">
              <label className="label font-bold">Nik</label>
              <input
                type="number"
                value={nik}
                onChange={(e) => setNik(Number(e.target.value))}
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
                onChange={(e) => setTanggalLahir(Number(e.target.value))}
                className="input w-full input-bordered"
                placeholder="Tanggal Lahir"
              />
            </div>

            <div className="form-control">
              <label className="label font-bold">Telfon</label>
              <input
                type="number"
                value={telpon}
                onChange={(e) => setTelpon(Number(e.target.value))}
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
                onChange={(e) => setGolonganId(Number(e.target.value))}
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

export default EditKaryawan