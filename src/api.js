import axios from 'axios';

const apiKey = process.env.MY_API_KEY;

const request = async () => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/gpt-3/completions',
      {
        prompt: 'Once upon a time',
        max_tokens: 50,
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
        },
      }
    );

    console.log(response.data.choices[0].text);
  } catch (error) {
    console.error(error);
  }
};

request();