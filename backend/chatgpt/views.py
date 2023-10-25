from django.shortcuts import render
import openai
from django.http import HttpResponse
from django.http import JsonResponse
import json
from django.conf import settings
# from crew_sync.chatgpt.secrets import MY_API_KEY

# Create your views here.

openai.api_key = settings.CHATGPT


def index(request):
    return HttpResponse("Hello World, this is ChatGPT!")


def generate_text(request):
    prompt = "tell me joke"

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system",
             "content": f"{prompt}"}
        ]
    )

    # my_openai_obj = list(response.choices)[0]
    # my_openai_obj.to_dict()['message']['content']

    # Working code
    translated_text = response.to_dict()


    # convert OpenAIObject to string and remove \n escape characters
    data = json.dumps(translated_text).replace("\\n", "\n")

    # extract the json from the string

    data = extract_json_from_string(data)
    return HttpResponse(data)

def extract_json_from_string(s):
    start = s.find('"content"')+12
    end = s.find('}')-1
    return s[start:end]
