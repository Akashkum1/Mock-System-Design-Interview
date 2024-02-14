const apiUrl = 'https://api.openai.com/v1/chat/completions';
const key = 'your open api key';

export const callOpenAIAPI = async (t: string) => {
  const convesationArray = [
    {
      role: 'system',
      content: t,
    },
  ];

  const requestData = {
    messages: convesationArray,
    model: 'gpt-3.5-turbo',
  };

  try {
    const res = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer' + ' ' + key,
      },
      body: JSON.stringify(requestData),
    });
    const resJson = await res.json();
    console.log(resJson);
    return resJson;
  } catch (error) {
    throw new Error('Api request failed' + error);
  }
};
