interface Props {
  order: string;
  children: string;
}

const IconTextCard: React.FC<Props> = ({ order, children }) => {
  return (
    <div
      className={`bg-augusta-white w-3/4 h-full ${order} p-5 iconTextCard_boxShadow rounded-3xl
     `}
    >
      <div className="flex flex-col items-center justify-center">
        <i className={`bg-indigo-500 block w-24 h-24 rounded-full mb-10 `}></i>
        <p className="text-center">{children}</p>
      </div>
    </div>
  );
};

export default IconTextCard;
