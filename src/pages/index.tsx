import TopBar from "@/components/topbar";

const HomePage = (): JSX.Element => {
  return (
    <div className="main h-[2000px]">
      <TopBar />
      <div className="pt-16">Hello world</div>
    </div>
  );
};

export default HomePage;
