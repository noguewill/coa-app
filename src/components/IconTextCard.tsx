interface Props {
  order: string;
  children: string;
  icon: string;
}

const IconTextCard: React.FC<Props> = ({ order, children, icon }) => {
  return (
    <div
      className={`bg-augusta-white w-5/6  ${order} py-20 px-5 iconTextCard_boxShadow rounded-3xl
     `}
    >
      <div className="flex flex-col items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=" block w-16 h-16 rounded-full mb-10 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d={icon}
          />
        </svg>
        <p className="text-center">{children}</p>
      </div>
    </div>
  );
};

export default IconTextCard;
