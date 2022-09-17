FROM python:3.8-slim-buster

WORKDIR /login

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY . /login

CMD ["python3", "manage.py", "runserver", "8001"]
