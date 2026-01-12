import Image from "next/image";
import rial from "@/public/images/rial.svg";
import redRial from "@/public/images/redRial.svg";
import dollarIcon from "@/public/images/dollarIcon.svg";
import Link from "next/link";
export default function AnalsCard({ item }) {

    return (
        <div className="dayCard">
            <div className="r-side">
                <div className="upper">
                    <span className="card-title">{item.name}</span>

                </div>
                <div className="lower">
                    <span className={`total-value`}>{item.value}</span>
                    {
                        item.valueType === "price" ? <Image src={item.type === "totalLoss" ? redRial : rial} alt="Aakdi" width={20} height={20} /> : null
                    }
                </div>
            </div>
            <div className="l-side">

                <Link href={"#"}>
                    عــرض
                </Link>
            </div>
        </div>
    );
}