// Límite por IP en memoria (se reinicia en cada arranque en frío de Vercel).
export function crearLimite(maximo: number, ventanaMs: number) {
  const mapa = new Map<string, { n: number; hasta: number }>();
  return (ip: string): boolean => {
    const ahora = Date.now();
    const e = mapa.get(ip);
    if (!e || ahora > e.hasta) {
      mapa.set(ip, { n: 1, hasta: ahora + ventanaMs });
      return false;
    }
    if (e.n >= maximo) return true;
    e.n++;
    return false;
  };
}

export function ipDe(headers: Headers): string {
  return headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "desconocida";
}
