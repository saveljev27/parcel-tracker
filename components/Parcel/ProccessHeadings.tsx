import React from 'react';

interface ProccessHeadingsProps {
  status: boolean;
  heading: string;
  number: string;
  handleClick: () => void;
}

export default function ProccessHeadings({
  status,
  heading,
  number,
  handleClick,
}: ProccessHeadingsProps) {
  return (
    <div className="flex mt-4 px-4 justify-between">
      <h1>
        <span
          className={`font-bold rounded-full px-2 mr-2 text-sm border ${
            status
              ? 'bg-secondary text-white'
              : 'bg-none text-gray-600 border-gray-600'
          }`}
        >
          {number}
        </span>
        {heading}
      </h1>
      {!status && (
        <span className="hover:opacity-60 cursor-pointer" onClick={handleClick}>
          Edit
        </span>
      )}
    </div>
  );
}
