FROM python:3

ENV PYTHONUNBUFFERED 1

RUN mkdir /app

WORKDIR /app

COPY .venv .

RUN ls /app

# activate virtualenv
RUN . .venv/Scripts/activate.bat

COPY .venv/requirements.txt .

RUN pip install -r requirements.txt

COPY . .

CMD ["..venv/Scripts/python", "manage.py", "runserver", "0.0.0.0:8000"]