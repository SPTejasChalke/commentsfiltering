# import nltk
# from nltk.sentiment.vader import SentimentIntensityAnalyzer
# nltk.download('vader_lexicon')

# from flask import Flask, request, jsonify
# from flask_cors import CORS, cross_origin

# app = Flask(__name__)
# cors = CORS(app)
# app.config['CORS_HEADERS'] = 'Content-Type'

# @app.route("/analyze")
# @cross_origin
# def foo():
#     text = request.args.get('text')
    
#     if text:
#         sid = SentimentIntensityAnalyzer()
#         score = sid.polarity_scores(text)['compound']
#         return jsonify({"score": score})
#     else:
#         return jsonify({"error": "Text parameter missing"})

# if __name__== "__main__":
#     app.run()

import nltk
from nltk.sentiment.vader import SentimentIntensityAnalyzer
from flask import Flask, request, jsonify
from flask_cors import CORS

nltk.download('vader_lexicon')

app = Flask(__name__)
CORS(app)

@app.route("/analyze")
def analyze():
    text = request.args.get('text')
    
    if text:
        sid = SentimentIntensityAnalyzer()
        score = sid.polarity_scores(text)['compound']
        return jsonify({"score": score})
    else:
        return jsonify({"error": "Text parameter missing"})

if __name__ == "__main__":
    app.run(port=5000)
