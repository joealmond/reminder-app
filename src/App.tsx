import { useEffect, useState } from 'react';
import './App.css';
import ReminderList from './components/ReminderList';
import Reminder from "./models/reminder";
import { getReminders } from './services/reminder'

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([])
  
  useEffect(() => {
    loadReminders()
  }, [])
  
  const loadReminders = async () => {
    const reminders = await getReminders()
    setReminders(reminders)
  }

  return (
    <div className="App">
      <ReminderList reminderItems={reminders}/>
    </div>
  );
}

export default App;
