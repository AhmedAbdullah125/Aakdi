import Image from "next/image";
import employeeIcon from "@/public/images/employeeicon.svg";
import Link from "next/link";
export default function EmployeeCard({ item }) {

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
                    {
                        item.type === "arrayOfNames" ? item.value.map((name, index) => <span key={index} className="array-of-names">{name + " "} {index !== item.value.length - 1 ? ", " : ""}</span>) : <span>{item.value + " "}</span>
                    }
                </div>
            </div>
            <div className="l-side">
                <div className="upper">
                    <Image src={employeeIcon} alt="Aakdi" width={20} height={20} />
                </div>
                {item.link ? <Link href={item.link}>عــرض</Link> : null}
            </div>
        </div>
    );
}