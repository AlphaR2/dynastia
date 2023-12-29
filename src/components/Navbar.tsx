import { FC } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const NavBar: FC = () => {
  return (
    <div className="flex justify-end mt-4 mr-3 items-center sm:justify-between">
      <h2 className="hidden sm:flex text-3xl font-black ml-3 ">Dynastia</h2>
      <WalletMultiButton
      
        style={{
          backgroundColor: "",
          color: " ",
          fontWeight: "bold",
        }}
      />
    </div>
  );
};

export default NavBar;
