import { TruckIcon } from "@heroicons/react/24/outline";
import { merinda } from "@/app/util/ui/fonts";

interface CarsRUsLogoProps {
  displayIcon: boolean; // You can define this type depending on your needs
  hideIfMobile?: boolean; // Optional prop, defaults to false if not provided
  currentLoginStatus: string;
}

const loginStatuses = { ADMIN: "admin", USER: "user", OUT: "out" };

export default function CarsForHireLogo({
  displayIcon,
  hideIfMobile = false,
  currentLoginStatus,
}: CarsRUsLogoProps) {
  return (
    <a
      href={
        currentLoginStatus === loginStatuses.ADMIN ? "/admin-dashboard" : "/"
      }
      className={`${merinda.className} flex items-center space-x-3 text-nowrap text-white`}
    >
      {displayIcon && (
        <div className="rounded-full bg-orange-500 p-2 backdrop-blur-sm">
          <TruckIcon className="h-10 w-10 rotate-6 text-orange-300" />
        </div>
      )}
      <p
        className={`${hideIfMobile && "hidden md:block"} ${!displayIcon && `md:text-3xl md:leading-normal`} text-xl font-bold tracking-tight text-gray-800`}
      >
        <span className="text-orange-600">Cars</span>
        <span className="text-orange-300">-</span>
        <span className="text-orange-600">4</span>
        <span className="text-orange-300">-</span>
        <span className="text-orange-600">Hire</span>
      </p>
    </a>
  );
}
