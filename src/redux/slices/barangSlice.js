import { createSlice } from "@reduxjs/toolkit";

let localStorageData = localStorage.getItem("barang");
let parsedData = [];

try {
  parsedData = JSON.parse(localStorageData);
} catch (error) {
  console.error("Error parsing localStorage data:", error);
}

const defaultData = [
  {
    id_barang: 1,
    nama_barang: "Sepatu",
    gambar_barang: "",
    harga_beli: 100000,
    harga_jual: 100000,
    stok: 20,
  },
];

const barangSlice = createSlice({
  name: "barang",
  initialState: {
    data: Array.isArray(parsedData) ? parsedData : defaultData,
    currentPage: 1, // Halaman saat ini
    itemsPerPage: 5, // Item per halaman
    searchTerm: '', // Kata kunci pencarian
  },
  reducers: {
    addToTable: (state, action) => {
      const existingProduct = state.data.find((barang) => barang.nama_barang === action.payload.nama_barang);
      if (!existingProduct) {
        state.data.push(action.payload);
      } else {
        alert("Nama barang sudah terdaftar");
      }
    },
    deleteItem: (state, action) => {
      const idToDelete = action.payload;
      state.data = state.data.filter((item) => item.id_barang !== idToDelete);
    },
    barangUpdated: (state, action) => {
      const { id_barang, updatedData } = action.payload;
      const existingBarang = state.data.find((item) => item.id_barang === id_barang);
      if (existingBarang) {
        Object.assign(existingBarang, updatedData);
      }
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.currentPage = 1; // Reset halaman ke 1 saat mencari
    },
  },
});

export const { addToTable } = barangSlice.actions;
export const { deleteItem } = barangSlice.actions;
export const { barangUpdated } = barangSlice.actions;
export const { setCurrentPage, setSearchTerm } = barangSlice.actions;
export default barangSlice.reducer;
