import TopBar from "@/components/topbar";
import SectionOne from "@/components/pages/sectionOne";

const HomePage = (): JSX.Element => {
  return (
    <div className="main h-[2000px]">
      <TopBar />
      <div className="pt-20 px-14">
        <div className="section-1 flex gap-2">
          <div className="w-1/2">
            <SectionOne />
          </div>
          <div className="w-1/2">hello</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
