import Nav from "@/component/nav"
import "./page.css"

export default ()=>{
    return (
        <div className="rt5-page">
            <header className="page-header">
                <h1 className="page-title">关于我们</h1>
                <Nav />
            </header>
            <main className="page-content">
                <section className="section">
                    <h2 className="section-title">参与人员</h2>
                    <ul className="members-list">
                        <li>
                            <div className="member-item">
                                <span className="member-role">组长：</span>
                                <span className="member-name">解镇宇</span>
                                <img src="/xzy.jpeg" alt="解镇宇" className="member-image" />
                            </div>
                        </li>
                        <li>
                            <div className="member-item">
                                <span className="member-role">设计：</span>
                                <span className="member-name">潘勃宇</span>
                                <img src="/pby.png" alt="潘勃宇" className="member-image" />
                            </div>
                        </li>
                        <li>
                            <div className="member-item">
                                <span className="member-role">文稿：</span>
                                <span className="member-name">王舒雨，潘勃宇</span>
                                <div className="member-images">
                                    <img src="/wsy.png" alt="王舒雨" className="member-image" />
                                    <img src="/pby.png" alt="潘勃宇" className="member-image" />
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="member-item">
                                <span className="member-role">图片：</span>
                                <span className="member-name">左鸿瑞</span>
                                <img src="/zhr.png" alt="左鸿瑞" className="member-image" />
                            </div>
                        </li>
                        <li>
                            <div className="member-item">
                                <span className="member-role">网站开发：</span>
                                <span className="member-name">解镇宇</span>
                                <img src="/xzy.jpeg" alt="解镇宇" className="member-image" />
                            </div>
                        </li>
                    </ul>
                    <div className="member-description">
                        <b style={{display: "inline", marginBottom: "1rem", fontSize: "1.1rem", fontWeight: "600", color: "#2c3e2d", letterSpacing: "0.05em"}}>成员简介：</b>
                        <p>我们是山西大学计算机与信息技术学院 2024 级学子，来自先进计算、计科一班、计科二班、人工智能 4 个专业班级，以专业分工共筑廉洁文化传播载体</p>
                    </div>
                </section>
                
                <section className="section">
                    <h2 className="section-title">项目信息</h2>
                    <div className="project-info">
                        <div className="info-row">
                            <h3 className="info-label">网页链接</h3>
                            <a href="http://sxu.xiaohua.host" className="info-link" target="_blank" rel="noopener noreferrer">http://sxu.xiaohua.host</a>
                        </div>
                        <div className="info-row">
                            <h3 className="info-label">GitHub项目地址</h3>
                            <a href="https://github.com/jiexiaohua/webschoolwork.git" className="info-link" target="_blank" rel="noopener noreferrer">https://github.com/jiexiaohua/webschoolwork.git</a>
                        </div>
                        <div className="info-row">
                            <h3 className="info-label">创作时间</h3>
                            <span className="info-value">2025年11月25—29日</span>
                        </div>
                        <div className="info-row">
                            <h3 className="info-label">网站前端技术栈</h3>
                            <ul className="tech-stack">
                                <li>Next.js</li>
                                <li>JavaScript</li>
                                <li>Node.js</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}