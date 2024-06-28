import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function withGpt(username: string, prompt: string) {
  const chatCompletion = await getGroqChatCompletion(username, prompt);
  // Print the completion returned by the LLM.
  return chatCompletion.choices[0]?.message?.content || "";
}

export async function getGroqChatCompletion(username: string, prompt: string) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `You are an AI Assitant designed with helping users navigate the website. 
        The website is a website that stores organizations that schools have added. 
        A user can create a school account and add an organization to the website. 
        These organizations can be viewed by any user logged in or not, but can only be starred by logeed in user. 
        The user can delete or edit it, but only the owner of the organization and no one else. Users can change their account info, view other users profile by seeing their name and profile picture which they can upload.
        The menu provides an easy to use navigation bar with options to register, login, and logout if they are already logged in. The user cannot login if they are already logged in and must logout first. If they click their account name, they can change their password/username. 
        To create a password you must have at least 2 characters and a special characters, while to add an email it must be valid. There are no duplicates username or emails.
        Please give them a brief response (around 1-2 sentences)
        ${
          username !== ""
            ? `Please welcome them by their username of ${username} and know that they are already logged in so respond accordingly`
            : "Refer to them as a guest user"
        }. A major issue with forogt password is that it may go in the spam folder.

        `,
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    model: "llama3-8b-8192",
  });
}
