import Button from "./Button";
import IconTextCard from "./IconTextCard";
const About = () => {
  return (
    /*     <div className=" flex flex-col w-098 items-center h-auto  ">
      <h1 className="text-4xl font-semibold mb-20">
        BE PART OF SOMETHING GREAT
      </h1>
      <div className=" flex flex-col justify-between items-center xl:max-w-5xl mb-5">
        <IconTextCard order={"order-1"} />
        <IconTextCard order={""} />
        <IconTextCard order={"order-1"} />
        <IconTextCard order={""} />
      </div>
      <Button text={"Donate"} width={"w-4/12"} />
    </div> */

    <div
      className="bg-augusta-white w-098 h-auto 
    grid grid-cols-1 place-items-center  gap-y-10
    md:grid-cols-2 
    xl:grid-cols-4 xl:py-10  xl:gap-y-28"
    >
      <h1 className="text-3xl xl:text-5xl xl:col-start-2 xl:col-end-4">
        BE PART OF A REVOLUTION
      </h1>
      <IconTextCard order={"row-start-2 xl:w-5/6 xl:col-start-1"}>
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced
        below for those interested. Sections 1.10.32.
      </IconTextCard>

      <IconTextCard order={"row-start-3 xl:row-start-2  xl:col-start-2 "}>
        This book is a treatise on the theory of ethics, very popular during the
        Renaissance. The first line of Lorem Ipsum.
      </IconTextCard>

      <IconTextCard order={"row-start-4 xl:row-start-2  xl:col-start-3"}>
        "It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. "
      </IconTextCard>

      <IconTextCard order={"row-start-5 xl:row-start-2  xl:col-start-4 p-5"}>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour.
      </IconTextCard>

      <Button
        text={"Donate"}
        width={"xl:w-5/12 w-6/12 "}
        gridPos={
          "row-start-6 xl:row-start-3 xl:row-end-4 xl:col-start-2 xl:col-end-4"
        }
      />
    </div>
  );
};

export default About;
