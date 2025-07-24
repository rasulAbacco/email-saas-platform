// components/EmailVerify/FileUploader.jsx
import React, { useRef, useState } from 'react';
import { UploadCloud } from 'lucide-react';

const FileUploader = ({ onFileSelect }) => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      onFileSelect(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 flex flex-col items-center justify-center bg-white dark:bg-gray-900 shadow-sm">
      <UploadCloud className="text-[#7F27FF] mb-2" size={32} />
      <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
        {selectedFile ? `Selected: ${selectedFile.name}` : 'Drag and drop a file or click to upload'}
      </p>
      <button
        onClick={handleUploadClick}
        className="bg-[#7F27FF] hover:bg-[#6528F7] text-white px-4 py-2 rounded-md text-sm transition"
      >
        Choose File
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/pdf"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
};

export default FileUploader;
