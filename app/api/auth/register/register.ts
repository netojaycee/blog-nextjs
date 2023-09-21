import prisma from '../../../../prisma';
import bcrypt from 'bcrypt';

export default async (req: any, res: any) => {
  try {
    const { name, email, password } = req.body;
    console.log(req.body);

  //   if (!name || !email || !password) {
  //     return res.status(400).json({ success: false, message: 'Name, email, and password are required.' });
  //   }

  //   const hashedPassword = await bcrypt.hash(password, 10);

  //   const user = await prisma.user.create({
  //     data: {
  //       name,
  //       email,
  //       hashedPassword,
  //     },
  //   });

  //   res.status(200).json({ success: true, user });
  } 
  catch (error) {
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};
