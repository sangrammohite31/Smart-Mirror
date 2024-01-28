import speech_recognition as sr

# Initialize the recognizer
recognizer = sr.Recognizer()

def recognize_speech():
    # Use the default microphone as the audio source
    with sr.Microphone() as source:
        print("Listening...")

        # Adjust for ambient noise
        recognizer.adjust_for_ambient_noise(source)

        # Capture the audio
        audio = recognizer.listen(source)

        try:
            print("Recognizing...")

            # Use Google Speech Recognition to recognize the audio
            text = recognizer.recognize_google(audio)

            print("You said:", text)

        except sr.UnknownValueError:
            print("Sorry, I couldn't understand what you said.")

        except sr.RequestError as e:
            print("Sorry, I encountered an error during the recognition. {0}".format(e))

# Call the function to start speech recognition
recognize_speech()
