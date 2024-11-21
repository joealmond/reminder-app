import Reminder from "../models/reminder";

const url = "https://jsonplaceholder.typicode.com/todos";

export async function getReminders(): Promise<Reminder[]> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    return json;
  } catch (error: any) {
    console.error(error.message);
    throw error;
  }
}

export async function addReminder(title: string): Promise<Reminder> {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, id: Date.now()}),
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    return { ...json, id: Date.now() };;
  } catch (error: any) {
    console.error(error.message);
    throw error;
  }
}

export async function removeReminder(id: number): Promise<void> {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
  } catch (error: any) {
    console.error(error.message);
    throw error;
  }
}
