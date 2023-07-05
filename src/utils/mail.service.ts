import { MailerService } from '@nestjs-modules/mailer';
import { InternalServerErrorException, Injectable } from '@nestjs/common';
import { SendEmailDto } from 'src/modules/users/dto/send-email.dto';
import * as Mailgen from 'mailgen';

const mailGenerator = new Mailgen({
  theme: 'default',
  product: {
    name: 'Motor-Shop',
    link: 'http://localhost:3000',
  },
});

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendEmail({ to, subject, text, from }: SendEmailDto) {
    await this.mailerService
      .sendMail({ to, subject, html: text, from })
      .then(() => {
        console.log('Email successfully sent!');
      })
      .catch((error) => {
        console.log(error);
        throw new InternalServerErrorException(
          'Error sending the email. Please, try again later.',
        );
      });
  }
  resetPasswordTemplate(
    userEmail: string,
    userName: string,
    resetToken: string,
  ) {
    const email = {
      body: {
        name: userName,
        intro:
          'You have received this email because a password reset request for your account was received.',
        action: {
          instructions: 'Click the button below to reset your password:',
          button: {
            color: '#DC4D2F',
            text: 'Reset your password',
            link: `http://localhost:3000/resetPassword/${resetToken}`,
          },
        },
        outro:
          'If you did not request a password reset, no further action is required on your part.',
      },
    };
    const emailBody = mailGenerator.generate(email);

    const emailTemplate = {
      to: userEmail,
      from: process.env.SMTP_USER,
      subject: 'Reset password Motor-Shop',
      text: emailBody,
    };

    return emailTemplate;
  }
}
