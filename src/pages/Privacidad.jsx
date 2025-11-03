export default function Privacidad() {
  const abrirAjustes = () => window.openCookieSettings?.();
  return (
    <main style={{maxWidth:800, margin:"40px auto", padding:"0 16px", fontFamily:"system-ui"}}>
      <h1>Política de Privacidad</h1>
      <p>Actualizado: 03/11/2025</p>

      <h2>Quiénes somos</h2>
      <p><b>Responsable:</b> Bosque Nórdico - WoodTenerife</p>
      <p><b>Contacto:</b> <a href="mailto:info@woodtenerife.com">info@woodtenerife.com</a> · Tenerife, Islas Canarias, España</p>

      <h2>Datos que recopilamos</h2>
      <ul>
        <li><b>Técnicos:</b> IP, User-Agent y cookies necesarias para el funcionamiento.</li>
        <li><b>Analítica:</b> datos agregados y anonimizados sobre el uso del sitio (solo con tu consentimiento).</li>
        <li><b>Marketing:</b> datos para mostrar anuncios relevantes (píxeles) (solo con tu consentimiento).</li>
      </ul>

      <h2>Cookies y consentimiento</h2>
      <p>
        Las cookies necesarias se usan siempre. Las de analítica y marketing solo se activan si das tu consentimiento
        en el banner. Puedes cambiar tu elección en cualquier momento:
      </p>
      <p>
        <button 
          onClick={abrirAjustes} 
          style={{
            padding:"10px 16px", 
            borderRadius:8, 
            background:"#111", 
            color:"#fff", 
            border:"none", 
            cursor:"pointer",
            fontWeight:600
          }}
        >
          Abrir ajustes de cookies
        </button>
      </p>

      <h2>Base legal</h2>
      <ul>
        <li>Necesarias: ejecución del servicio/interés legítimo.</li>
        <li>Analítica y marketing: <b>consentimiento</b> del usuario (revocable en cualquier momento).</li>
      </ul>

      <h2>Encargados y terceros</h2>
      <p>
        Podemos usar Google Analytics (analítica) y Meta Pixel (marketing) solo con consentimiento.
        Estos proveedores pueden tratar datos en sus propios servidores conforme a sus políticas.
      </p>

      <h2>Plazo de conservación</h2>
      <p>El registro del consentimiento se conserva hasta 12 meses o hasta cambiar la versión del banner.</p>

      <h2>Tus derechos</h2>
      <ul>
        <li>Acceso, rectificación, supresión, limitación, portabilidad y oposición.</li>
        <li>Para ejercerlos, escribe a <a href="mailto:info@woodtenerife.com">info@woodtenerife.com</a>.</li>
      </ul>

      <h2>Contacto</h2>
      <p>Consultas de privacidad: <a href="mailto:info@woodtenerife.com">info@woodtenerife.com</a></p>
    </main>
  );
}