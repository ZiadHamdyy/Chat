// components/ui/File.jsx

import React from 'react';
import { Input } from './input'; // Update path as necessary
import { Label } from './label'; // Update path as necessary

export function InputFile({ onFileSelect }) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    onFileSelect(file); // Notify parent component of selected file
  };

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 text-gray-800">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" onChange={handleFileChange} />
    </div>
  );
}
