import DataTable from "react-data-table-component";
import { Link } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import Layout from "@/Layouts/Layout";

const TableDashboard = () => {
    const handleDelete = (id) => {
        console.log(id);
        // Axios.delete(`/form/${id}`)
        Axios.get(`/table/hapus/` + id)
            .then((response) => {
                // Handle jika penghapusan berhasil
                // Misalnya, Anda bisa memperbarui ulang dataFromAPI untuk merefresh tampilan tabel
                const updatedData = dataFromAPI.filter(
                    (item) => item.id !== id
                );
                setDataFromAPI(updatedData);
                // alert("Item berhasil dihapus.");
            })
            .catch((error) => {
                // Handle jika terjadi kesalahan saat menghapus
                console.error("Error deleting item:", error);
                // alert("Terjadi kesalahan saat menghapus item.");
            });
    };

    const [values, setValues] = useState({
        id: "",
    });

    const columns = [
        {
            name: "Nomor",
            selector: (row, index) => index + 1, // Use index to generate a sequential number
            // sortable: true, // Mengaktifkan pengurutan untuk kolom ini
        },
        {
            name: "Pekerjaan",
            selector: (row) => row.pekerjaan,
            // sortable: true, // Mengaktifkan pengurutan untuk kolom ini
        },
        {
            name: "Perusahaan",
            selector: (row) => row.perusahaan,
        },
        {
            name: "Jenis Pekerjaan",
            selector: (row) => row.jenis_pekerjaan,
        },
        {
            name: "Batas Lamaran",
            selector: (row) => row.batas_lamaran,
        },

        {
            name: "Aksi",
            cell: (row) => (
                <>
                    <a href={`/table/edit/${row.id}`}>
                        <button>
                            <img
                                src="../../images/edit.svg"
                                alt=""
                                className="scale-50"
                            />
                        </button>
                    </a>
                    <button
                        className="btn bg-white border-none hover:bg-transparent transition-all"
                        // onClick={() =>
                        //     document.getElementById("hapus").showModal(row.id)
                        // }
                        onClick={(e) =>
                            document
                                .getElementById(`hapus-` + row.id)
                                .showModal()
                        } // Menambahkan id unik dengan item.id
                        data-id={row.id}
                    >
                        <img
                            src="../../images/delete.svg"
                            alt=""
                            className="scale-50"
                        />
                    </button>
                    {/* <dialog id="hapus" className="modal"> */}
                    <dialog
                        id={`hapus-${row.id}`}
                        className="hapus-modal modal"
                    >
                        <div className="modal-box text-white">
                            <h3 className="font-bold text-lg">
                                Kamu yakin ingin mengshapus?
                            </h3>
                            <p className="py-4">
                                Press ESC key or click the button below to close
                            </p>
                            <div className="modal-action ">
                                <form method="dialog" className="flex gap-4">
                                    {/* if there is a button in form, it will close the modal */}
                                    <a href={`/table/hapus/${row.id}`}>
                                        <button
                                            className="btn btn-error"
                                            onClick={() => handleDelete(row.id)}
                                        >
                                            Yakin
                                        </button>
                                    </a>
                                    <button className="btn">Tidak</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </>
            ),
        },
    ];

    const [searchTerm, setSearchTerm] = useState("");
    const [dataFromAPI, setDataFromAPI] = useState([]);

    const handleSearch = (value) => {
        setSearchTerm(value);
    };

    const filteredData = dataFromAPI.filter((item) => {
        return (
            item &&
            item.pekerjaan &&
            item.pekerjaan.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    // useEffect(() => {

    //     Axios.get("/form") // Gantilah '/api/data' dengan rute API yang sesuai
    //         .then((response) => {
    //             // Handle respons dari server
    //             setDataFromAPI(response.data);
    //         })
    //         .catch((error) => {
    //             // Handle kesalahan jika terjadi
    //             console.error("Error fetching data:", error);
    //         });
    // }, []); // Kosongkan array dependensi untuk memastikan permintaan hanya dipanggil sekali

    const fetchData = () => {
        Axios.get("/form")
            .then((response) => {
                setDataFromAPI(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };

    useEffect(() => {
        fetchData();
    }, []); // Kosongkan array dependensi untuk memastikan permintaan hanya dipanggil sekali

    return (
        <Layout pageTitle="Dashboard | Tako Karir">
            <div className="bg-BgTako px-4 h-screen py-8">
                <div className="bg-white container mx-auto p-8 rounded-lg h-full ">
                    <h1 className="font-bold text-2xl pb-6 text-DarkTako">
                        Tambah Loker
                    </h1>
                    <div className="flex justify-between gap-4">
                        <a href="/table/tambah_baru">
                            <button className="bg-BlueTako text-white rounded-lg px-4 py-2 ">
                                + Tambah
                            </button>
                        </a>
                        <input
                            type="text"
                            className="px-8 rounded-lg h-10 text-xs "
                            placeholder="Cari aku disini"
                            onChange={(e) => handleSearch(e.target.value)}
                        />
                    </div>
                    <div className="pb-8"></div>

                    {Array.isArray(filteredData) && filteredData.length > 0 ? (
                        <DataTable
                            // title="Tambah Loker"
                            columns={columns}
                            data={filteredData}
                            fixedHeader
                            pagination
                        />
                    ) : (
                        <p>Tunggu sebentar</p>
                    )}
                </div>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
            </div>
        </Layout>
    );
};

export default TableDashboard;
