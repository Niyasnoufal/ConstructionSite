export async function handler(event) {

    if(event.httpMethod !== "POST") {
        return {
            statusCode:405,
            body: JSON.stringify({error:"Method Not Allowed"})
        }
    }



    try {
        const {name, phone, message} = JSON.parse(event.body);
        const text = `
        📩 *New Quote Request!*
        👤 Name: ${name}
        📧 Email: ${phone}
        💬 Message: ${message}
            `;

        



        await fetch(`https://api.telegram.org/bot/sendMessage`, {
            method:"POST",
            headers:{ "Content-Type": "application/json" },
            body: JSON.stringify({
                
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