"use client";

import Nav from "@/component/nav"
import Card from "@/component/cord"
import "./page.css"

export default function(){
    return (
        <div className="home-page">
            <header className="page-header">
                <h1 className="main-title">校园清风廉韵</h1>
                <Nav />
            </header>
            
            {/* 视觉图片：4K动态水墨长卷（山西大学坞城校区南门、令德湖、白莲花、青竹、博雅塔，配朱红色"清风廉韵"篆刻印章）  */}
            <section className="hero-section">
                <div className="hero-images">
                    <div className="image-gallery">
                        <img src="/temp.jpg" alt="山西大学坞城校区南门" className="gallery-image" />
                        <img src="/temp.jpg" alt="令德湖" className="gallery-image" />
                        <img src="/temp.jpg" alt="白莲花" className="gallery-image" />
                        <img src="/temp.jpg" alt="青竹" className="gallery-image" />
                        <img src="/temp.jpg" alt="博雅塔" className="gallery-image" />
                    </div>
                    <div className="seal-container">
                        {/* 右侧印章：朱红色"清风廉韵"篆刻印章 */}
                        <img src="/temp.jpg" alt="清风廉韵" className="seal-image" />
                    </div>
                </div>
            </section>
            
            <section className="poetry-section">
                <div className="poetry-text">
                    <p className="poetry-line">清风育德守初心，廉洁笃行担使命；</p>
                    <p className="poetry-line">竹影扫阶尘不动，莲风拂塘心自明。</p>
                </div>
            </section>

            <section className="cards-section">
                <div className="cards-container">
                    <Card name={"廉韵溯源"} routerName={"/rt1"}/>
                    <Card name={"廉脉传承"} routerName={"/rt2"}/>
                    <Card name={"关于我们"} routerName={"/rt5"}/>
                </div>
            </section>
            
            {/* 底部水墨分割线及"令德""笃行"小印章  */}
            <footer className="page-footer">
                <div className="divider-line">
                    <img src="/temp.jpg" alt="水墨分割线" className="divider-image" />
                </div>
                <div className="footer-seals">
                    <img src="/temp.jpg" alt="令德" className="footer-seal" />
                    <img src="/temp.jpg" alt="笃行" className="footer-seal" />
                </div>
            </footer>
        </div>
    );
}