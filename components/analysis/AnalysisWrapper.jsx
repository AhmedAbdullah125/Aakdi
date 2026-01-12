import React from "react";
import Header from "../home/Header";
import DayCard from "./finAnalysis/DayCard";
import UserCard from "./finAnalysis/UserCard";
import OrderCard from "./finAnalysis/OrderCard";
import EmployeeCard from "./finAnalysis/EmployeeCard";
import UnitsCard from "./finAnalysis/UnitsCard";
import LocationsCard from "./finAnalysis/LocationsCard";
import LayeringCard from "./finAnalysis/LayeringCard";
import AnalsCard from "./finAnalysis/AnalsCard";


export default function Statistics() {
    const analysisData =
    {
        title: "لوحة التحكم :",
        incomes: [
            {
                name: "المقالات ",
                value: "75",
                valueType: "count",
            },
            {
                name: "الزيارات",
                value: "503221",
                valueType: "count",
            },
            {
                name: "المستخدمين ",
                value: "128293",
                valueType: "count",
            },
            {
                name: "العقود المكتملة ",
                value: "2601",
                valueType: "count",
            },
            {
                name: "العقود الغير المكتملة ",
                value: "60737",
                valueType: "count",
            },
            {
                name: "اجمالي المدفوعات في العقود",
                value: "629892",
                valueType: "price",
            },
            {
                name: "عقود مدفوعه",
                value: "629892",
                valueType: "price",
            },
            {
                name: "المدن",
                value: "629892",
                valueType: "price",
            },

        ]

    }

    const data = [
        {
            title: "التحليــلات المــاليــة :",
            incomes: [
                {
                    name: "دخــل اليــوم",
                    value: "4107.02",
                    valueType: "price",
                    percentage: "+10%",
                    type: "day",
                    link: "/home/financial-analysis/day"

                },
                {
                    name: "دخــل الأسبوع",
                    value: "4107.02",
                    valueType: "price",
                    percentage: "+10%",
                    type: "week",
                    link: "/home/financial-analysis/week"
                },
                {
                    name: "دخــل الشهر",
                    value: "4107.02",
                    valueType: "price",
                    percentage: "+10%",
                    type: "month",
                    link: "/home/financial-analysis/month"
                },
                {
                    name: "دخــل العام",
                    value: "4107.02",
                    valueType: "price",
                    percentage: "+10%",
                    type: "year",
                    link: "/home/financial-analysis/year"
                },
                {
                    name: "إجمالي الدخــل ",
                    value: "4107.02",
                    valueType: "price",
                    percentage: "+10%",
                    type: "total",
                    link: "/home/financial-analysis/total"
                },
            ],
            orders: [
                {
                    name: "طلبات اليــوم المكتمله",
                    value: "411",
                    valueType: "count",
                    percentage: "+10%",
                    type: "day",
                    link: "/home/orders-analysis/day"
                },
                {
                    name: "طلبات الأسبوع المكتمله",
                    value: "411",
                    valueType: "count",
                    percentage: "+10%",
                    type: "week",
                    link: "/home/orders-analysis/week"
                },
                {
                    name: "طلبات الشهر المكتمله ",
                    value: "411",
                    valueType: "count",
                    percentage: "+10%",
                    type: "month",
                    link: "/home/orders-analysis/month"
                },
                {
                    name: "طلبات السنة المكتمله ",
                    value: "411",
                    valueType: "count",
                    percentage: "+10%",
                    type: "year",
                    link: "/home/orders-analysis/year"
                },
                {
                    name: "إجمالي الطلبات المكتمله",
                    value: "411",
                    valueType: "count",
                    percentage: "+10%",
                    type: "total",
                    link: "/home/orders-analysis/total"
                },
            ],
            incompleteOrders: [
                {
                    name: "طلبات اليــوم الغيــر المكتمله",
                    value: "411",
                    valueType: "count",
                    percentage: "+10%",
                    type: "day",
                    link: "/home/incolpleted-orders-analysis/day"
                },
                {
                    name: "طلبات الأسبوع الغيــر المكتمله",
                    value: "411",
                    valueType: "count",
                    percentage: "+10%",
                    type: "week",
                    link: "/home/incolpleted-orders-analysis/week"
                },
                {
                    name: "طلبات الشهر الغيــر المكتمله ",
                    value: "411",
                    valueType: "count",
                    percentage: "+10%",
                    type: "month",
                    link: "/home/incolpleted-orders-analysis/month"
                },
                {
                    name: "طلبات السنة الغيــر المكتمله ",
                    value: "411",
                    valueType: "count",
                    percentage: "+10%",
                    type: "year",
                    link: "/home/incolpleted-orders-analysis/year"
                },
                {
                    name: "إجمالي الطلبات الغيــر المكتمله",
                    value: "411",
                    valueType: "count",
                    percentage: "+10%",
                    type: "total",
                    link: "/home/incolpleted-orders-analysis/total"
                },
            ],
            returns: [
                {
                    name: "مسترجع اليــوم",
                    value: "4107.02",
                    valueType: "price",
                    percentage: "-10%",
                    type: "day",
                    link: "/home/return-analysis/day"

                },
                {
                    name: "مسترجع الأسبوع",
                    value: "4107.02",
                    valueType: "price",
                    percentage: "-10%",
                    type: "week",
                    link: "/home/return-analysis/week"
                },
                {
                    name: "مسترجع الشهر",
                    value: "4107.02",
                    valueType: "price",
                    percentage: "-10%",
                    type: "month",
                    link: "/home/return-analysis/month"
                },
                {
                    name: "مسترجع العام",
                    value: "4107.02",
                    valueType: "price",
                    percentage: "-10%",
                    type: "year",
                    link: "/home/return-analysis/year"
                },
                {
                    name: "إجمالي المسترجع ",
                    value: "4107.02",
                    valueType: "price",
                    percentage: "-10%",
                    type: "totalLoss",
                    link: "/home/return-analysis/totalLoss"
                },
            ],
            expenses: [
                {
                    name: "مصروفات اليــوم",
                    value: "4107.02",
                    valueType: "price",
                    percentage: "10%",
                    type: "day",
                    link: "/home/expense-analysis/day"

                },
                {
                    name: "مصروفات الأسبوع",
                    value: "4107.02",
                    valueType: "price",
                    percentage: "10%",
                    type: "week",
                    link: "/home/expense-analysis/week"

                },
                {
                    name: "مصروفات الشهر",
                    value: "4107.02",
                    valueType: "price",
                    percentage: "10%",
                    type: "month",
                    link: "/home/expense-analysis/month"
                },
                {
                    name: "مصروفات العام",
                    value: "4107.02",
                    valueType: "price",
                    percentage: "10%",
                    type: "year",
                    link: "/home/expense-analysis/year"
                },
                {
                    name: "إجمالي المصروفات ",
                    value: "4107.02",
                    valueType: "price",
                    percentage: "10%",
                    type: "total-regular",
                    link: "/home/expense-analysis/total-regular"
                },
            ],

        }
    ]
    const UserData = [
        {
            title: "تحلــيلات المستخدميــن : ",
            usersAnalysis: [
                {
                    name: "المستخدمين الجدد  / اليــوم",
                    value: "410",
                    valueType: "count",
                    percentage: "+10%",
                    type: "day",
                    link: "/home/user-analysis/day"

                },
                {
                    name: "المستخدمين الجدد  / الأسبوع",
                    value: "410",
                    valueType: "count",
                    percentage: "+10%",
                    type: "week",
                    link: "/home/user-analysis/week"
                },
                {
                    name: "المستخدمين الجدد  / الشهر",
                    value: "410",
                    valueType: "count",
                    percentage: "+10%",
                    type: "month",
                    link: "/home/user-analysis/month"
                },
                {
                    name: "المستخدمين الجدد  / العام",
                    value: "410",
                    valueType: "count",
                    percentage: "+10%",
                    type: "year",
                    link: "/home/user-analysis/year"
                },
                {
                    name: "الإجمالي",
                    value: "410",
                    valueType: "count",
                    percentage: "+10%",
                    type: "total-regular",
                    link: "/home/user-analysis/total"
                }
            ],
            userAvtivity: [
                {
                    name: "معدل نشاط المستخدمين",
                    value: "48%",
                    valueType: "count",
                    percentage: null,
                    type: "onlyNumber",
                    link: "/home/user-analysis/regular"

                },
                {
                    name: "اكثر العملاء طلب مكتمل",
                    value: "100%",
                    valueType: null,
                    percentage: null,
                    type: "onlyNumber",
                },
                {
                    name: "اكثر العملاء طلب مكتمل",
                    value: null,
                    valueType: null,
                    percentage: null,
                    type: "onlyButton",
                    link: "/home/user-analysis/top_completed_orders"
                },
                {
                    name: "اكثر العملاء طلب غير مكتمل",
                    value: null,
                    valueType: null,
                    percentage: null,
                    type: "onlyNumberTwoSpace",
                    link: "/home/user-analysis/top_incompleted_orders"
                }

            ],
            userOrders: [
                {
                    name: "اكثر العملاء طلبـــات",
                    value: null,
                    valueType: null,
                    percentage: null,
                    type: "onlyButton",
                    link: "/home/user-analysis/top_orders"

                },
                {
                    name: "اكثر العملاء استرجاع ",
                    value: null,
                    valueType: null,
                    percentage: null,
                    type: "onlyButton",
                    link: "/home/user-analysis/top_refunds"
                },
                {
                    name: "اكثر العملاء عقارات",
                    value: null,
                    valueType: null,
                    percentage: null,
                    type: "onlyButton",
                    link: "/home/user-analysis/top_properties"
                },
                {
                    name: "اكثر العملاء وحدات",
                    value: null,
                    valueType: null,
                    percentage: null,
                    type: "onlyNumberTwoSpace",
                    link: "/home/user-analysis/top_units"
                }

            ],

        }
    ]
    const OrdersData = [
        {
            title: "تحليــلات الطلبــات  : ",
            orders: [
                {
                    name: "الطلبات المكتملة",
                    value: "4,100",
                    valueType: "count",
                    percentage: null,
                    type: "regular",
                    link: "/home/orders-analysis/completed_orders"

                },
                {
                    name: "الطلبات غير المكتملة",
                    value: "4,100",
                    valueType: "count",
                    percentage: null,
                    type: "regular",
                    link: "/home/orders-analysis/incompleted_orders"
                },
                {
                    name: "طلبات واتساب مكتملة",
                    value: "4,100",
                    valueType: "count",
                    percentage: null,
                    type: "regular",
                    link: "/home/orders-analysis/whatsapp_completed_orders"
                },
                {
                    name: "طلبات واتساب غير مكتملة",
                    value: "4,100",
                    valueType: "count",
                    percentage: null,
                    type: "regular",
                    link: "/home/orders-analysis/whatsapp_incompleted_orders"
                },
                {
                    name: "طلبات مسترجعه",
                    value: "4,100",
                    valueType: "count",
                    percentage: null,
                    type: "regular",
                    link: "/home/orders-analysis/refunded_orders"
                },
                {
                    name: "معدل إكمال الطلبات",
                    value: "4,100",
                    valueType: "count",
                    percentage: null,
                    type: "onlyNumber",
                },

            ],


        }
    ]
    const EmployeesData = [
        {
            title: "تحليــلات الموضفيــن : ",
            employeesAnalysis: [
                {
                    name: "أكثر الموضفين استلم طلب",
                    value: ["ريان", "محمد", "نبيل", "عمر"],
                    valueType: "count",
                    percentage: null,
                    type: "regular",
                    link: "/home/staff-analysis/most_received_orders"

                },
                {
                    name: "أكثر الموضفين وثق طلب",
                    value: ["ريان", "محمد", "نبيل", "عمر"],
                    valueType: "count",
                    percentage: null,
                    type: "regular",
                    link: "/home/staff-analysis/most_completed_orders"

                },
                {
                    name: "أكثر الموضفين اكتسب طلب غير مدفوع",
                    value: ["ريان", "محمد", "نبيل", "عمر"],
                    valueType: "count",
                    percentage: null,
                    type: "regular",
                    link: "/home/staff-analysis/most_incompleted_orders"

                },
                {
                    name: "أكثر الموضفين قدم استرجاع",
                    value: "6,800",
                    valueType: "count",
                    percentage: null,
                    type: "regular",
                    link: "/home/staff-analysis/most_refunded_orders"

                },
                {
                    name: "عدد الموضفين",
                    value: "2,900",
                    valueType: "count",
                    percentage: null,
                    type: "regular",
                    link: "/home/staff-analysis/total"

                },

            ],


        }
    ]
    const UnitsData = [
        {
            title: "تحليــلات العقــارات والوحــدات  : ",
            PropertiesAnalysis: [
                {
                    name: "عقارات المضافة  / اليــوم",
                    value: "410",
                    valueType: "count",
                    percentage: "+10%",
                    type: "day",
                    link: "/home/Properties-analysis/today"

                },
                {
                    name: "عقارات المضافة / الأسبوع",
                    value: "410",
                    valueType: "count",
                    percentage: "+10%",
                    type: "week",
                    link: "/home/Properties-analysis/week"
                },
                {
                    name: "عقارات المضافة / الشهر",
                    value: "410",
                    valueType: "count",
                    percentage: "+10%",
                    type: "month",
                    link: "/home/Properties-analysis/month"
                },
                {
                    name: "عقارات المضافة / العام",
                    value: "410",
                    valueType: "count",
                    percentage: "+10%",
                    type: "year",
                    link: "/home/Properties-analysis/year"
                },
                {
                    name: "الإجمالي",
                    value: "410",
                    valueType: "count",
                    percentage: "+10%",
                    type: "regular",
                    link: "/home/Properties-analysis/total"
                },
                {
                    name: "وحدات مضافة  / اليــوم",
                    value: "410",
                    valueType: "count",
                    percentage: "+10%",
                    type: "day",
                    link: "/home/Units-analysis/today"

                },
                {
                    name: "وحدات مضافة  / الأسبوع",
                    value: "410",
                    valueType: "count",
                    percentage: "+10%",
                    type: "week",
                    link: "/home/Units-analysis/week"
                },
                {
                    name: "وحدات مضافة  / الشهر",
                    value: "410",
                    valueType: "count",
                    percentage: "+10%",
                    type: "month",
                    link: "/home/Units-analysis/month"
                },
                {
                    name: "وحدات مضافة  / العام",
                    value: "410",
                    valueType: "count",
                    percentage: "+10%",
                    type: "year",
                    link: "/home/Units-analysis/year"
                },
                {
                    name: "الإجمالي",
                    value: "410",
                    valueType: "count",
                    percentage: "+10%",
                    type: "regular",
                    link: "/home/Units-analysis/total"
                },

            ],

        }
    ]
    const LocationsData = [
        {
            title: "تحليــلات المــواقــع :",
            locationsAnalysis: [
                {
                    name: "الرياض",
                    value: "4107.02",
                    valueType: "price",
                    percentage: "+11%",
                    type: "onlyNumber"
                },
                {
                    name: "جدة",
                    value: "4107.02",
                    valueType: "price",
                    percentage: "+12%",
                    type: "onlyNumber"
                },
                {
                    name: "الشرقية",
                    value: "4107.02",
                    valueType: "price",
                    percentage: "+13%",
                    type: "onlyNumber"
                },
                {
                    name: "الدمام",
                    value: "4107.02",
                    valueType: "price",
                    percentage: "+10%",
                    type: "onlyNumber"
                }
            ]
        }
    ]
    const layeringData = [
        {
            title: "تحليــلات انتقال الطلب من تصنيف الى تصنيف أخر  : ",
            layeringAnalysis: [
                {
                    name: "طلب جديـد - قيد المعالجة",
                    value: "4,100",
                    valueType: "count",
                    percentage: null,
                    type: "regular",
                    link: "/home/layering-analysis/regular"
                },
                {
                    name: "قيد المعالجة - بانتظار تاكيد بيانات المالك",
                    value: "4,100",
                    valueType: "count",
                    percentage: null,
                    type: "regular",
                    link: "/home/layering-analysis/regular"
                },
                {
                    name: "بانتظار تاكيد بيانات المالك - مطلوب اجراء من العميل",
                    value: "4,100",
                    valueType: "count",
                    percentage: null,
                    type: "regular",
                    link: "/home/layering-analysis/regular"
                },
                {
                    name: "مطلوب اجراء من العميل - تم تاكيد العقار",
                    value: "4,100",
                    valueType: "count",
                    percentage: null,
                    type: "regular",
                    link: "/home/layering-analysis/regular"
                },
                {
                    name: "تم تاكيد العقار - بانتظار اعتماد الطلب",
                    value: "4,100",
                    valueType: "count",
                    percentage: null,
                    type: "regular",
                    link: "/home/layering-analysis/regular"
                },
                {
                    name: "بانتظار اعتماد الطلب - تم التوثيق",
                    value: "4,100",
                    valueType: "count",
                    percentage: null,
                    type: "regular",
                    link: "/home/layering-analysis/regular"
                }
            ]
        }
    ]
    return (
        <>
            <Header page='welcome' title={"التحليــلات"} isMain={false} first="الرئيــسية" firstURL="/" second='التحليــلات' secondURL="/home/analysis" />
            <div className="analysis-cont" dir="rtl">
                <h2>{analysisData.title}</h2>
                <div className="category-cont">
                    <main className="analysis-wrapper">

                        {
                            analysisData.incomes?.map((item, index) => (
                                <AnalsCard key={index} item={item} />
                            ))
                        }
                    </main>
                </div>
                {
                    data.map((item, index) => (
                        <div className="category-cont" key={index}>
                            <h2>{item.title}</h2>
                            <main className="analysis-wrapper">
                                {item.incomes.map((card, index) => (
                                    <DayCard key={index} item={card} />
                                ))}
                            </main>
                            <main className="analysis-wrapper">
                                {item.orders.map((card, index) => (
                                    <DayCard key={index} item={card} />
                                ))}
                            </main>
                            <main className="analysis-wrapper">
                                {item.incompleteOrders.map((card, index) => (
                                    <DayCard key={index} item={card} />
                                ))}
                            </main>
                            <main className="analysis-wrapper">
                                {item.returns.map((card, index) => (
                                    <DayCard key={index} item={card} />
                                ))}
                            </main>
                            <main className="analysis-wrapper">
                                {item.expenses.map((card, index) => (
                                    <DayCard key={index} item={card} />
                                ))}
                            </main>
                        </div>
                    ))
                }
                {
                    UserData.map((item, index) => (
                        <div className="category-cont" key={index}>
                            <h2>{item.title}</h2>
                            <main className="analysis-wrapper">
                                {item.usersAnalysis.map((card, index) => (
                                    <UserCard key={index} item={card} />
                                ))}
                            </main>
                            <main className="analysis-wrapper">
                                {item.userAvtivity.map((card, index) => (
                                    <UserCard key={index} item={card} />
                                ))}
                            </main>
                            <main className="analysis-wrapper">
                                {item.userOrders.map((card, index) => (
                                    <UserCard key={index} item={card} />
                                ))}
                            </main>
                        </div>
                    ))
                }
                {
                    OrdersData.map((item, index) => (
                        <div className="category-cont" key={index}>
                            <h2>{item.title}</h2>
                            <main className="orders-wrapper">
                                {item.orders.map((card, index) => (
                                    <OrderCard key={index} item={card} />
                                ))}
                            </main>
                        </div>
                    ))
                }
                {
                    EmployeesData.map((item, index) => (
                        <div className="category-cont" key={index}>
                            <h2>{item.title}</h2>
                            <main className="orders-wrapper">
                                {item.employeesAnalysis.map((card, index) => (
                                    <EmployeeCard key={index} item={card} />
                                ))}
                            </main>
                        </div>
                    ))
                }
                {
                    UnitsData.map((item, index) => (
                        <div className="category-cont" key={index}>
                            <h2>{item.title}</h2>
                            <main className="analysis-wrapper">
                                {item.PropertiesAnalysis.map((card, index) => (
                                    <UnitsCard key={index} item={card} />
                                ))}
                            </main>
                        </div>
                    ))
                }
                {
                    LocationsData.map((item, index) => (
                        <div className="category-cont" key={index}>
                            <h2>{item.title}</h2>
                            <main className="locations-wrapper">
                                {item.locationsAnalysis.map((card, index) => (
                                    <LocationsCard key={index} item={card} />
                                ))}
                            </main>
                        </div>
                    ))
                }
                {
                    layeringData.map((item, index) => (
                        <div className="category-cont" key={index}>
                            <h2>{item.title}</h2>
                            <main className="layering-wrapper">
                                {item.layeringAnalysis.map((card, index) => (
                                    <LayeringCard key={index} item={card} />
                                ))}
                            </main>
                        </div>
                    ))
                }
            </div>
        </>
    );
}