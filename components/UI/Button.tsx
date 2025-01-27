import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  color: string;
  link?: string;
  classList?: string;
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

export function ButtonWithoutLink({ children, color }: ButtonProps) {
  return (
    <button
      className={`bg-${color} py-2 px-4 rounded-xl hover:bg-opacity-60 transition`}
    >
      <span className="text-lg">{children}</span>
    </button>
  );
}
