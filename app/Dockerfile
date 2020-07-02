FROM python:3.7-slim-buster
ADD . /flask_app
WORKDIR /flask_app
RUN pip install -r requirements.txt

CMD python app.py