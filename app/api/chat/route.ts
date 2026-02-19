import { streamText, UIMessage, convertToModelMessages } from 'ai';
import { google } from '@ai-sdk/google';
export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  //TODO TASK 1
  // const systemPrompt = `You are a helpful assistant.`;

  const result = streamText({
    model: google('gemini-2.5-flash'),
    // system: systemPrompt,
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
