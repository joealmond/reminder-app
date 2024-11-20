import { useState } from 'react';
import './App.css';
import ReminderList from './components/ReminderList';
import Reminder from "./models/reminder";

const reminders: Reminder[] = [
  { id: 1, title: 'Reminder 1' }
]


function App() {
  const [reminders, setReminders] = useState<Reminder[]>([
    { id: 1, title: 'Reminder 1' }
  ])

  return (
    <div className="App">
      <ReminderList reminderItems={reminders}/>
    </div>
  );
}

export default App;
