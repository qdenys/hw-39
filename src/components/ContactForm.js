import React, {useState} from 'react';

const ContactForm = ({onSubmit, onCancel}) => {
	const [name, setName] = useState('');
	const [username, setUserName] = useState('');
	const [phone, setPhone] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit({name, username, phone});
		setName('');
		setUserName('');
		setPhone('');
	};

	return (
			<div>
				<h2>Add New Contact</h2>
				<form onSubmit={handleSubmit}>
					<label>
						Name:
						<input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
					</label>
					<label>
						username:
						<input type="text" value={username} onChange={(e) => setUserName(e.target.value)}/>
					</label>
					<label>
						Phone:
						<input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}/>
					</label>
					<button type="submit">Save</button>
					<button type="button" onClick={onCancel}>Cancel</button>
				</form>
			</div>
	);
};

export default ContactForm;
