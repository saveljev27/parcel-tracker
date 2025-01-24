export default function Button({ onClick }: { onClick?: () => void }) {
  return (
    <div className="flex flex-col gap-5">
      <button onClick={onClick} className="bg-primary py-2 px-4 rounded-xl">
        Click on me
      </button>
    </div>
  );
}
