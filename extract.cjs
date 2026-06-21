const fs = require('fs');
const readline = require('readline');

async function extract() {
  const fileStream = fs.createReadStream('C:\\Users\\akhil\\.gemini\\antigravity-ide\\brain\\760d93ad-d5a3-40fe-a05a-ddb2ebf3a900\\.system_generated\\logs\\transcript.jsonl');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let firstHomeContent = null;

  for await (const line of rl) {
    if (!line.trim()) continue;
    try {
      const parsed = JSON.parse(line);
      // Look for the first time view_file or any tool returned the content of Home.tsx
      if (parsed.type === 'TOOL_RESPONSE' && parsed.tool_calls) {
         // This is not standard format, let's just look at the raw string
      }
    } catch (e) {}
    
    // Just regex the line for Home.tsx content
    if (line.includes("export default function Home() {")) {
       // It's probably in a view_file output or a write_to_file input
       // Let's just log the line to a file to inspect
       fs.appendFileSync('transcript_matches.txt', line + '\n\n');
    }
  }
}

extract();
