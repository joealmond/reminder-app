import { useEffect, useState } from 'react';
import './App.css';
import ReminderList from './components/ReminderList';
import Reminder from "./models/reminder";
import { getReminders, addReminder, removeReminder } from './services/reminder'
import NewReminder from './components/NewReminder';

function App(): JSX.Element {
  const [reminders, setReminders] = useState<Reminder[]>([])
  
  useEffect(() => {
    loadReminders()
  }, [])
  
  const loadReminders = async () => {
    const reminders = await getReminders()
    setReminders(reminders)
  }

  const removeOneReminder = (id: number) => {
    removeReminder(id);
    setReminders(reminders.filter(reminder => reminder.id !== id))
  }

  const addNewReminder = async (title: string) => {
    const newReminder = await addReminder(title);
    setReminders([newReminder, ...reminders])
  }

  return (
    <div className="App">
      <NewReminder onAddReminder={addNewReminder} />
      <ReminderList reminderItems={reminders} onRemoveReminder={removeOneReminder}/>
    </div>
  );
}

export default App;
