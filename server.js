import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente.');
});

app.post('/send-email', async (req, res) => {
  const { email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false, // false para TLS
    auth: {
      user: process.env.EMAIL_USER, // Tu email de Outlook
      pass: process.env.EMAIL_PASS, // Contraseña o contraseña de aplicación
    },
    tls: {
      ciphers: 'SSLv3',
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Nuevo mensaje desde el formulario de contacto',
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Correo enviado exitosamente');
  } catch (error) {
    res.status(500).send('Error al enviar el correo');
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
