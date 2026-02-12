import { put, del, list } from "@vercel/blob";
import { readFile } from "fs/promises";
import { join } from "path";
import { NextResponse } from "next/server";

export async function POST() {
  const imageFiles = [
    "hero-mensskydd.jpg",
    "products-overview.jpg",
    "arbetsplats.jpg",
    "hallbarhet.jpg",
    "skola.jpg",
  ];

  const results: Array<{ name: string; url: string; size: number; status: string }> = [];

  // First, delete old broken blobs
  try {
    const { blobs } = await list({ prefix: "menssakrad/" });
    for (const blob of blobs) {
      await del(blob.url);
    }
    console.log(`[v0] Deleted ${blobs.length} old blobs`);
  } catch (e) {
    console.log("[v0] No old blobs to delete");
  }

  // Upload each image from the filesystem
  for (const filename of imageFiles) {
    try {
      // Try multiple paths where the file might exist
      const paths = [
        join(process.cwd(), "public", "images", filename),
        join("/public", "images", filename),
        join("public", "images", filename),
      ];

      let fileBuffer: Buffer | null = null;
      let foundPath = "";

      for (const p of paths) {
        try {
          fileBuffer = await readFile(p);
          foundPath = p;
          break;
        } catch {
          continue;
        }
      }

      if (!fileBuffer || fileBuffer.length < 1000) {
        results.push({ name: filename, url: "", size: 0, status: `NOT FOUND in any path` });
        continue;
      }

      // Verify it's actually JPEG data (starts with FF D8)
      const isJpeg = fileBuffer[0] === 0xff && fileBuffer[1] === 0xd8;
      if (!isJpeg) {
        results.push({ name: filename, url: "", size: fileBuffer.length, status: `NOT JPEG - first bytes: ${fileBuffer.slice(0, 4).toString("hex")}` });
        continue;
      }

      const blob = await put(`menssakrad/${filename}`, fileBuffer, {
        access: "public",
        contentType: "image/jpeg",
        addRandomSuffix: false,
      });

      results.push({ name: filename, url: blob.url, size: fileBuffer.length, status: "OK" });
    } catch (error) {
      results.push({ name: filename, url: "", size: 0, status: `ERROR: ${error}` });
    }
  }

  return NextResponse.json({ results });
}
