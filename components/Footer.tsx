import Link from "next/link";

const Footer = ({ extra }: { extra?: string }) => {
    return (
        <div className="max-w-sm space-y-2 px-4 pt-10 md:px-0">
            <p>{extra}</p>

            <p>
                Copyright &copy; {new Date().getFullYear()} Thirteenth Willow.
                All rights reserved.
            </p>

            <p className="space-x-3">
                <Link
                    href="/legal/terms"
                    className="transition-colors duration-200 ease-in-out hover:text-gray-300"
                >
                    Terms of Service
                </Link>

                <Link
                    href="/legal/privacy"
                    className="transition-colors duration-200 ease-in-out hover:text-gray-300"
                >
                    Privacy Policy
                </Link>
            </p>
        </div>
    );
};

export default Footer;
