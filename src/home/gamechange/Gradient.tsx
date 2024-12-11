
const Gradient = () => {
  return (
    <div className="sticky top-[-10%] left-0">
      <div className="absolute  inset-0 inline-flex justify-center flex-row">
        <div className="relative w-full ml-[-70%] mt-[10%] inline-flex flex-row justify-center">
          <div className="w-[30%]  left-[20%] absolute rounded-full top-[10%] h-[300px]  rotate-90 opacity-50 blur-[150px] bg-[#AE49B0]" />
          <div className="w-[20%]  left-[25%] absolute h-[200px] opacity-50 blur-[150px] rotate-90 bg-[#CB4371]" />
          <div className="w-[30%] absolute top-[100%] left-[23%]  rounded-full h-[200px] rotate-90 opacity-50 blur-[150px] bg-[#493BB9]" />
        </div>
      </div>
      <div className="flex absolute top-[-40%] left-[-25%] z-10 w-[40vw] justify-center items-center h-[40vw] rounded-full border-[#4f4f4f] border">
        <div className="w-[25vw] h-[25vw] rounded-full border-[#4f4f4f] border"></div>
      </div>
    </div>
  );
};

export default Gradient;
