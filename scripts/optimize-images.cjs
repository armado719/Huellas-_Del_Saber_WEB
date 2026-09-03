const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imgDir = path.join(__dirname, '..', 'public', 'img');

async function optimizeAll() {
  const files = fs.readdirSync(imgDir);
  console.log(`Encontrados ${files.length} archivos en ${imgDir}`);

  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;

    const baseName = path.basename(file, ext);
    const inputPath = path.join(imgDir, file);
    const outputPath = path.join(imgDir, `${baseName}.webp`);

    const statBefore = fs.statSync(inputPath);
    totalBefore += statBefore.size;

    try {
      const image = sharp(inputPath);
      const metadata = await image.metadata();

      // Redimensionar si es más ancha que 1600px manteniendo aspect ratio
      let pipeline = image;
      if (metadata.width && metadata.width > 1600) {
        pipeline = pipeline.resize({ width: 1600, withoutEnlargement: true });
      }

      await pipeline
        .webp({ quality: 80, effort: 4 })
        .toFile(outputPath);

      const statAfter = fs.statSync(outputPath);
      totalAfter += statAfter.size;
      const savings = (((statBefore.size - statAfter.size) / statBefore.size) * 100).toFixed(1);
      console.log(`✓ ${file} (${(statBefore.size / 1024).toFixed(0)} KB) -> ${baseName}.webp (${(statAfter.size / 1024).toFixed(0)} KB) [ahorro: ${savings}%]`);
    } catch (err) {
      console.error(`Error procesando ${file}:`, err.message);
    }
  }

  console.log('\n--- RESUMEN TOTAL ---');
  console.log(`Antes: ${(totalBefore / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Después (WebP): ${(totalAfter / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Ahorro neto: ${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1)}%`);
}

optimizeAll();
