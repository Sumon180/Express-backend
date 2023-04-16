// Get all contacts
const getAllContacts = (contacts) => async (req, res) => {
  try {
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get a single contact by email
const getContactByEmail = (contacts) => async (req, res) => {
  try {
    const email = req.params.email;
    const contact = contacts.find((c) => c.email === email);
    if (contact) {
      res.json(contact);
    } else {
      res.status(404).json({ error: "Contact not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Create a new contact
const createContact = (axiosInstance, contacts) => async (req, res) => {
  try {
    const { first_name, last_name, email } = req.body;
    const full_name = `${first_name} ${last_name}`;
    const newContact = { first_name, last_name, full_name, email };
    contacts.push(newContact);
    await axiosInstance.post("/contacts", newContact);
    res.json(newContact);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update an existing contact by email
const updateContactByEmail = (axiosInstance, contacts) => async (req, res) => {
  try {
    const email = req.params.email;
    const index = contacts.findIndex((c) => c.email === email);
    if (index !== -1) {
      const { first_name, last_name } = req.body;
      const full_name = `${first_name} ${last_name}`;
      contacts[index].first_name = first_name;
      contacts[index].last_name = last_name;
      contacts[index].full_name = full_name;
      await axiosInstance.put(`/contacts/${email}`, {
        first_name,
        last_name,
        full_name,
        email,
      });
      res.json(contacts[index]);
    } else {
      res.status(404).json({ error: "Contact not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete an existing contact by email
const deleteContactByEmail = (axiosInstance, contacts) => async (req, res) => {
  try {
    const email = req.params.email;
    const index = contacts.findIndex((c) => c.email === email);
    if (index !== -1) {
      contacts.splice(index, 1);
      await axiosInstance.delete(`/contacts/${email}`);
      res.json({ message: "Contact deleted successfully" });
    } else {
      res.status(404).json({ error: "Contact not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export default {
  getAllContacts,
  getContactByEmail,
  createContact,
  updateContactByEmail,
  deleteContactByEmail,
};
