
export const postUser = async (req, res, next) => {
  const { contact_id, first_name,full_name, email } = req.body;

  const newUser = { contact_id, first_name,full_name, email };
  
  res.json(newUser);
};
