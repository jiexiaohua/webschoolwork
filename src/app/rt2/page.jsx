import Nav from "@/component/nav"
import "./page.css"

export default ()=>{
    return(
        <div className="rt2-page">
            <header className="page-header">     
                <h1 className="page-title">廉脉传承——历史中的清风</h1>
                <Nav />
            </header>
            
            <main className="page-content">
                <section className="section">
                    <div className="section-layout">
                        <h4 className="section-side-title">古代廉洁典范</h4>
                        <div className="section-content">
                            <div className="category-card">
                                <h5 className="category-title">山西历史名人</h5>
                                <div className="figures-list">
                                    <div className="figure-card">
                                        <img src="/temp.jpg" alt="司马光" className="figure-image" />
                                        <div className="figure-content">
                                            <h3 className="figure-name">司马光（山西夏县人）</h3>
                                            <p className="figure-description">司马光一生清贫自守，官至宰相却因无钱安葬妻子，只能"典地葬妻"，其清俭之风令人动容。他在《训俭示康》中写下"由俭入奢易，由奢入俭难"的警世名言，自己更是身体力行，日常饮食简单，衣着朴素，坚决不收受任何馈赠。在编纂《资治通鉴》的十九年间，他始终秉持史家操守，拒绝一切请托贿赂，确保史书客观公正。如今夏县司马温公祠内的"忠清粹德之碑"，正是对他廉洁一生的最好见证。</p>
                                        </div>
                                    </div>
                                    
                                    <div className="figure-card">
                                        <img src="/temp.jpg" alt="于成龙" className="figure-image" />
                                        <div className="figure-content">
                                            <h3 className="figure-name">于成龙（山西永宁人）</h3>
                                            <p className="figure-description">于成龙被誉为"天下廉吏第一"，从广西罗城知县到两江总督，始终与百姓同甘共苦。在罗城时，他住茅屋、食粗粮，带领民众开荒修渠；任两江总督期间，他每日粗米青菜，被百姓亲切称为"于青菜"。他严惩贪腐，平反冤狱，离任时百姓沿途相送，哭声不绝。康熙帝特赐"天下廉吏第一"匾额，表彰其廉洁奉公的高尚品格。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="category-card">
                                <h5 className="category-title">全国经典人物</h5>
                                <div className="figures-list">
                                    <div className="figure-card">
                                        <img src="/temp.jpg" alt="包拯" className="figure-image" />
                                        <div className="figure-content">
                                            <h3 className="figure-name">包拯（安徽合肥人）</h3>
                                            <p className="figure-description">包拯以"铁面无私"著称，任端州知州时，当地盛产名贵端砚，历任官员多借机敛取，而他任职三年，离任时"不持一砚归"。在开封府任上，他执法如山，不避权贵，无论贫富贵贱一律依法办事。他生活简朴，临终前立下铁训：后世子孙为官贪腐者，不得归葬祖茔。这铮铮家规，彰显出其刚正不阿的品格。</p>
                                        </div>
                                    </div>
                                    
                                    <div className="figure-card">
                                        <img src="/temp.jpg" alt="海瑞" className="figure-image" />
                                        <div className="figure-content">
                                            <h3 className="figure-name">海瑞（海南琼山人）</h3>
                                            <p className="figure-description">海瑞是明代著名清官，任淳安知县时，他革除陋规，自奉俭约，穿布衣、吃粗粮，妻子亲自织布做饭。有官员借视察之名索贿，他只以粗茶淡饭招待。他敢于直谏，曾上书批评嘉靖皇帝荒废朝政，险些被杀。海瑞一生清廉，死后家中仅余葛布帷帐和几箱旧书，丧事全靠同僚集资办理。"海青天"的美名，至今仍在民间传颂。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="section">
                    <div className="section-layout">
                        <h4 className="section-side-title">近现代廉洁实践</h4>
                        <div className="section-content">
                            <div className="category-card">
                                <h5 className="category-title">革命先辈</h5>
                                <div className="figures-list">
                                    <div className="figure-card">
                                        <img src="/temp.jpg" alt="焦裕禄" className="figure-image" />
                                        <div className="figure-content">
                                            <h3 className="figure-name">焦裕禄（河南兰考人）</h3>
                                            <p className="figure-description">1962年，焦裕禄赴任河南兰考县委书记，面对严重的内涝、风沙、盐碱三害，他带领群众奋力抗争。他与百姓同吃同住，住草棚、睡土炕，拒绝任何特殊待遇。即便身患肝癌，他仍忍着剧痛坚持工作，骑着自行车走遍兰考每一个角落。临终前，他仍惦记着治沙事业，用生命诠释了"为人民服务"的真谛。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="category-card">
                                <h5 className="category-title">校史基因</h5>
                                <div className="figures-list">
                                    <div className="figure-card">
                                        <img src="/temp.jpg" alt="李提摩太" className="figure-image" />
                                        <div className="figure-content">
                                            <h3 className="figure-name">李提摩太（山西大学首任校长）</h3>
                                            <p className="figure-description">作为山西大学堂的创办者之一，李提摩太廉洁办学，将各方捐款全部用于校舍建设、设备购置和师资引进。他婉拒清政府的高额俸禄，只领取普通教授的薪金。为提升教学质量，他亲赴欧洲延聘教师、采购图书仪器，还将个人藏书捐赠给学校。他的廉洁作风，为山西大学奠定了"诚信办学、育人为本"的优良传统。</p>
                                        </div>
                                    </div>
                                    
                                    <div className="figure-card">
                                        <img src="/temp.jpg" alt="赵宗复" className="figure-image" />
                                        <div className="figure-content">
                                            <h3 className="figure-name">赵宗复（民国时期山西大学教授）</h3>
                                            <p className="figure-description">赵宗复执教山西大学期间，治学严谨，廉洁从教。他从不接受学生馈赠，即便是亲手制作的小礼物也婉言谢绝，并教导学生"用心向学就是最好的回报"。他坚持学术公正，评分严格按标准执行。抗战时期，他积极投身救亡运动，保护进步学生，其清正品格和爱国精神深深感染着一代代学子。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}