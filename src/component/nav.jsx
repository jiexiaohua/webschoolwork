"use client";

import { Margarine } from "next/font/google";
import { useRouter } from "next/navigation";
import "./nav.css";

export default function Nav() {
  const router = useRouter();
  const routerList = ["首页", "廉韵溯源", "廉脉传承", "校园故事", "当代践行","关于我们"];
  const routerNameMap = ["", "rt1","rt2","rt4","rt3","rt5"];
  const routerMap = routerList.map((project, index) => (
        <li
          key={index}
          className="nav-item"
          onClick={() => router.push(`/${routerNameMap[index]}`)}
        >
          <span className="nav-link">{project}</span>
        </li> 
    ))
  return (
    <nav className="nav-container">
      <ul className="nav-list">
        {routerMap}
      </ul>
    </nav>
  )
}
