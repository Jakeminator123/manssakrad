// This script calls the API route running inside the preview server
// The preview server CAN access the files in /public/images/ because
// it runs in the same filesystem as the v0 editor
const PREVIEW_URL = "https://demo-kzmgzkqi7fqno6zgloi6.vusercontent.net";

async function main() {
  console.log("Calling blob-upload API route on preview server...");
  console.log(`URL: ${PREVIEW_URL}/api/blob-upload`);

  try {
    const res = await fetch(`${PREVIEW_URL}/api/blob-upload`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    console.log(`Response status: ${res.status}`);
    const text = await res.text();
    console.log("Response body:", text);

    try {
      const data = JSON.parse(text);
      if (data.results) {
        for (const r of data.results) {
          console.log(`${r.status === "OK" ? "OK" : "FAIL"} | ${r.name} | ${r.size} bytes | ${r.url || r.status}`);
        }
      }
    } catch {
      // response wasn't JSON
    }
  } catch (error) {
    console.error("Fetch error:", error.message);
  }
}

main();
