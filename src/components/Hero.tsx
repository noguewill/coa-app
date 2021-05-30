import Button from "./Button";
/* import NavBar from "./NavBar"; */
import Nav from "./Nav";

interface Props {
  active: boolean;
}
const Hero: React.FC<Props> = ({ active }) => {
  return (
    <>
      <Nav />

      <video
        autoPlay
        loop
        muted
        className={`object-cover w-098 h-full absolute rounded`}
      >
        <source
          type="video/mp4"
          src="https://thumbs.gfycat.com/NauticalOddballHermitcrab-mobile.mp4"
        ></source>
      </video>

      <div
        className={` absolute w-full h-full z-10 bg-black bg-opacity-10 
        ${!active ? "invisible" : ""}`}
      ></div>

      <div
        className=" w-full h-screen flex flex-col justify-center items-center 
        xl:items-baseline xl:h-11/12 xl:py-72"
      >
        <div
          className={` flex flex-col justify-around w-8/12 z-20 text-augusta-white 
          md:w-6/12 
          animate-rollRight
          xl:w-auto xl:h-auto 
          xl:ml-8 
          mr-8
          md:mr-3
          ${!active ? "hidden" : ""}`}
        >
          <h1 className="text-3xl xl:text-4xl ">BECOME WORTHY OF AUGUSTA</h1>
          <p className="mb-5 mt-2 max-w-sm xl:text-xl xl:mb-6">
            As members of Church of Augusta,
            <br />
            we come with an invitation to a new way of <b>living</b>.
          </p>

          <div className="w-full flex justify-around xl:justify-start">
            <Button
              text={"About us"}
              width={"w-5/12 md:m-w-xs md:w-3/12 xl:w-3/12 mr-10"}
              gridPos={""}
            />
            <Button
              text={"Donate"}
              width={"w-5/12 md:m-w-xs md:w-3/12 xl:w-3/12"}
              gridPos={""}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
