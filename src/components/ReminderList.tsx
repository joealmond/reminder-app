import React from 'react';
import Reminder from '../models/reminder';

interface ReminderListProps {
    reminderItems: Reminder[];
    onRemoveReminder: (id: number) => void;
}

function ReminderList({ reminderItems, onRemoveReminder }: ReminderListProps) {
    return (
        <div>
            <ul className='list-group'>
                {reminderItems.map((item)=> <li className='list-group-item' key={item.id}>{item.title}
                    <button onClick={() => onRemoveReminder(item.id)} className='btn mx-2 btn-outline-danger rounded-pill'>Delete</button>
                </li>)}
            </ul>
        </div>
    );
}

export default ReminderList;