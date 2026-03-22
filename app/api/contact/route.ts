import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { first_name, last_name, email, subject, message } = body;

    // Validaciones básicas
    if (!first_name || !last_name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Configurar el transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Configurar el email
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Te llega a ti mismo
      replyTo: email, // Para responder directamente al contacto
      subject: `📬 Portfolio: ${subject} - ${first_name} ${last_name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #2563eb; color: white; padding: 20px; border-radius: 10px 10px 0 0; }
            .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #4b5563; }
            .value { margin-top: 5px; padding: 10px; background: white; border-radius: 5px; }
            .footer { margin-top: 20px; font-size: 12px; color: #6b7280; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin:0;">Nuevo mensaje desde tu portafolio</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Nombre completo:</div>
                <div class="value">${first_name} ${last_name}</div>
              </div>
              
              <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value">
                  <a href="mailto:${email}" style="color:#2563eb;">${email}</a>
                </div>
              </div>
              
              <div class="field">
                <div class="label">📝 Asunto:</div>
                <div class="value">${subject}</div>
              </div>
              
              <div class="field">
                <div class="label">💬 Mensaje:</div>
                <div class="value" style="white-space: pre-wrap;">${message}</div>
              </div>
              
              <div class="field">
                <div class="label">📅 Fecha:</div>
                <div class="value">${new Date().toLocaleString('es-MX')}</div>
              </div>
            </div>
            <div class="footer">
              <p>Este mensaje fue enviado desde tu portafolio personal.</p>
              <p>Puedes responder directamente a <a href="mailto:${email}" style="color:#2563eb;">${email}</a></p>
            </div>
          </div>
        </body>
        </html>
      `,
      // Versión texto plano por si acaso
      text: `
        Nuevo mensaje desde tu portafolio
        
        Nombre: ${first_name} ${last_name}
        Email: ${email}
        Asunto: ${subject}
        
        Mensaje:
        ${message}
        
        Fecha: ${new Date().toLocaleString('es-MX')}
      `,
    };

    // Enviar el email
    await transporter.sendMail(mailOptions);

    // Respuesta exitosa
    return NextResponse.json(
      { 
        success: true, 
        message: 'Email enviado correctamente' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    
    // Mensaje de error más específico
    let errorMessage = 'Error al enviar el email';
    if (error instanceof Error) {
      if (error.message.includes('getaddrinfo')) {
        errorMessage = 'Error de conexión SMTP';
      } else if (error.message.includes('credentials')) {
        errorMessage = 'Error de autenticación - verifica tus credenciales';
      }
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}