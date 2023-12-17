export const metadata = {
  title: "Category",
};

import axios from "axios";
import Link from "next/link";
import React from "react";

import AddCategory from "./addCategory";
import DeleteCategory from "./deleteCategory";
import EditCategory from "./editCategory";

type Category = {
  id: number;
  nama: string;
};

const getCategory = async () => {
  const res = await axios.get("http://127.0.0.1:8000/api/category");

  return res.data.data;
};

const Category = async () => {
  const category: Category[] = await getCategory();

  return (
    <div className="py-10 px-10">
      <div className="py-10 px-10">
        <AddCategory />
      </div>

      <div className="py-10 px-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {category.map((category, index) => (
                <tr
                  key={category.id}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                >
                  <td>{index + 1}</td>
                  <td>{category.nama}</td>
                  <td className="flex">
                    <div className="mr-1">
                    <EditCategory {...category}/>
                    </div>
                    <DeleteCategory {...category} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Category;
