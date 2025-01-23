import Image from 'next/image';

export function Footer() {
  return (
    <footer className="mb-10">
      <div className="flex justify-between mt-8">
        <Image src="/img/logo.png" alt="logo" width={80} height={80} />
        <div>
          <ul className="flex gap-3">
            <li className="text-hover">Instagram</li>
            <li className="text-hover">Facebook</li>
            <li className="text-hover">Twitter</li>
          </ul>
        </div>
      </div>
      <div className="border-t-2 mt-8" />
      <div className="flex justify-between mt-6">
        <p>Copyright 2025</p>
        <div>
          <ul className="flex gap-3">
            <li className="text-hover">Privacy Policy</li>
            <li className="text-hover">Terms of Service</li>
            <li className="text-hover">Cookie Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
