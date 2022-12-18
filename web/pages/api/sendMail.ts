import type { NextApiRequest } from "next";
import nodemailer from "nodemailer";

// eslint-disable-next-line
export default async (req: NextApiRequest, res: any) => {
  try {
    const data = req.body;
    const transporter = nodemailer.createTransport({
      // @ts-ignore
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE,
      auth: {
        user: process.env.SMTP_AUTH_USER,
        pass: process.env.SMTP_AUTH_PASS,
      },
    });
    //  以下、申込者に送付するメール
    const toCustomer = await transporter.sendMail({
      from: process.env.SMTP_AUTH_USER,
      to: data.email,
      // bcc: "kadoya.volley@gmail.com",
      subject: `【栂池ロッヂかどや】ご予約申し込みを承りました。`,
      html: toCustomerTextGenerator(data),
    });
    console.log("Mail order data sent: ", toCustomer.messageId);

    //  以下、かどやに送付するメール
    const toKadoya = await transporter.sendMail({
      from: process.env.SMTP_AUTH_USER,
      to: data.email,
      // bcc: "kadoya.volley@gmail.com",
      subject: `【新規】予約申込みがありました。`,
      html: toKadoyaTextGenerator(data),
    });
    console.log("Mail order data sent: ", toKadoya.messageId);
    return res.status(200).end();
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
};

const toCustomerTextGenerator = (data: any) => {
  const {
    name,
    kana,
    address,
    tel,
    email,
    checkInDate,
    numberOfDays,
    adult,
    child,
    infantWithMeals,
    infant,
    remarks,
  } = data;
  return `
  <html>
    <head></head>
    <body>
      <div>--- ※このメールは自動返信です。 ---</div>
      <div>この度は、栂池ロッヂかどやへの宿泊予約をお申し込みくださり、誠にありがとうございます。</div>
      <div>
        ご予約のお申し込みを受け付けました。後日折り返しのご連絡をいたしますのでしばらくお待ちください。
      </div>
      <div>
        <div>お申し込み内容</div>
        <div>お名前：${name}</div>
        <div>ふりがな：${kana}</div>
        <div>ご住所：${address}</div>
        <div>電話番号：${tel}</div>
        <div>メールアドレス：${email}</div>
        <div>チェックインご希望日：${checkInDate}</div>
        <div>宿泊日数：${numberOfDays}泊${Number(numberOfDays) + 1}日</div>
        <div>大人：${adult}</div>
        <div>子供：${child}</div>
        <div>幼児(食事有)：${infantWithMeals}</div>
        <div>幼児(食事無)：${infant}</div>
        <div>備考欄：</div>
        <div>${remarks}</div>
      </div>
    </body>
  </html>`;
};

const toKadoyaTextGenerator = (data: any) => {
  const {
    name,
    kana,
    address,
    tel,
    email,
    checkInDate,
    numberOfDays,
    adult,
    child,
    infantWithMeals,
    infant,
    remarks,
  } = data;
  return `
  <html>
    <head></head>
    <body>
      <div>お申し込み内容</div>
      <div>お名前：${name}</div>
      <div>ふりがな：${kana}</div>
      <div>ご住所：${address}</div>
      <div>電話番号：${tel}</div>
      <div>メールアドレス：${email}</div>
      <div>チェックインご希望日：${checkInDate}</div>
      <div>宿泊日数：${numberOfDays}泊${Number(numberOfDays) + 1}日</div>
      <div>大人：${adult}人</div>
      <div>子供：${child}人</div>
      <div>幼児(食事有)：${infantWithMeals}人</div>
      <div>幼児(食事無)：${infant}人</div>
      <div>備考欄：</div>
        <div>${remarks}</div>
      </div>
    </body>
  </html>`;
};
