import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const KEY = "cookieConsent.v1";
const Ctx = createContext(null);

export const useCookieConsent = () => useContext(Ctx);

export function CookieConsentProvider({ children, privacyPath = "/privacidad" }) {
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY));
      if (saved && typeof saved === "object") setConsent(saved);
    } catch {}
  }, []);

  const save = (v) => {
    const next = { ...v, ts: Date.now() };
    setConsent(next);
    localStorage.setItem(KEY, JSON.stringify(next));
  };

  const acceptAll = () => save({ necessary: true, analytics: true, marketing: true });
  const rejectAll = () => save({ necessary: true, analytics: false, marketing: false });

  const value = useMemo(
    () => ({ consent, allow: (k) => !!(consent && consent[k]), set: save, acceptAll, rejectAll }),
    [consent]
  );

  return (
    <Ctx.Provider value={value}>
      {children}
      {consent === null && <Banner privacyPath={privacyPath} onSettings={() => openPanel()} />}
      <Settings privacyPath={privacyPath} />
    </Ctx.Provider>
  );
}

const styles = {
  wrap:{position:"fixed",left:0,right:0,bottom:0,zIndex:9999,display:"flex",justifyContent:"center",padding:12},
  card:{maxWidth:820,width:"100%",background:"#fff",borderRadius:12,boxShadow:"0 10px 30px rgba(0,0,0,.15)",padding:"14px 16px",
        fontFamily:"system-ui,-apple-system,Segoe UI,Roboto,Arial",fontSize:14},
  row:{display:"flex",gap:12,alignItems:"flex-start"},
  actions:{display:"flex",gap:8,flexWrap:"wrap"},
  btn:{padding:"8px 12px",borderRadius:10,border:"1px solid #ccc",background:"#f7f7f7",cursor:"pointer"},
  primary:{background:"#111",color:"#fff",borderColor:"#111"},
  link:{color:"#0b6fff",textDecoration:"underline"},
  panel:{position:"fixed",right:12,bottom:12,zIndex:10000,maxWidth:520,width:"calc(100% - 24px)",background:"#fff",
         borderRadius:12,boxShadow:"0 10px 30px rgba(0,0,0,.2)",padding:16,display:"none"},
  backdrop:{position:"fixed",inset:0,background:"rgba(0,0,0,.35)",zIndex:9998,display:"none"},
  toggle:{display:"flex",justifyContent:"space-between",alignItems:"center",border:"1px solid #eee",borderRadius:10,padding:"10px 12px",margin:"8px 0"},
  note:{fontSize:12,color:"#666",marginTop:6}
};

function Banner({ privacyPath, onSettings }) {
  const { acceptAll, rejectAll } = useCookieConsent();
  return (
    <div style={styles.wrap} role="dialog" aria-live="polite" aria-label="Consentimiento de cookies">
      <div style={styles.card}>
        <div style={styles.row}>
          <div style={{ flex: 1 }}>
            <p style={{ margin: 0, fontWeight: 600 }}>Usamos cookies</p>
            <p style={{ margin: "6px 0 0" }}>
              Algunas son necesarias para el funcionamiento del sitio. Otras se usan para analítica y marketing.{" "}
              <a style={styles.link} href={privacyPath} target="_blank" rel="noreferrer">
                Política de Privacidad
              </a>.
            </p>
          </div>
          <div style={styles.actions}>
            <button style={styles.btn} onClick={onSettings}>Configuración</button>
            <button style={styles.btn} onClick={rejectAll}>Solo necesarias</button>
            <button style={{ ...styles.btn, ...styles.primary }} onClick={acceptAll}>Aceptar todas</button>
          </div>
        </div>
      </div>
    </div>
  );
}

let setPanelVisible = null;
function openPanel(){ setPanelVisible?.(true); }
function closePanel(){ setPanelVisible?.(false); }
window.openCookieSettings = openPanel; // <- para abrir desde /privacidad o el footer

function Settings({ privacyPath }) {
  const { consent, set, acceptAll } = useCookieConsent();
  const [open, _setOpen] = useState(false);
  setPanelVisible = _setOpen;

  const [analytics, setAnalytics] = useState(!!(consent && consent.analytics));
  const [marketing, setMarketing] = useState(!!(consent && consent.marketing));

  useEffect(() => {
    if (consent) { setAnalytics(!!consent.analytics); setMarketing(!!consent.marketing); }
  }, [consent]);

  const save = () => { set({ necessary: true, analytics, marketing }); closePanel(); };

  return (
    <>
      <div style={{ ...styles.backdrop, display: open ? "block" : "none" }} onClick={closePanel} />
      <div style={{ ...styles.panel, display: open ? "block" : "none" }} role="dialog" aria-label="Ajustes de cookies">
        <h3 style={{ margin: 0 }}>Ajustes de cookies</h3>
        <div style={styles.toggle}>
          <div><b>Necesarias</b><div style={styles.note}>Siempre activas para el funcionamiento básico.</div></div>
          <span>Activadas</span>
        </div>
        <div style={styles.toggle}>
          <div><b>Analítica</b><div style={styles.note}>Nos ayuda a entender el uso del sitio.</div></div>
          <input type="checkbox" checked={analytics} onChange={e=>setAnalytics(e.target.checked)} />
        </div>
        <div style={styles.toggle}>
          <div><b>Marketing</b><div style={styles.note}>Píxeles y publicidad personalizada.</div></div>
          <input type="checkbox" checked={marketing} onChange={e=>setMarketing(e.target.checked)} />
        </div>
        <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", marginTop: 10 }}>
          <a href={privacyPath} target="_blank" rel="noreferrer" style={{ ...styles.btn, lineHeight: "28px", textDecoration: "none" }}>Política</a>
          <button style={styles.btn} onClick={save}>Guardar</button>
          <button style={{ ...styles.btn, ...styles.primary }} onClick={acceptAll}>Aceptar todas</button>
        </div>
      </div>
    </>
  );
}