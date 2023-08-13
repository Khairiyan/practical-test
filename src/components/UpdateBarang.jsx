import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { barangUpdated } from "../redux/slices/barangSlice";
import iconEdit from "../assets/edit.png";

function UpdateBarang(props) {
  const dispatch = useDispatch();

  const [nama_barang, setNamaBarang] = useState(props.nama);
  const [gambar_barang, setGambarBarang] = useState(props.gambar_barang);
  const [harga_beli, setHargaBeli] = useState(props.harga_beli);
  const [harga_jual, setHargaJual] = useState(props.harga_jual);
  const [stok, setStok] = useState(props.stok);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size <= 100 * 1024 && (file.type === "image/jpg" || file.type === "image/png")) {
        setGambarBarang(URL.createObjectURL(file));
      } else {
        alert("File harus dalam format JPG atau PNG dan ukuran maksimal 100KB.");
      }
    }
  };

  const handleUpdateClick = () => {
    const updatedData = {
      nama_barang,
      gambar_barang,
      harga_beli,
      harga_jual,
      stok,
    };
    dispatch(barangUpdated({ id_barang: props.id, updatedData }));
  };

  return (
    <>
      {/* The button to open modal */}
      <label htmlFor={`update_data_${props.id}`} className="btn">
        <img src={iconEdit} className="w-5" alt="edit" />
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id={`update_data_${props.id}`} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-2xl text-center">Update Barang</h3>
          <div className="form-control w-full flex flex-col justify-center items-center px-8">
            <div className="flex justify-start w-full max-w-lg px-9">
              <label className="label">
                <span className="label-text after:ml-0.5 after:content-['*'] after:text-red-500">Nama Barang</span>
              </label>
            </div>
            <input type="text" placeholder="Type here" value={nama_barang} className="input input-bordered w-full max-w-xs " onChange={(e) => setNamaBarang(e.target.value)} />
          </div>
          <div className="form-control w-full flex flex-col justify-center items-center px-8">
            <div className="flex justify-start w-full max-w-lg px-9">
              <label className="label">
                <span className="label-text after:ml-0.5 after:content-['*'] after:text-red-500">Gambar</span>
              </label>
            </div>
            <input type="file" accept=".jpg, .png" className="file-input input-bordered w-full max-w-xs" onChange={handleImageChange} />
            <p className="text-center px-10">Selected file: {gambar_barang ? gambar_barang : "None"}</p>
          </div>
          <div className="form-control w-full flex flex-col justify-center items-center px-8">
            <div className="flex justify-start w-full max-w-lg px-9">
              <label className="label">
                <span className="label-text after:ml-0.5 after:content-['*'] after:text-red-500">Harga Beli</span>
              </label>
            </div>
            <input type="number" placeholder="Type here" value={harga_beli} className="input input-bordered w-full max-w-xs" onChange={(e) => setHargaBeli(e.target.value)} />
          </div>
          <div className="form-control w-full flex flex-col justify-center items-center px-8">
            <div className="flex justify-start w-full max-w-lg px-9">
              <label className="label">
                <span className="label-text after:ml-0.5 after:content-['*'] after:text-red-500">Harga Jual</span>
              </label>
            </div>
            <input type="number" placeholder="Type here" value={harga_jual} className="input input-bordered w-full max-w-xs" onChange={(e) => setHargaJual(e.target.value)} />
          </div>
          <div className="form-control w-full flex flex-col justify-center items-center px-8">
            <div className="flex justify-start w-full max-w-lg px-9">
              <label className="label">
                <span className="label-text after:ml-0.5 after:content-['*'] after:text-red-500">Stok</span>
              </label>
            </div>
            <input type="number" placeholder="Type here" value={stok} className="input input-bordered w-full max-w-xs" onChange={(e) => setStok(e.target.value)} />
          </div>
          <div className="modal-action flex justify-center items-center">
            <label htmlFor={`update_data_${props.id}`} className="btn btn-primary" onClick={() => handleUpdateClick()}>
              Submit
            </label>
            <label htmlFor={`update_data_${props.id}`} className="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateBarang;
