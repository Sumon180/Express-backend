import express from "express";
import contactController from "../controllers/contactController.js";

const contactRoutes = (axiosInstance, contacts) => {
  const router = express.Router();

  // Get all contacts
  router.get("/", contactController.getAllContacts(contacts));

  // Get a single contact by email
  router.get("/:email", contactController.getContactByEmail(contacts));

  // Create a new contact
  router.post("/", contactController.createContact(axiosInstance, contacts));

  // Update an existing contact by email
  router.put(
    "/:email",
    contactController.updateContactByEmail(axiosInstance, contacts)
  );

  // Delete an existing contact by email
  router.delete(
    "/:email",
    contactController.deleteContactByEmail(axiosInstance, contacts)
  );

  return router;
};

export default contactRoutes;
