export async function handler(event) {

    if(event.httpMethod !== "POST") {
        return {
            statusCode:405,
            body: JSON.stringify({error:"Method Not Allowed"})
        }
    }



    try {
        const {name, email, phone, message} = JSON.parse(event.body);
        const text = `
        📩 *New Quote Request!*
        👤 Name: ${name}
        📧 Email:${email}
        📱 Phone: ${phone}
        💬 Message: ${message}
            `;

        
        const BOT_TOKEN = process.env.VITE_BOT_TOKEN
        const CLIENT_ID = process.env.VITE_CLIENT_ID


        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method:"POST",
            headers:{ "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id:CLIENT_ID,
                text,
                parse_mode:"Markdown",
            }),
        });

        return {
            statusCode:200,
            body: JSON.stringify({success:true, message:"Alert sent to Client"})
        }
        
    } catch(e) {
        return {
            statusCode:500,
            body:JSON.stringify({error:"Failed to send Message", details: e.message})
        }
    }
}