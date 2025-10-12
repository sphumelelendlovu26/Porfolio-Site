// optimize-models.js (ESM version)
import fs from "fs";
import path from "path";
import { exec } from "child_process";
import { fileURLToPath } from "url";

// Resolve __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Target the /public folder
const inputDir = path.join(__dirname, "public");

function optimizeModel(filePath) {
  const ext = path.extname(filePath);
  const baseName = path.basename(filePath, ext);
  const outputPath = path.join(path.dirname(filePath), `${baseName}.glb`);

  const cmd = `gltf-transform optimize "${filePath}" "${outputPath}" --texture-compress webp`;

  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.error(`❌ Error optimizing ${filePath}:`, error.message);
      return;
    }
    console.log(`✅ Optimized: ${filePath}`);
    if (stderr) console.warn(stderr);
  });
}

function walkDir(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      walkDir(fullPath);
    } else if (file.endsWith(".glb") || file.endsWith(".gltf")) {
      optimizeModel(fullPath);
    }
  });
}

// Check if /public exists
if (!fs.existsSync(inputDir)) {
  console.error("❌ Public folder not found:", inputDir);
  process.exit(1);
}

walkDir(inputDir);
