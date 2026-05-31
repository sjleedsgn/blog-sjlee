import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-[2px]">
      <div className="mx-auto flex h-[60px] max-w-[920px] items-center justify-between px-6 lg:px-0">
        <NavLogo />
        <NavLinks />
      </div>
    </nav>
  );
}
