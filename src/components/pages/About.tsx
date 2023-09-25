export default function About() {
  return (
    <section className="mx-auto h-full w-full max-w-[1280px] py-10 px-4 xl:px-0 space-y-10">
      <div className="w-full flex flex-row flex-wrap justify-center gap-y-10 gap-x-10 xl:justify-between items-center">
        <div className="w-1/4 min-w-[280px] h-[230px] bg-white rounded-xl flex flex-col"></div>
        <div className="w-1/4 min-w-[280px] h-[230px] bg-white rounded-xl flex flex-col"></div>
        <div className="w-1/4 min-w-[280px] h-[230px] bg-white rounded-xl flex flex-col"></div>
      </div>
      <div className="w-full h-screen bg-white rounded-xl"></div>
    </section>
  );
}
