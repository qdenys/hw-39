import React, {useEffect, useState} from 'react';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import {fetchContacts} from './api';

function App() {
	const [contacts, setContacts] = useState([]);
	const [showForm, setShowForm] = useState(false);

	useEffect(() => {
		const loadContacts = async () => {
			try {
				const data = await fetchContacts();
				setContacts(data);
			} catch (error) {
				console.error('Error loading contacts:', error);
			}
		};
		loadContacts();
	}, []);

	const handleDeleteContact = (id) => {
		setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
	};

	const handleAddContact = (newContact) => {
		setContacts(prevContacts => [...prevContacts, {id: prevContacts.length + 1, ...newContact}]);
		setShowForm(false);
	};

	return (
			<div>
				<ContactList contacts={contacts} onDeleteContact={handleDeleteContact}/>
				{showForm ? (
						<ContactForm onSubmit={handleAddContact} onCancel={() => setShowForm(false)}/>
				) : (
						<button onClick={() => setShowForm(true)}>Add Contact</button>
				)}
			</div>
	);
}

export default App;
