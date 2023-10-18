import nltk
from nltk.sentiment.vader import SentimentIntensityAnalyzer
nltk.download('vader_lexicon')

from flask import Flask, render_template

app = Flask(__name__)

@app.route("/analyze/<text>")
def foo(text):
    
    sid = SentimentIntensityAnalyzer()
    score = ((sid.polarity_scores(str(text))))['compound']

    # if(score > 0):
    #     label = 'This sentence is positive'
    # elif(score == 0):
    #     label = 'This sentence is neutral'
    # else:
    #     label = 'This sentence is negative'
    
    return score

if __name__== "__main__":
    app.run()
