import { FC, MouseEventHandler, useCallback } from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";

const Disconnected: FC = () => {
  const modalState = useWalletModal();
  const { wallet, connect } = useWallet();

  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      if (event.defaultPrevented) {
        return;
      }

      if (!wallet) {
        modalState.setVisible(true);
      } else {
        connect().catch(() => {});
      }
    },
    [wallet, connect, modalState]
  );

  return (
    <div>
      <div className="flex flex-col gap-6 justify-center items-center">
        <h2 className="flex text-center text-sm lg:text-xl font-semibold lg:font-bold uppercase leading-5 lg:leading-10 mx-2 lg:mx-56">
          Enter the Year of the Dragon, Conquer Solana
          realm and lead the Dynastia.
        </h2>

        <button 
        onClick={handleClick}
        className="flex items-center gap-2 text-xl mt-4 font-semibold">
         Go to Blacksmith <ArrowForwardIcon
         className="font-bold text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default Disconnected;

{
  /* <div> */
}

{
  /* <button
  onClick={handleClick}
>
  <h2>
    <h2>become a buildoor</h2>
    
  </h2>
</button> */
}
// </div>
