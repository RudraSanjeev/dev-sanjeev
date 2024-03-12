import { config } from "dotenv";
config();
import { ChatOpenAI } from "@langchain/openai";

const chatModel = new ChatOpenAI({
  openAIApiKey: "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",
});

await chatModel.invoke("what is LangSmith?");
