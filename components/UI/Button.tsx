import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  color: string;
  link?: string;
  classList?: string;
  onClick?: () => void;
}

export function Button({ children, color, link, classList }: ButtonProps) {
  return (
    <Link href={link || '/'} className={classList || ''}>
      <button
        className={`bg-${color} py-2 px-4 rounded-xl hover:bg-opacity-60 transition`}
      >
        <span className="text-lg">{children}</span>
      </button>
    </Link>
  );
}

export function ButtonWithoutLink({ children, color, onClick }: ButtonProps) {
  return (
    <button
      className={`bg-${color} px-4 py-2 mx-4 rounded-xl hover:bg-opacity-60 transition shadow-lg`}
      onClick={onClick}
    >
      <span className="text-lg">{children}</span>
    </button>
  );
}
