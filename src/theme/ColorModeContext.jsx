import { createContext } from "react";

const ColorModeContext = createContext({
    toggleColorMode: () => {
      // This is left empty on purpose
    },
});

export default ColorModeContext