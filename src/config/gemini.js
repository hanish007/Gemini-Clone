import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
  const MODEL_NAME = 'gemini-1.0-pro';
  const API_KEY = "AIzaSyC5ZRPS096gOuxuKf7SfTo_yahhQ9Lqa64";
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function runChat(prompt) {
    try {
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = await genAI.getGenerativeModel({ model: MODEL_NAME });
  
      const chatSession = await model.startChat({
        generationConfig,
        // safetySettings: Adjust safety settings
        // See https://ai.google.dev/gemini-api/docs/safety-settings
        history: [],
      });
  
      const result = await chatSession.sendMessage(prompt);
      console.log(result.response.text());
      return result.response.text();
    } catch (error) {
      console.error("Error during chat session:", error);
    }
  }
  
  export default runChat;
  