interface Props {
  text: string;
  width: string;
  gridPos: string;
}

const Button: React.FC<Props> = ({ text, width, gridPos }) => {
  return (
    <button
      className={`bg-augusta-blue hover:bg-augusta-red rounded hover:transition  duration-200 ease-in-out ${width} h-10 lg:w-1/12 cursor-pointer ${gridPos}`}
    >
      {text}
    </button>
  );
};

export default Button;
