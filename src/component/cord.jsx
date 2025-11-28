"use client";

import { useRouter } from "next/navigation";
import "./card.css";

export default function Card({ routerName, name, BackColor }) {
  const router = useRouter();

  return (
    <div className="card-wrapper">
      <button 
        className="card-button" 
        onClick={() => router.push(routerName)}
        style={BackColor ? { backgroundColor: BackColor } : {}}
      >
        <span className="card-text">{name}</span>
        <div className="card-decoration"></div>
      </button>
    </div>
  );
}
