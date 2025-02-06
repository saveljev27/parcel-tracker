export function Footer() {
  return (
    <footer>
      <div className="flex justify-end mt-8">
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
