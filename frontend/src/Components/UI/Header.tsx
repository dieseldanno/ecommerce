import gnomeCity from "../../assets/gnomeCity.webp";

const Header = () => {
  return (
    <header className="bg-slate-200 py-2 px-4 sm:px-6 lg:px-8 w-full sticky z-10 top-0 shadow-[0px_0px_5px_1px_rgba(0,0,0,0.7)]">
      <div className="flex items-center gap-4">
        <img
          src={gnomeCity}
          alt="logo for gnome city"
          className="w-20 h-20 object-contain"
        />
        <h1 className="text-2xl font-bold">Gnome City</h1>
      </div>
    </header>
  );
};
export default Header;
