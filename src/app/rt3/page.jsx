import Nav from "@/component/nav"
import "./page.css"

const guideData = [
    {
        title: "学术廉洁",
        items: [
            "论文写作规范引用，杜绝任何抄袭剽窃",
            "严守考场纪律，维护考试公平公正",
            "主动参与学术诚信教育，筑牢科研道德底线"
        ]
    },
    {
        title: "生活廉洁",
        items: [
            "践行“光盘行动”，珍惜一粥一饭",
            "理性消费不攀比，简约生活显品格",
            "爱护公物节能环保，共建绿色校园"
        ]
    },
    {
        title: "未来担当",
        items: [
            "明晰职场廉洁底线，筑牢职业发展根基",
            "积极参与廉洁培训，提前适应职场要求",
            "勇担社会责任，争做廉洁文化传播者"
        ]
    }
]

export default ()=>{
    return (
        <div className="rt3-page">
            <header className="page-header">
                <h1 className="page-title">当代践行——青年当笃行</h1>
                <Nav />
            </header>

            <main className="page-content">
                <section className="section">
                    <h5 className="guide-title">青年学子的廉洁践行指南</h5>
                    <div className="guide-cards">
                        {guideData.map(card => (
                            <div className="guide-card" key={card.title}>
                                <h3 className="card-title">{card.title}</h3>
                                <ul className="card-list">
                                    {card.items.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    )
}