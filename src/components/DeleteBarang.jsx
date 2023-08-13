"use client";
import { useDispatch } from "react-redux";
import { deleteItem } from "../redux/slices/barangSlice";
import Delete from "../assets/delete.png";
// This is a client component 👈🏽

export default function DeleteBarang(props) {
  const dispatch = useDispatch();
  const handleDelete = (itemId) => {
    dispatch(deleteItem(itemId));
  };
  return (
    <>
      <div>
        {/* The button to open modal */}
        <label htmlFor={`hapus_data_${props.id}`} className="btn">
          <img src={Delete} alt="delete" className="w-5" />
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id={`hapus_data_${props.id}`} className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-2xl text-center">Delete Data</h3>
            <p className="py-4 text-center">Apakah Anda yakin ingin menghapus data {` ${props.nama}?`}</p>
            <div className="modal-action flex justify-center items-center">
              <label className="btn btn-error hover:bg-red-900 border-none" onClick={() => handleDelete(props.id)}>
                iya
              </label>
              <label htmlFor={`hapus_data_${props.id}`} className="btn">
                Tidak
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
