const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img
          src="../../public/assets/images/favicon.svg"
          alt="logo"
          width={21}
          height={27}
        />
      </nav>
    </header>
  );
};

export default Navbar;
