import { useEffect, useState } from 'react';
import './App.css';
import ReminderList from './components/ReminderList';
import Reminder from "./models/reminder";
import { getReminders } from './services/reminder'
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

  const removeReminder = (id: number): void => {
    setReminders(reminders.filter(reminder => reminder.id !== id))
  }

  return (
    <div className="App">
      <NewReminder/>
      <ReminderList reminderItems={reminders} onRemoveReminder={removeReminder}/>
    </div>
  );
}

export default App;
