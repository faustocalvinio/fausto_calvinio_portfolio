import { existsSync, mkdirSync, mkdtempSync, rmSync, statSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const targetUrl = process.argv[2] ?? 'http://localhost:4321/og-card';
const outputPath = resolve('public/og.png');

const browserCandidates = [
  join(process.env.PROGRAMFILES ?? '', 'Microsoft', 'Edge', 'Application', 'msedge.exe'),
  join(process.env['PROGRAMFILES(X86)'] ?? '', 'Microsoft', 'Edge', 'Application', 'msedge.exe'),
  join(process.env.PROGRAMFILES ?? '', 'Google', 'Chrome', 'Application', 'chrome.exe'),
  join(process.env['PROGRAMFILES(X86)'] ?? '', 'Google', 'Chrome', 'Application', 'chrome.exe'),
  join(process.env.LOCALAPPDATA ?? '', 'Google', 'Chrome', 'Application', 'chrome.exe'),
].filter(Boolean);

const browserPath = browserCandidates.find((candidate) => existsSync(candidate));

if (!browserPath) {
  throw new Error('No se encontró Microsoft Edge ni Google Chrome para generar la captura.');
}

const response = await fetch(targetUrl).catch(() => null);

if (!response?.ok) {
  throw new Error(`No se pudo abrir ${targetUrl}. Confirmá que npm run dev esté activo.`);
}

mkdirSync(dirname(outputPath), { recursive: true });
const profilePath = mkdtempSync(join(tmpdir(), 'fausto-og-'));

try {
  const result = spawnSync(browserPath, [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--run-all-compositor-stages-before-draw',
    '--virtual-time-budget=4000',
    '--force-device-scale-factor=1',
    '--window-size=1200,630',
    `--user-data-dir=${profilePath}`,
    `--screenshot=${outputPath}`,
    targetUrl,
  ], { stdio: 'inherit' });

  if (result.status !== 0 || !existsSync(outputPath) || statSync(outputPath).size === 0) {
    throw new Error('El navegador no pudo generar public/og.png.');
  }
} finally {
  rmSync(profilePath, { recursive: true, force: true });
}

console.log(`Imagen social generada en ${outputPath}`);
