import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const SearchAlertDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <div>
      {/* Button to trigger the dialog */}
      <button
        onClick={openDialog}
        className="bg-transparent transition duration-200"
      >
        <FaSearch className="text-white text-xl mt-2" />
      </button>

      {/* Alert Dialog */}
      {isOpen && (
        <div className="fixed top-16 left-2 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-300 w-full max-w-md p-6 rounded-lg shadow-lg relative">
            <div className="space-y-4">
              <div className="flex justify-end space-x-2">
                <button
                  onClick={closeDialog}
                  className="rounded-md transition duration-200"
                >
                  <FaX />
                </button>
              </div>
              <div className="flex justify-start items-center gap-2">
                <input type="text" placeholder="Search Here..." className="border border-gray-300 bg-gray-100 rounded-md" />
                <button className="border-2 border-gray-400 rounded-md py-2 px-6"><FaSearch className="text-2xl" /></button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchAlertDialog;
