function Navbar() {
  return (
    <div className="flex gap-[1vw] border-b border-gray-400/50">
      <div className="flex items-center justify-center px-2 py-1 border-b-4 border-transparent hover:border-blue-700 cursor-pointer ml-[7vw]">
        <img
          src="https://cdn-icons-png.flaticon.com/128/16548/16548756.png"
          alt=""
          className="w-[1.8vw]"
        />
        <p className="font-semibold text-[1.05rem] ml-1">Trademarks</p>
      </div>
      <div className="flex items-center justify-center px-2 py-1 border-b-4 border-transparent hover:border-blue-700 cursor-pointer">
        <img
          src="https://cdn-icons-png.flaticon.com/128/3106/3106921.png"
          alt=""
          className="w-[1vw]"
        />
        <p className="font-semibold text-[1.05rem] ml-1">Owners</p>
      </div>
      <div className="flex items-center justify-center px-2 py-1 border-b-4 border-transparent hover:border-blue-700 cursor-pointer">
        <img
          src="https://cdn-icons-png.flaticon.com/128/88/88506.png"
          alt=""
          className="w-[1vw]"
        />
        <p className="font-semibold text-[1.05rem] ml-1">Logos</p>
      </div>
      <div className="flex items-center justify-center px-2 py-1 border-b-4 border-transparent hover:border-blue-700 cursor-pointer">
        <img
          src="https://cdn-icons-png.flaticon.com/128/13488/13488581.png"
          alt=""
          className="w-[1vw]"
        />
        <p className="font-semibold text-[1.05rem] ml-1">
          Internet Brand Search
        </p>
      </div>
      <div className="flex items-center justify-center px-2 py-1 border-b-4 border-transparent hover:border-blue-700 cursor-pointer">
        <img
          src="https://cdn-icons-png.flaticon.com/128/3146/3146117.png"
          alt=""
          className="w-[1vw]"
        />
        <p className="font-semibold text-[1.05rem] ml-1">Copyrights</p>
      </div>
    </div>
  );
}

export default Navbar;
