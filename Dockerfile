FROM python:3

ENV PYTHONUNBUFFERED 1

RUN mkdir /app

WORKDIR /app

COPY .venv .

# activate virtualenv
RUN . .venv/Scripts/activate

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

CMD ["..venv/Scripts/python", "manage.py", "runserver", "0.0.0.0:8000"]