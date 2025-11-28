import Nav from "@/component/nav"
import "./page.css"

export default ()=>{
    return (
        <div className="rt1-page">
            <header className="page-header">
               
                <h1 className="page-title">廉韵溯源——为何守廉</h1>
                 <Nav />
            </header>
            
            <main className="page-content">
                <section className="section">
                    <h2 className="section-title">廉洁的文化基因</h2>
                    
                    <div className="subsection">
                        <h4 className="subsection-title">古籍中的廉洁智慧</h4>
                        <div className="books-grid">
                            <div className="book-card-container">
                                {/* 上2个卡片 */}
                                <div className="book-card">
                                    <h3 className="book-title">《论语》——修身正己之本</h3>
                                    <img src="/ly.jpg" alt="《论语》——修身正己之本" className="book-image" />
                                    <p className="book-quote">"其身正，不令而行；其身不正，虽令不从。"——《论语·子路》</p>
                                    <div className="book-content">
                                        <p className="book-label">释义：</p>
                                        <p className="book-text">（执政者）自身行为端正，就是不发布命令，百姓也会跟着行动；自身行为不端正，即使发布命令，百姓也不会服从。</p>
                                        <p className="book-label">深度解析：</p>
                                        <p className="book-text">这句话揭示了"修身"与"治国"的内在联系。它将廉洁自律从个人品德提升到了为政之本的高度，强调领导者的表率作用是无声却最有力的命令，是构建清廉风气的基石。</p>
                                    </div>
                                </div>
                                
                                <div className="book-card">
                                    <h3 className="book-title">《官箴》——为官从政之则</h3>
                                    <img src="/gj.jpg" alt="《官箴》——为官从政之则" className="book-image" />
                                    <p className="book-quote">"公生明，廉生威。"——《官箴》</p>
                                    <div className="book-content">
                                        <p className="book-label">释义：</p>
                                        <p className="book-text">公正方能明察秋毫，廉洁才能树立威望。</p>
                                        <p className="book-label">深度解析：</p>
                                        <p className="book-text">此匾额为明代官员年富所撰，是古代为官者的行为准则。公正带来明辨是非的能力，廉洁则产生使人信服的威望。这六个字构成了权力运行的铁律，平遥县衙的此块匾额至今保存完好，成为山西本地廉政文化的重要历史见证。</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="book-card-container">
                                {/* 下3个卡片 */}
                                <div className="book-card">
                                    <h3 className="book-title">《道德经》——处世智慧之境</h3>
                                    <img src="/ddj.jpg" alt="《道德经》——处世智慧之境" className="book-image" />
                                    <p className="book-quote">"知足不辱，知止不殆，可以长久。"——《道德经·第四十四章》</p>
                                    <div className="book-content">
                                        <p className="book-label">释义：</p>
                                        <p className="book-text">懂得满足就不会招致屈辱，懂得适可而止就不会遇到危险，这样才能保持长久平安。</p>
                                        <p className="book-label">深度解析：</p>
                                        <p className="book-text">此句从哲学层面揭示了贪欲与祸患的关联。"知足"是内在的心理防线，它能从根本上遏制非分之想。对于廉洁自律而言，这是一种"不想腐"的智慧境界，与儒家的修身律己共同构筑了坚固的思想堤坝。</p>
                                    </div>
                                </div>
                                
                                <div className="book-card">
                                    <h3 className="book-title">《左传》——德行根基之色</h3>
                                    <img src="/zz.jpg" alt="《左传》——德行根基之色" className="book-image" />
                                    <p className="book-quote">"俭，德之共也；侈，恶之大也。"——《左传·庄公二十四年》</p>
                                    <div className="book-content">
                                        <p className="book-label">释义：</p>
                                        <p className="book-text">节俭，是各种好品德的共同基础；奢侈，是各种恶行中最大的恶。</p>
                                        <p className="book-label">深度解析：</p>
                                        <p className="book-text">此句将"节俭"提升到了道德基石的高度。在廉政文化中，反对奢靡之风、倡导勤俭节约是永恒的课题。它深刻地指出，节俭不仅是个人美德，更关系到社会风气和政治清廉，而奢侈浪费则是滋生腐败的温床。</p>
                                    </div>
                                </div>
                                <div className="book-card">
                                    <h3 className="book-title">《大学》——修身齐家之道</h3>
                                    <img src="/daxue.jpg" alt="《大学》——修身齐家之道" className="book-image" />
                                    <p className="book-quote">"修身齐家治国平天下。"——《大学·修身》</p>
                                    <div className="book-content">
                                        <p className="book-label">释义：</p>
                                        <p className="book-text">修身齐家治国平天下。</p>
                                        <p className="book-label">深度解析：</p>
                                        <p className="book-text">此句揭示了个人修养与社会治理的内在联系。"修身"是个人道德修养的起点，"齐家"是家庭和谐的基础，"治国"是国家治理的基石，"平天下"是社会和谐的理想境界。这句话强调了个人修养对社会治理的重要作用，是廉政文化的重要思想。</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="subsection">
                        <h4 className="subsection-title">文物中的廉政密码</h4>
                        <div className="artifacts-layout">
                             {/* 上1下2的卡片，其中要保持他们卡片左右上下大小一致 */}
                            <div className="artifact-card-container">
                                {/* 上1个卡片 */}
                                <div className="artifact-card artifact-top">
                                    <div className="artifact-image-wrapper">
                                        <img src="/ts.jpg" alt="晋祠铁鼠——廉政文化的象征" className="artifact-image" />
                                    </div>
                                    <div className="artifact-content">
                                        <h3 className="artifact-title">晋祠铁鼠——廉政文化的象征</h3>
                                        <p className="artifact-text">在晋祠廊下，伏有一尊宋代铁鼠。它并非祥瑞，而是"贪腐"的化身。古人铸鼠于此，意在警示：贪者如鼠，必遭惩戒。千年已过，铁鼠静默，身泛寒光，如今已成为山西廉政文化的标志，吸引无数游人驻足，于无声处感悟"清廉是福，贪欲是祸"的永恒真谛。</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="artifact-card-container-bottom">
                                {/* 下2个卡片 */}
                                <div className="artifact-card artifact-bottom">
                                    <div className="artifact-image-wrapper">
                                        <img src="/llzy.jpg" alt='古代官印篆刻"廉吏之印"' className="artifact-image" />
                                    </div>
                                    <div className="artifact-content">
                                        <h3 className="artifact-title">古代官印篆刻"廉吏之印"</h3>
                                        <p className="artifact-text">"廉"字在篆书中，由"广"与"兼"构成，寓意"胸怀广博，方能兼济天下；心有所容，方能行有所廉"。古代官印作为权力的信物，将"廉"字深深刻入印文，正是将廉洁奉公的准则，铸入为官者的精神图腾。</p>
                                    </div>
                                </div>                                
                                <div className="artifact-card artifact-bottom">
                                    <div className="artifact-image-wrapper">
                                        <img src="/lq.jpg" alt='平遥古城"廉墙"' className="artifact-image" />
                                    </div>
                                    <div className="artifact-content">
                                        <h3 className="artifact-title">平遥古城"廉墙"</h3>
                                        <p className="artifact-text">在晋商故地平遥，有一面始建于清代的"廉墙"。墙体由当地官员与商人共倡镌刻，一个巨大的"廉"字，历经数百年风雨，笔画依然清晰如初。它不仅是古城廉政文化的见证，更默默诠释着"经商以信，为官以廉"那一脉相承的晋商精神。</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>
                
                <section className="section">
                    <h2 className="section-title">廉洁的时代意义</h2>
                    <div className="significance-layout">
                        <div className="significance-image-wrapper">
                            <img src="/zht.png" alt="中华腾" className="significance-image" />
                        </div>
                        <div className="significance-content">
                            <div className="significance-item">
                                <h3 className="significance-title">于青年</h3>
                                <p className="significance-text">青年是国家的未来，廉洁是青春的底色。对大学生而言，廉洁是实验数据的真实不欺，是人际交往的坦荡清白，是职业选择的初心不改。在山西大学，学子们于令德湖畔沐清风、渊智园中仰劲节，在求知道路上筑牢清廉基石，让青春行于正轨、不负韶华。</p>
                            </div>
                            <div className="significance-item">
                                <h3 className="significance-title">于校园</h3>
                                <p className="significance-text">廉洁是校园的清澈底色，是令德湖的潋滟波光，是渊智园草木的挺拔风骨。当诚信成为学术的准则，勤俭成为生活的自觉，公平成为处事的尺度，校园才能真正成为立德树人的净土。山西大学以"令德"为训，将"克明峻德"的精神融入一草一木、一言一行，让清廉之风浸润整个校园。</p>
                            </div>
                            <div className="significance-item">
                                <h3 className="significance-title">于社会</h3>
                                <p className="significance-text">校园廉洁，是社会清风的源头活水。从山西大学走出的学子，身负廉洁的基因，如一颗颗种子散入四方，在各行各业生根发芽。他们以清正之心履职，以务实之风担当，正如那历经风雨的"廉墙"字迹愈显，校园所孕育的廉洁信念，也将在时代长河中熠熠生辉，滋养朗朗乾坤。</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}