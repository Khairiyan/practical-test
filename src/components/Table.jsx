import { useDispatch, useSelector } from "react-redux";
import DeleteBarang from "./DeleteBarang";
import UpdateBarang from "./UpdateBarang";
import { useState } from "react";
import AddBarang from "./addBarang";

const Table = () => {
  const barang = useSelector((state) => state.barang.data);

  const [searchTerm, setSearchTerm] = useState("");
  let index = 1;

  const filteredData = barang.filter((item) => item.nama_barang.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <>
      <div className="px-16">
        <div className="flex flex-row justify-between">
          <AddBarang />
          <div className="pt-8 mr-8">
            <input type="text" placeholder="Cari..." className="input input-bordered w-full max-w-xs" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
        </div>
        <div className="overflow-x-auto mx-8 mt-8 overflow-y-auto h-[36rem] mb-10">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-lg text-bold uppercase">
                <th>#</th>
                <th>Nama Barang</th>
                <th>Harga Beli</th>
                <th>Harga Jual</th>
                <th>Stok Barang</th>
                <th>Gambar Barang</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {filteredData.map((b) => (
                <tr className="bg-base-200" key={b.id_barang} id={b.id_barang}>
                  <th>{index++}</th>
                  <td>{b.nama_barang}</td>
                  <td>{b.harga_beli}</td>
                  <td>{b.harga_jual}</td>
                  <td>{b.stok}</td>
                  <td>
                    <img className="w-20" src={b.gambar_barang}></img>
                  </td>
                  <td className="flex-row flex">
                    <UpdateBarang className="mr-4" id={b.id_barang} nama={b.nama_barang} harga_beli={b.harga_beli} harga_jual={b.harga_jual} stok={b.stok} gambar_barang={b.gambar_barang}></UpdateBarang>
                    <DeleteBarang id={b.id_barang} nama={b.nama_barang} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
