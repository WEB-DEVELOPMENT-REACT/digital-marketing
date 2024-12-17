// components/SecurityTooltip.js
"use client"
import { useState } from "react";

export default function SecurityTooltip() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {/* Texto enlazable */}
      <span
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        style={{
          color: "#0070f3",
          textDecoration: "underline",
          cursor: "pointer",
          fontWeight: "500",
        }}
      >
        Política de Privacidad
      </span>

      {/* Tooltip estilizado */}
      {showTooltip && (
        <div
          style={{
            position: "absolute",
            bottom: "120%",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#f0f9ff",
            color: "#333",
            padding: "1rem",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            zIndex: 100,
            width: "300px",
            textAlign: "center",
            lineHeight: "1.6",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            fontSize: "0.9rem",
          }}
        >
          <p style={{ margin: "0", fontWeight: "600", color: "#0070f3" }}>
            🔒 Política de Seguridad
          </p>
          <p style={{ marginTop: "0.5rem", color: "#555" }}>
            Nuestra política de seguridad garantiza la protección de tus datos. 
            Trabajamos con protocolos de última generación para asegurar tu privacidad.
          </p>
        </div>
      )}
    </div>
  );
}
