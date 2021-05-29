const testimonialAvatar = [
  {
    name: "-Pope Francis",
    profileImg:
      "https://s.rfi.fr/media/display/80cfc1a2-95d7-11eb-b350-005056bf87d6/w:980/p:16x9/2021-04-04T104747Z_1666368582_RC2YOM9G6F6Z_RTRMADP_3_RELIGION-EASTER-POPE.webp",
    testimonial:
      "Certainly one of the most revolutionaries organizations of the 21st century",
  },
  {
    name: "-Dalai Lama",
    profileImg:
      "https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_429/MTc0NjQwMTU4NzIwMjA2Nzkz/10-greatest-religious-leaders-in-history.webp",
    testimonial: "Augusta is an incredible deity, because she's actually real",
  },
  {
    name: "-Binyamin Netanyahu",
    profileImg:
      "https://veja.abril.com.br/wp-content/uploads/2017/12/benjamin-netanyahu-20171207-0001.jpg",
    testimonial: "I don't think i'm jew anymore",
  },
];

const Testimonal = () => {
  return (
    <div className=" w-full h-auto flex flex-col justify-center items-center ">
      <h1 className="text-2xl font-semibold mt-10">Testimonials:</h1>
      <div className="bg-indigo-300 my-1p rounded-lg w-10/12 h-48 md:w-8/12 lg:w-5/12  flex justify-between items-center my-10">
        <div className="bg-indigo-500 block rounded-tl-lg rounded-bl-lg  w-32 h-full">
          <img
            alt="Pope Francis giving a speech"
            src={testimonialAvatar[2].profileImg}
            className="rounded-tl-lg rounded-bl-lg  object-cover w-full h-full"
          />
        </div>
        <p className="w-7/12 mr-2">
          {testimonialAvatar[2].testimonial}
          <br />
          {testimonialAvatar[2].name}
        </p>
      </div>
    </div>
  );
};

export default Testimonal;
