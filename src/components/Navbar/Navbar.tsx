import { NavbarDesktop } from "./components/NavbarDesktop";
import { NavbarMobile } from "./components/NavbarMobile";

export function Navbar() {
  return (
    <nav className="bg-main-client fixed top-0 right-0 left-0 z-50 h-auto">
      <div className="mx-auto h-auto max-w-7xl sm:px-6 sm:pr-2 sm:pl-1 md:px-4 lg:px-8">
        <NavbarMobile />
        <NavbarDesktop />
      </div>
    </nav>
  );
}
