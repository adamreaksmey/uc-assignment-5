import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import HP1 from "@/images/pages/HP_1.jpeg";
// import Image from "next/image";

const SectionOne = (): React.JSX.Element => {
  return (
    <>
      <Card
        className="py-4 w-full card-cover transition-all duration-300 transform-gpu hover:scale-90 cursor-pointer hover:opacity-90"
        fullWidth={true}
      >
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-base uppercase font-bold">Daily Prophet</p>
          <small className="text-default-500">12 Chapters</small>
          <div className="font-bold text-large">The Philosopher's Stone</div>
        </CardHeader>
        <CardBody className="overflow-visible py-2 flex flex-col gap-3">
          <Image
            alt="Card background"
            className="object-cover rounded-xl w-full"
            src={HP1.src}
            height={50}
          />
          <div className="flex gap-2">
            <Button color="primary" variant="shadow">
              Review Book
            </Button>
            <Button color="danger" variant="bordered">
              Add To Cart
            </Button>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default SectionOne;
