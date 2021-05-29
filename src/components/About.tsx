import Button from "./Button";
import IconTextCard from "./IconTextCard";
const About = () => {
  return (
    <div className=" flex flex-col px-2 w-full items-center h-auto mt-10 md:mt-72 lg:mt-64 xl:mt-50">
      <h1 className="text-2xl font-semibold ">BE PART OF SOMETHING GREAT</h1>
      <div className="container flex flex-col justify-between  xl:max-w-2xl mb-5">
        <IconTextCard order={"order-1"} />
        <IconTextCard order={""} />
        <IconTextCard order={"order-1"} />
        <IconTextCard order={""} />
      </div>
      <Button text={"Donate"} width={"w-4/12"} gridPos={""} />
    </div>
  );
};

export default About;
