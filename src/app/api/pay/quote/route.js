import axios from 'axios';
import { NextResponse } from 'next/server'

export async function POST(req, res) {
    const newData = await req.json()
    console.log(newData, "this is the req")
    const headers = {
        'Content-Type': 'application/json'
    };
    const url = 'https://api.smtp2go.com/v3/email/send';
    const data = {
        api_key: `${process.env.NEXT_PUBLIC_SMTP_API}`,
        to: [`<info@copiersutah.com>`],
        sender: "<info@copiersutah.com>",
        subject: `This is ${newData.name} quote form.`,
        text_body: `something`,
        html_body: `<h1>something</h1>`,
        template_id: "5120871",
        template_data: {
            name: newData.name,
            from: newData.from,
            number: newData.number,
            Email: newData.email,
            message: newData.message
        }
    }

    try {
        const response = await axios.post(url, data, { headers })


        return NextResponse.json({ "success": response.data })
    } catch (error) {
        console.error('Error sending email:', error);
    }
    // res.status(200).json(result)



}
