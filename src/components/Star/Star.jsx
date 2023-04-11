import Image from "next/image";

export const Star = ({selected = false}) => {
    return <Image src={selected ? "/images/star-gold.png" : "/images/star.png"} alt="" width={20} height={20}/>;
}