import Image from "next/image";
import rial from "@/public/images/rial.svg";
import redRial from "@/public/images/redRial.svg";
import orderIcon from "@/public/images/ordericon.svg";
import Link from "next/link";
export default function OrderCard({ item }) {

    return (
        <div className={`dayCard ${item.type === "onlyButton" ? "onlyButton" : item.type === "onlyNumberTwoSpace" ? "col-span-2" : ""}`}>
            <div className="r-side">
                <div className="upper">
                    <span className="card-title">{item.name}</span>
                    <div className="percentage">
                        {item.percentage ? <span className={item.percentage.includes("-") ? "loss" : "success"}>{item.percentage}</span> : null}
                        {item.percentage ? <i className={item.percentage.includes("-") ? "fa-solid fa-arrow-down loss" : "fa-solid fa-arrow-up success"}></i> : null}
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
                    <Image src={orderIcon} alt="Aakdi" width={20} height={20} />
                </div>
                {item.link ? <Link href={item.link}>عــرض</Link> : null}
            </div>
        </div>
    );
}