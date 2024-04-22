import React from 'react';

const ContactList = ({contacts, onDeleteContact}) => {
	return (
			<div>
				<h2>Contacts</h2>
				<table>
					<thead>
					<tr>
						<th>Name</th>
						<th>Username</th>
						<th>Phone</th>
						<th></th>
					</tr>
					</thead>
					<tbody>
					{contacts.map(contact => (
							<tr key={contact.id}>
								<td>{contact.name}</td>
								<td>{contact.username}</td>
								<td>{contact.phone}</td>
								<td>
									<button onClick={() => onDeleteContact(contact.id)}>Delete</button>
								</td>
							</tr>
					))}
					</tbody>
				</table>
			</div>
	);
};

export default ContactList;
