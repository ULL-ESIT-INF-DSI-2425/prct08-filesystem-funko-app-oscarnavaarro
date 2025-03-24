import * as fs from "fs";

if (process.argv.length < 4) {
  console.error(
    "Uso: node app.js <ruta-archivo-entrada.json> <ruta-archivo-salida.csv>",
  );
  process.exit(1);
}

const inputPath = process.argv[2];
const outputPath = process.argv[3];

fs.readFile(inputPath, "utf8", (err, jsonString) => {
  if (err) {
    console.error(`Error al leer el archivo: ${err.message}`);
    process.exit(1);
  }

  try {
    const jsonData = JSON.parse(jsonString);

    if (!Array.isArray(jsonData)) {
      throw new Error("El JSON no es un arreglo");
    }

    let csvContent = "";
    if (jsonData.length > 0) {
      const headers = Object.keys(jsonData[0]);
      csvContent += headers.join(",") + "\n";

      
    }

    fs.writeFile(outputPath, csvContent, "utf8", (err) => {
      if (err) {
        console.error(`Error al guardar el CSV: ${err.message}`);
        process.exit(1);
      }
      console.log(`Archivo CSV guardado en: ${outputPath}`);
    });
  } catch (parseErr) {
    console.error(`Error al parsear JSON`);
    process.exit(1);
  }
});
