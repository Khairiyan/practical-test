"use client"; // This is a client component 👈🏽
export default function Navbar() {
  return (
    <>
      <div className="navbar bg-[#191970] px-8">
        <div className="flex-1">
          <a className="btn btn-ghost text-white uppercase text-xl">Dashboard Admin</a>
        </div>
        <div className="flex-none">
          <div className="">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://i.ibb.co/8ccWwmP/foto-profile.jpg" />
              </div>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
