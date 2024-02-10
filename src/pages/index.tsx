import TopBar from "@/components/topbar";

const HomePage = () => {
  return (
    <div className="main h-[2000px]">
      <TopBar />
      <div className="pt-16">Hello world</div> {/* Add padding top to account for the top bar */}
    </div>
  );
};

export default HomePage;
