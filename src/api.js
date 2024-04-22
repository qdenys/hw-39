export const fetchContacts = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	if (!response.ok) {
		throw new Error('Failed to fetch contacts');
	}
	return await response.json();
};
