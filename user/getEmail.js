const axios = require("axios");
const star = require('../utils/starThanks');

module.exports = async(answers) => {
    try {
        const endPoint = `https://api.github.com/users/${answers.username}/events/public`;
        const { data } = await axios.get(endPoint);
        
        let email;
        for(let i = 0; i <= data.length; i++){
            if(data[i].type === "PushEvent"){
                email = data[i].payload.commits[0].author.email;
                break;
            }
        }
        printEmail(email);
        star();
        process.exit();
    } catch (error) {
        console.log('\n\n<- ---------- \x1b[91mEmail not found (404)\x1b[0m ---------- ->\n');
        process.exit();
    }
}


const printEmail = (email) => {
    console.log(`           
                    

    \x1b[92m<- ------------  -   \x1b[94mEmail: ${email}\x1b[92m  -   ------------------ ->\x1b[0m
                    
        `);

}
