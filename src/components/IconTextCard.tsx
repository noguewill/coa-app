interface Props {
  order: string;
}
const IconTextCard: React.FC<Props> = ({ order }) => {
  return (
    <div className="md:w-8/12 w-full h-2/4 flex justify-between items-center px-2 py-5 flex-grow">
      <i className={`block bg-indigo-500 w-24 h-24 rounded-full ${order}`}></i>
      <p className="w-8/12 ">
        "But I must explain to you how all this mistaken idea of denouncing
        pleasure and praising pain was born and I will give you a complete
        account of the system".
      </p>
    </div>
  );
};

export default IconTextCard;
