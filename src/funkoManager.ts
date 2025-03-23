import fs from "fs";
import path from "path";
import { Funko } from "./funko.js";

const dataDir = path.join(process.cwd(), "data");

export function getUserDir(user: string): string {
  const dir = path.join(dataDir, user);
  return dir;
}

function ensureUserDir(user: string): void {
  const dir = getUserDir(user);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

export function saveFunko(user: string, funko: Funko): boolean {
  ensureUserDir(user);
  const filePath = path.join(getUserDir(user), `${funko.id}.json`);

  if (fs.existsSync(filePath)) {
    return false;
  }

  fs.writeFileSync(filePath, JSON.stringify(funko));
  return true;
}

export function updateFunko(user: string, funko: Funko): boolean {
  const filePath = path.join(getUserDir(user), `${funko.id}.json`);

  if (!fs.existsSync(filePath)) {
    return false;
  }

  fs.writeFileSync(filePath, JSON.stringify(funko));
  return true;
}

export function deleteFunko(user: string, id: number): boolean {
  const filePath = path.join(getUserDir(user), `${id}.json`);

  if (!fs.existsSync(filePath)) {
    return false;
  }

  fs.unlinkSync(filePath);
  return true;
}

export function readFunko(user: string, id: number): Funko | null {
  const filePath = path.join(getUserDir(user), `${id}.json`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

export function listFunkos(user: string): Funko[] {
  const dir = getUserDir(user);

  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = fs.readdirSync(dir);
  return files
    .map((file) => {
      const data = fs.readFileSync(path.join(dir, file), "utf-8");
      return JSON.parse(data);
    })
    .sort((a, b) => a.id - b.id);
}
