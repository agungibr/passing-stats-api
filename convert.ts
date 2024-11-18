import csv from "csvtojson";
import { writeFile } from "fs/promises";

const inputFilePath = "passing_stats.csv";
const outputFilePath = "passing_stats.json";

async function convertCsvToJson() {
    try {
        const jsonObj = await csv().fromFile(inputFilePath);
        await writeFile(outputFilePath, JSON.stringify(jsonObj, null, 2));
        console.log(`JSON file saved to ${outputFilePath}`);
    } catch (error) {
        console.error("Error converting CSV to JSON:", error);
    }
}

convertCsvToJson();
