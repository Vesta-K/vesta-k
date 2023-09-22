export default function CardWorker({ item }: { item: string }) {
  return (
    <div className="w-[300px] h-[450px]  bg-transparent cursor-pointer group [perspective:3000px]">
      <div
        key={item}
        className="relative [transform-style:preserve-3d] transition ease-in-out group-hover:[transform:rotateY(180deg)] w-full h-full duration-[800ms]"
      >
        <div className=" absolute rounded-xl bg-blue-gray-500 w-full h-full">
          <div className="w-full rounded-xl h-full bg-blue-gray-700 shadow-xl"></div>
        </div>
        <div className="absolute rounded-xl [backface-visibility:hidden] bg-black w-full h-full shadow-xl"></div>
      </div>
    </div>
  );
}
