import Image from "next/image";

interface ProductBasicCardProps {
  image: string;
  name: string;
  description: string;
}

export default function ProductBasicCard({ ...props }: ProductBasicCardProps) {
  return (
    <>
      <div className="max-w-64 mx-auto bg-white rounded-md overflow-hidden shadow-lg">
        <Image
          className="w-full h-56 object-cover object-center"
          src={props.image}
          width={500}
          height={500}
          alt={props.name}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-lg md:text-xl mb-2">{props.name}</div>
          <p className="text-gray-700 text-sm md:text-base">
            {props.description}
          </p>
        </div>
      </div>
    </>
  );
}
