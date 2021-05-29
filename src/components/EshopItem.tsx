interface Props {
  inHover: boolean;
  setInHover: Function;
}
const EshopItem: React.FC<Props> = ({ inHover, setInHover }) => {
  return (
    <>
      <div className=" w-full col-start-1 col-end-3 row-start-1 row-end-3  ">
        <img
          className="bg-cover w-full "
          alt=""
          src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/26/3c/87.jpg"
        />
      </div>
    </>
  );
};

export default EshopItem;
