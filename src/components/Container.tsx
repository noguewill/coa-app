interface Props {
  children: any;
}
const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col w-full h-full mt-35rem absolute items-center">
      {children}
    </div>
  );
};

export default Container;
