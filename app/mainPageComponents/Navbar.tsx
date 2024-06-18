const Navbar = () => {
  const defaultColor = "#d90429";
  const backgroundColorObject = { backgroundColor: defaultColor };
  return (
    <header>
      <nav className="p-8 px-20 flex justify-between items-center ">
        <div className="sm:flex-col sm:items-center sm:justify-between ">
          <a className="font-bold text-red-600" href="#">
            ProductivePanda
          </a>
        </div>
        <div className=" mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
          <button
            className=" text-white font-bold py-2 px-4 rounded-md "
            style={backgroundColorObject}
          >
            Sign In
          </button>
          <button className=" text-red-500 font-bold py-2 px-4 rounded-md border border-red-500 ">
            Log In
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
