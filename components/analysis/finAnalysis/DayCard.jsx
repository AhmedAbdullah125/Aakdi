import Image from "next/image";
import rial from "@/public/images/rial.svg";
import dollarIcon from "@/public/images/dollarIcon.svg";
export default function DayCard({item}) {

    return (
        <div className="dayCard">
            <div className="r-side">
                <div className="upper">
                    <span className="card-title">{item.name}</span>
                    <div className="percentage">
                        <span>{item.percentage}</span>
                        <i className="fa-solid fa-arrow-up"></i>
                    </div>
                </div>
                <div className="lower">
                    <span className={`${item.type === "total" ? "total-value" : ""}`}>{item.value}</span>
                    <Image src={rial} alt="Aakdi" width={20} height={20} />
                </div>
            </div>
            <div className="l-side">
                <div className="upper">
                    <Image src={dollarIcon} alt="Aakdi" width={20} height={20} />
                </div>
                    <button>عــرض</button>
            </div>
        </div>
    );
}