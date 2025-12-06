import Image from "next/image";
import rial from "@/public/images/rial.svg";
import redRial from "@/public/images/redRial.svg";
import dollarIcon from "@/public/images/dollarIcon.svg";
import Link from "next/link";
export default function DayCard({ item }) {

    return (
        <div className="dayCard">
            <div className="r-side">
                <div className="upper">
                    <span className="card-title">{item.name}</span>
                    <div className="percentage">
                        <span className={item.percentage.includes("-") ? "loss" : "success"}>{item.percentage}</span>
                        <i className={item.percentage.includes("-") ? "fa-solid fa-arrow-down loss" : "fa-solid fa-arrow-up success"}></i>
                    </div>
                </div>
                <div className="lower">
                    <span className={`${item.type === "total" ? "total-value" : item.type === "totalLoss" ? "total-loss" : ""}`}>{item.value}</span>
                    {
                        item.valueType === "price" ? <Image src={item.type === "totalLoss" ? redRial : rial} alt="Aakdi" width={20} height={20} /> : null
                    }
                </div>
            </div>
            <div className="l-side">
                <div className="upper">
                    <Image src={dollarIcon} alt="Aakdi" width={20} height={20} />
                </div>
                <Link href={item.link}>
                    عــرض
                </Link>
            </div>
        </div>
    );
}