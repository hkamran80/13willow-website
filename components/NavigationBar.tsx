import NavLink from "./NavLink";

const NavigationBar = () => {
    return (
        <nav className="flex flex-none items-start py-6 px-12 pt-14 text-sm md:items-center md:px-0 md:pt-12">
            <span className="flex-1" />

            <NavLink
                href="/"
                className="text-base font-bold tracking-wide transition-colors duration-300 md:text-xl"
                conditionalClassNames="hover:cursor-pointer"
            >
                Thirteenth Willow
            </NavLink>

            <span className="flex-1" />
        </nav>
    );
};

export default NavigationBar;
