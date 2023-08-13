import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { addToTable } from "../redux/slices/barangSlice";
import { useDispatch } from "react-redux";


function generateNextId(data) {
  const ids = data.map((item) => item.id_barang);
  const maxId = Math.max(...ids);
  return maxId + 1;
}

export default function AddBarang() {
  const [nama, setNama] = useState("");
  const [stok, setStok] = useState(0);
  const [hargaJual, setHargaJual] = useState(0);
  const [hargaBeli, setHargaBeli] = useState(0);
  const [gambar, setGambar] = useState(null);
  const dispatch = useDispatch();
  const [id, setId] = useState(0);

  const barang = useSelector((state) => (Array.isArray(state.barang.data) ? state.barang.data : [{}]));
  console.log(barang);

  const handleInputNama = (event) => {
    setNama(event.target.value);
  };

  const handleInputStok = (event) => {
    setStok(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size <= 100 * 1024 && (file.type === "image/jpg" || file.type === "image/png")) {
        setGambar(URL.createObjectURL(file));
        console.log(gambar);
      } else {
        alert("File harus dalam format JPG atau PNG dan ukuran maksimal 100KB.");
      }
    }
  };

  const handleInputHargaJual = (event) => {
    setHargaJual(event.target.value);
  };

  const handleInputHargaBeli = (event) => {
    setHargaBeli(event.target.value);
  };

  const tambahData = () => {
    dispatch(addToTable({ id_barang: id, nama_barang: nama, gambar_barang: gambar, harga_beli: hargaBeli, harga_jual: hargaJual, stok: stok }));
    setNama("");
    setStok(0);
    setHargaBeli(0);
    setHargaJual(0);
    setGambar(null);
  };

  useEffect(() => {
    const newId = generateNextId(barang);
    console.log("Generated ID:", newId);
    setId(newId);
  }, [barang]);

  return (
    <>
      <div className="ml-8 pt-8">
        {/* Open the modal using ID.showModal() method */}
        <button className="btn" onClick={() => window.tambah_data.showModal()}>
          Tambah Data
        </button>
      </div>
      <dialog id="tambah_data" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-2xl text-center">Tambah Data</h3>
          <div className="form-control w-full flex flex-col justify-center items-center px-8">
            <div className="flex justify-start w-full max-w-lg px-9">
              <label className="label">
                <span className="label-text after:ml-0.5 after:content-['*'] after:text-red-500">Nama Barang</span>
              </label>
            </div>
            <input type="text" placeholder="Type here" value={nama} className="input input-bordered w-full max-w-xs " onChange={() => handleInputNama(event)} />
          </div>
          <div className="form-control w-full flex flex-col justify-center items-center px-8">
            <div className="flex justify-start w-full max-w-lg px-9">
              <label className="label">
                <span className="label-text after:ml-0.5 after:content-['*'] after:text-red-500">Gambar Barang</span>
              </label>
            </div>
            <input type="file" accept=".jpg, .png" onChange={handleImageChange} className="file-input input-bordered w-full max-w-xs" />
          </div>
          <div className="form-control w-full flex flex-col justify-center items-center px-8">
            <div className="flex justify-start w-full max-w-lg px-9">
              <label className="label">
                <span className="label-text after:ml-0.5 after:content-['*'] after:text-red-500">Harga Beli</span>
              </label>
            </div>
            <input type="number" placeholder="Type here" value={hargaBeli} className="input input-bordered w-full max-w-xs" onChange={() => handleInputHargaBeli(event)} />
          </div>
          <div className="form-control w-full flex flex-col justify-center items-center px-8">
            <div className="flex justify-start w-full max-w-lg px-9">
              <label className="label">
                <span className="label-text after:ml-0.5 after:content-['*'] after:text-red-500">Harga Jual</span>
              </label>
            </div>
            <input type="number" placeholder="Type here" value={hargaJual} className="input input-bordered w-full max-w-xs" onChange={() => handleInputHargaJual(event)} />
          </div>
          <div className="form-control w-full flex flex-col justify-center items-center px-8">
            <div className="flex justify-start w-full max-w-lg px-9">
              <label className="label">
                <span className="label-text after:ml-0.5 after:content-['*'] after:text-red-500">Stok</span>
              </label>
            </div>
            <input type="number" placeholder="Type here" value={stok} className="input input-bordered w-full max-w-xs" onChange={() => handleInputStok(event)} />
          </div>
          <div className="modal-action flex justify-center items-center">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-primary border-none" onClick={() => tambahData()}>
              Submit
            </button>
            <button className="btn">Tutup</button>
          </div>
        </form>
      </dialog>
    </>
  );
}
