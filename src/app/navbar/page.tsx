import ActionButtons from './action-button';
import Logo from './logo';
import { NavigationMenuBar } from './navigation-bar'; // Correct capitalization

const Navbar = () => {
    return (
        <div className="
            flex
            justify-between
            items-center px-18 border-b
        ">
            <Logo />
            <NavigationMenuBar /> {/* Corrected capitalization */}
            <ActionButtons /> {/* Ensure this matches your file name */}
        </div>
    );
}

export default Navbar;