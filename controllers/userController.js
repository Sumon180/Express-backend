let users = [];
export const getAllUser = async (req, res, next) => {
  res.json(users);
};

export const postUser = async (req, res, next) => {
  const { contact_id, first_name,full_name, email } = req.body;

  const newUser = { contact_id, first_name,full_name, email };
  users.push(newUser);
  res.json(newUser);
};
