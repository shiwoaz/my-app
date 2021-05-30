import { useMediaQuery } from "react-responsive";
import isServer from "../lib/isServer";

const useScreenType = () => {
  if (!isServer) {
    const Grid3 = useMediaQuery({ minWidth: 1336 });
    const Grid2 = useMediaQuery({ minWidth: 1265 });
    const Grid1 = useMediaQuery({ minWidth: 800 });

    if (Grid3) return "G-3";
    if (Grid2) return "G-2";
    if (Grid1) return "G-1";

    return "G";
  }
};

export default useScreenType;
