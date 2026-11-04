import { ImageResponse } from 'next/og';

export const alt = 'Mario Ibarra Gómez — portafolio de sistemas, inteligencia artificial e infraestructura';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '62px 72px', color: '#241d19', backgroundColor: '#faf7f4', fontFamily: 'Arial, sans-serif' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 24, fontWeight: 700 }}>
          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 46, height: 46, borderRadius: 12, backgroundColor: '#593a2c', color: '#fff', fontSize: 20 }}>&gt;_</span>
          Mario Ibarra Gómez
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 1000 }}>
          <div style={{ fontSize: 66, lineHeight: 1.08, letterSpacing: -3, fontWeight: 600 }}>Conecto ideas con sistemas.</div>
          <div style={{ fontSize: 66, lineHeight: 1.08, letterSpacing: -3, fontWeight: 600, color: '#76503c' }}>Construyo tecnología útil.</div>
          <div style={{ marginTop: 30, fontSize: 23, color: '#65574e' }}>Proyectos · inteligencia artificial · infraestructura</div>
        </div>
        <div style={{ fontSize: 18, color: '#76503c' }}>marioibarra.me</div>
      </div>
    ),
    { ...size },
  );
}
