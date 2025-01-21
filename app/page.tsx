export default function Home() {
  return (
    <div className="padding-x padding-y max-width">
      <header>
        <div className="flex justify-between border-b-2 p-2">
          <div>English</div>
          <button className="bg-[#ffbc01] py-1 px-2 rounded-xl mt-2 hover:bg-opacity-60 text-sm">
            My Profile
          </button>
        </div>
        <nav className="flex justify-between p-2">
          <div>Logo</div>
          <div>
            <ul className="flex *:cursor-pointer *:transition">
              <li className="p-2 hover:opacity-60">Home</li>
              <li className="p-2 hover:opacity-60">About</li>
              <li className="p-2 hover:opacity-60">Contact</li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <div className="flex gap-2 mt-8">
          <div className="bg-[#fff7e7] grow rounded-lg shadow-md hover:shadow-lg transition">
            <div className="my-20 flex flex-col justify-center">
              <h1 className="text-center">Ready to send?</h1>
              <button className="bg-[#ffbc01] w-1/4 mx-auto py-2 px-4 rounded-xl mt-2 hover:bg-opacity-60 transition">
                Start sending
              </button>
            </div>
          </div>
          <div className="bg-[#FAEAFD] grow rounded-lg shadow-md hover:shadow-lg transition">
            <div className="my-20 flex flex-col justify-center">
              <h1 className="text-center">Where is my parcel?</h1>
              <button className="border border-black w-1/4 mx-auto py-2 px-4 rounded-xl mt-2 hover:border-opacity-60 transition">
                Start tracking
              </button>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="flex justify-between mt-8">
          <div>Logo</div>
          <div>
            <ul className="flex gap-3">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
        <div className="border-t-2 mt-8" />
        <div className="flex justify-between mt-6">
          <p>Copyright 2025</p>
          <div>
            <ul className="flex gap-3">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
