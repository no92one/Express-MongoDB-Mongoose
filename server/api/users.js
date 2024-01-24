export default function (server, mongoose) {

  // Define usersSchema directly here
  const usersSchema = new mongoose.Schema({
    username: String,
    password: String,
    // Add other fields as needed
  });

  // Create a User model using the schema
  const User = mongoose.model('User', usersSchema);

  // GET all users
  server.get('/api/users', async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching users' });
    }
  });

  // GET user by ID
  server.get('/api/users/:id', async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching user by ID' });
    }
  });

  // POST (Create) a new user
  server.post('/api/users', async (req, res) => {
    try {
      // Skapa en ny användare baserat på den inkommande request body
      const newUser = new User(req.body);
      // Spara den nya användaren i databasen
      const savedUser = await newUser.save();
      res.status(201).json(savedUser); // Skicka tillbaka den sparade användaren
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error creating a new user' });
    }
  });


  // PUT (Update) user by ID
  server.put('/api/users/:id', async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true, // Return the updated user
      });
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(updatedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error updating user by ID' });
    }
  });

  // PATCH (Partial Update) user by ID
  server.patch('/api/users/:id', async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true, // Return the updated user
      });
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(updatedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error partially updating user by ID' });
    }
  });

  // DELETE user by ID
  server.delete('/api/users/:id', async (req, res) => {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.id);
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error deleting user by ID' });
    }
  });

}

