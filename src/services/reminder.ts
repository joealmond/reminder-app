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

export async function addReminders(title: string): Promise<Reminder[]> {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });
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

export async function removeReminders(id: number): Promise<void> {
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
