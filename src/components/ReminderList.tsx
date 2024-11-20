import React from 'react';
import Reminder from '../models/reminder';

interface ReminderListProps {
    reminderItems: Reminder[];
}

function ReminderList({ reminderItems }: ReminderListProps) {
    return (
        <div>
            <ul>
                {reminderItems.map((item)=> <li key={item.id}>{item.title}</li>)}
            </ul>
        </div>
    );
}

export default ReminderList;