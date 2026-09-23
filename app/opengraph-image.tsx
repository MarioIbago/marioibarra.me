import { ImageResponse } from 'next/og';

export const alt = 'Mario Ibarra Gómez — productos, sistemas e inteligencia artificial';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '58px 68px',
        color: '#ffffff',
        backgroundColor: '#0757e8',
        backgroundImage: 'radial-gradient(rgba(255,255,255,.18) 1px, transparent 1.5px)',
        backgroundSize: '20px 20px',
        fontFamily: 'Arial, sans-serif',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 18, letterSpacing: 2 }}>
          <span style={{ fontSize: 26, fontWeight: 700 }}>MI</span>
          <span>MARIO IBARRA GÓMEZ</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 1000 }}>
          <div style={{ fontSize: 72, lineHeight: 1.02, letterSpacing: -4, fontWeight: 600 }}>
            Productos, sistemas
          </div>
          <div style={{ fontSize: 72, lineHeight: 1.02, letterSpacing: -4, fontWeight: 600 }}>
            e inteligencia artificial.
          </div>
          <div style={{ marginTop: 25, fontSize: 24, color: '#d9e7ff' }}>
            Aprendizaje · documentos · infraestructura
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 18 }}>
          <span style={{ width: 12, height: 12, borderRadius: 10, backgroundColor: '#1768d8' }} />
          marioibarra.me
        </div>
      </div>
    ),
    { ...size },
  );
}
