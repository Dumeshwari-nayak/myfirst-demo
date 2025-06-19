# simple chatbot
import pyttsx3
engine=pyttsx3.init()
def speak(text):
    engine.say(text)
    engine.runAndWait()
    
print("namaste ! Main Ek Ai Chat bot hoon.Aap mujhe kuchh bhi puchh sakti hai.")
while True:
    user_input=input("Aap:").lower()
    if "hello" in user_input or "namaste" in user_input:
        print("Bot: Namaste! Aap kaise ho ?")
    elif "good" in user_input or"accha" in user_input:
        print("Bot: Jankar khusi hui.")
    elif "naam" in user_input:
        print("Bot: Mera naam choti Ai Chatbot hai.")
    elif "kaise ho" in user_input:
        print("Bot: Main thik hoon")
    elif "bye" in user_input:
        print("Bot:Bye apna khyal rakhanaa.")
        break
    else:
        print("Bot: Maaf karna mujhe samajh nahi aaya")
