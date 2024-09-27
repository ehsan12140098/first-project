import React, { useContext } from "react";
import { Text } from "./Text";
import Prodoct from "./Prodoct";

const Prodocts = () => {
  const { prodoctsname } = useContext(Text);

  return (
    <div>
      <div id="products">
        {prodoctsname.map((u, index) => (
          <Prodoct key={index} prodoctname1={u} />
        ))}
      </div>
    </div>
  );
};

export default Prodocts;
