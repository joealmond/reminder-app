import React from 'react';
import Reminder from '../models/reminder';

interface ReminderListProps {
    reminderItems: Reminder[];
}

function ReminderList({ reminderItems }: ReminderListProps) {
    return (
        <div>
            <ul className='list-group'>
                {reminderItems.map((item)=> <li className='list-group-item' key={item.id}>{item.title}</li>)}
            </ul>
        </div>
    );
}

export default ReminderList;