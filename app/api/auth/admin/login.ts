import prisma from '../../../../prisma';
import bcrypt from 'bcrypt';

export default async (req: any, res: any) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await prisma.user.findUnique({ where: { email } });

    // If user doesn't exist, return a 404 error
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // Compare the entered password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    // If passwords match, return success
    if (passwordMatch) {
      return res.status(200).json({ success: true, user });
    } else {
      // If passwords don't match, return a 401 unauthorized error
      return res.status(401).json({ success: false, message: 'Invalid password' });
    }
  } catch (error) {
    // Handle any unexpected errors
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};
