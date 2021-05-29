import EshopItem from "./EshopItem";
import Button from "./Button";
import { useState } from "react";
const Eshop = () => {
  const [inHover, setInHover] = useState(false);

  return (
    <>
      <h1>E-shop</h1>
      <div className="grid grid-cols-2 w-11/12 md:w-9/12 md:grid-cols-4">
        <EshopItem inHover={inHover} setInHover={setInHover} />
        <Button
          text={"Add to Cart"}
          width={`w-7/12  z-20 `}
          gridPos={
            "col-start-1 col-end-3 row-start-1 row-end-1 mx-auto my-auto"
          }
        />
        <Button
          text={"More info >"}
          width={`w-7/12  z-20 `}
          gridPos={"col-start-1 col-end-3 row-start-1 row-end-1 mx-auto mt-24"}
        />

        <div className="grid grid-cols-2 w-11/12">
          <EshopItem inHover={inHover} setInHover={setInHover} />
          <Button
            text={"Add to Cart"}
            width={`w-7/12  z-20 `}
            gridPos={
              "col-start-1 col-end-3 row-start-1 row-end-1 mx-auto my-auto"
            }
          />
          <Button
            text={"More info >"}
            width={`w-7/12  z-20 `}
            gridPos={
              "col-start-1 col-end-1 row-start-1 row-end-1 mx-auto mt-24"
            }
          />
        </div>
        <div className="grid grid-cols-2 w-11/12">
          <EshopItem inHover={inHover} setInHover={setInHover} />
          <Button
            text={"Add to Cart"}
            width={`w-7/12  z-20 `}
            gridPos={
              "col-start-1 col-end-1 row-start-1 row-end-1 mx-auto my-auto"
            }
          />
          <Button
            text={"More info >"}
            width={`w-7/12  z-20 `}
            gridPos={
              "col-start-1 col-end-3 row-start-1 row-end-2 mx-auto mt-24"
            }
          />
        </div>
      </div>
    </>
  );
};

export default Eshop;
