
const MainGradient = () => {
  return (
    <div>
      <div className="absolute  inset-0 inline-flex justify-center flex-row">
        <div className="relative w-full inline-flex flex-row justify-center">
          <div className="w-[30%] absolute h-[300px] top-[25%] left-[25%] opacity-50 blur-[120px]  bg-[#CB4371]" />
          <div className="w-[30%] absolute rounded-full top-[35%] left-[45%] h-[300px]  opacity-50 blur-[120px] bg-[#AE49B0]" />
          <div className="w-[30%] absolute top-[40%] left-[33%] rounded-full h-[200px]  opacity-50 blur-[120px] bg-[#493BB9]" />
        </div>
      </div>
      <div className="flex absolute top-[12%] left-[29.7vw] z-10 w-[40vw] justify-center items-center h-[40vw] rounded-full border-[#4f4f4f] border">
        <div className="w-[28vw] h-[28vw] rounded-full border-[#4f4f4f] border"></div>
      </div>
    </div>
  );
};

export default MainGradient;
