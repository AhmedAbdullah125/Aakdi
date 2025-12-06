export default function LayeringCard({ item }) {
    return (
        <div className="dayCard">
            <div className="r-side">
                <div className="upper">
                    <span className="card-title">{item.name}</span>
                    <div className="percentage">
                        <span>{item.percentage}</span>
                    </div>
                </div>
                <div className="lower">
                    <span className={`${item.type === "total" ? "total-value" : item.type === "totalLoss" ? "total-loss" : ""}`}>{item.value}</span>
                </div>
            </div>
        </div>
    );
}