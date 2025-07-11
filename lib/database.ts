import { promises as fs } from 'fs';
import path from 'path';

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

const DB_PATH = path.join(process.cwd(), 'data', 'submissions.json');

// Ensure data directory exists
async function ensureDataDir() {
  const dataDir = path.dirname(DB_PATH);
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

// Read submissions from JSON file
async function readSubmissions(): Promise<ContactSubmission[]> {
  try {
    await ensureDataDir();
    const data = await fs.readFile(DB_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // If file doesn't exist or is empty, return empty array
    return [];
  }
}

// Write submissions to JSON file
async function writeSubmissions(submissions: ContactSubmission[]): Promise<void> {
  await ensureDataDir();
  await fs.writeFile(DB_PATH, JSON.stringify(submissions, null, 2));
}

// Generate unique ID
function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

export const database = {
  // Get all submissions
  async getSubmissions(): Promise<ContactSubmission[]> {
    const submissions = await readSubmissions();
    return submissions.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  },

  // Add new submission
  async addSubmission(data: Omit<ContactSubmission, 'id' | 'created_at'>): Promise<ContactSubmission> {
    const submissions = await readSubmissions();
    const newSubmission: ContactSubmission = {
      id: generateId(),
      name: data.name,
      email: data.email,
      message: data.message,
      created_at: new Date().toISOString(),
    };
    
    submissions.push(newSubmission);
    await writeSubmissions(submissions);
    return newSubmission;
  },

  // Delete submission by ID
  async deleteSubmission(id: string): Promise<boolean> {
    const submissions = await readSubmissions();
    const filteredSubmissions = submissions.filter(sub => sub.id !== id);
    
    if (filteredSubmissions.length === submissions.length) {
      return false; // No submission found with that ID
    }
    
    await writeSubmissions(filteredSubmissions);
    return true;
  }
};