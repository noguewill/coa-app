import Button from "./Button";
import IconTextCard from "./IconTextCard";
const About = () => {
  return (
    <div
      className=" w-098 h-auto 
    grid grid-cols-1 place-items-center  gap-y-10
    md:grid-cols-2 
    xl:grid-cols-4 xl:py-10  xl:gap-y-28"
    >
      <h1 className="text-xl xl:text-5xl xl:col-start-2 xl:col-end-4">
        JOIN US IN 4 EASY STEPS!
      </h1>
      <IconTextCard
        order={"row-start-2 xl:w-5/6 xl:col-start-1"}
        icon={
          "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        }
      >
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced
        below for those interested. Sections 1.10.32.
      </IconTextCard>

      <IconTextCard
        order={"row-start-3 xl:row-start-2  xl:col-start-2 "}
        icon={
          "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        }
      >
        This book is a treatise on the theory of ethics, very popular during the
        Renaissance. The first line of Lorem Ipsum.
      </IconTextCard>

      <IconTextCard
        order={"row-start-4 xl:row-start-2  xl:col-start-3 "}
        icon={
          "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        }
      >
        "It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. "
      </IconTextCard>

      <IconTextCard
        order={"row-start-5 xl:row-start-2  xl:col-start-4 p-5"}
        icon={
          "M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z"
        }
      >
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration.
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
