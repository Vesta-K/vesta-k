import AboutCompany from "../blocks/blockMain/aboutCompany/AboutCompany";
import Hero from "../blocks/blockMain/hero/Hero";
import UsWorkers from "../blocks/blockMain/usWorkers/UsWorkers";

export default function MainPage() {
  return (
    <div className="mx-auto h-full w-full max-w-[1280px] py-10 px-4 xl:px-0 space-y-10">
      <Hero />
      <AboutCompany />
      <UsWorkers />
    </div>
  );
}
