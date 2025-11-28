import Nav from "@/component/nav"
import "./page.css"

const stories = [
    {
        category: "教师篇",
        image: "/temp.jpg",
        title: "山西大学文学院张教授——“廉洁从教，方能育人入心”",
        paragraphs: [
            "在山西大学文学院，张教授从教三十载，始终秉持“学高为师，身正为范”的信念。他的办公室朴素整洁，书架上最珍贵的不是奖杯证书，而是历届学生寄来的书信与笔记。",
            "曾有一位学生家长为让孩子在毕业论文中获评高分，特意送来名贵茶叶与购物卡。张教授当即婉拒，语气温和却坚定：“学生的成绩要靠真才实学，我的责任是公平对待每一个人，这是教师的底线。”家长深受触动，其子最终凭自身努力顺利毕业，并在感谢信中写道：“您教会我的不仅是知识，更是为人之道。”",
            "张教授亦常默默资助贫困学子，匿名代缴学费、添置书籍，却从不声张。他说：“教师不仅要传递知识，更要传递温度与正气。廉洁从教不是口号，而是融入一言一行的自觉。唯有身正，才能育人入心。”三十年来，他培养的众多学生已成为教师、公务员、企业家，他们身上，都延续着张教授所坚守的那份清正风骨。"
        ]
    },
    {
        category: "学生篇",
        image: "/temp.jpg",
        title: "山西大学计算机学院小李——“学术诚信是底线，不能有丝毫动摇”",
        paragraphs: [
            "山西大学计算机学院的2021级学生小李，在一次课程设计中，发现同组同学私自抄袭了网络代码。面对友情与原则的冲突，他选择坦诚沟通，对同学说：“我们投入时间做课程设计，本是为了提升自己。抄袭不仅违背学术道德，也辜负了自己的努力。”",
            "在他的真诚劝说下，该同学主动向老师说明情况，二人携手重新完成设计。此后，小李更在班级发起“学术诚信倡议”，组织同学共学规范、分享案例，推动形成“以诚治学”的班级氛围。",
            "“学术诚信是立身之本，一旦失守，将失去信任、影响未来。”小李这样说道，“作为山大学子，我们应以校史中的廉洁先贤为榜样，坚守底线，做诚实之人。”因其在学术诚信方面的表率作用，他荣获“校级学术诚信标兵”称号。"
        ]
    }
]

export default ()=>{
    return (
        <div className="rt4-page">
            <header className="page-header">
                <h1 className="page-title">校园故事——身边的清风榜样</h1>
                <Nav />
            </header>
            <main className="page-content">
                {stories.map(story => (
                    <section className="story-section" key={story.category}>
                        <h3 className="story-category">{story.category}</h3>
                        <article className="story-card">
                            <img src={story.image} alt={story.title} className="story-image" />
                            <div className="story-content">
                                <h5 className="story-title">{story.title}</h5>
                                {story.paragraphs.map((text, index) => (
                                    <p key={index}>{text}</p>
                                ))}
                            </div>
                        </article>
                    </section>
                ))}
            </main>
        </div>
    )
}