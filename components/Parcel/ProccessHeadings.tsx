import React from 'react';

interface ProccessHeadingsProps {
  status: { active: boolean; completed: boolean };
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
  const numberClass = `font-bold rounded-full px-2 mr-2 text-sm border ${
    status.active
      ? 'bg-secondary text-white'
      : 'bg-none text-gray-600 border-gray-600'
  } ${status.completed ? 'bg-green-700 text-white' : ''}`;

  return (
    <div className="flex mt-4 px-4 justify-between">
      <h1>
        <span className={numberClass}>{number}</span>
        {heading}
      </h1>
      {status.completed && (
        <span className="hover:opacity-60 cursor-pointer" onClick={handleClick}>
          Edit
        </span>
      )}
    </div>
  );
}
