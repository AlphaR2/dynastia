import { FC } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const NavBar: FC = () => {
  return (
    <div className="flex mt-4 mr-3 items-center justify-between">
      <h2 className="flex text-3xl font-black ml-3 ">Dynastia</h2>
      <WalletMultiButton
      
        style={{
          backgroundColor: "#021356",
          color: " ",
          fontWeight: "bold",
        }}
      />
    </div>
  );
};

export default NavBar;
