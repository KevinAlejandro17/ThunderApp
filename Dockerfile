FROM python:3

ENV PYTHONUNBUFFERED 1

RUN mkdir /app

WORKDIR /app

COPY .venv .

RUN ls /app

# activate virtualenv
RUN . Scripts/activate

COPY .venv/requirements.txt .

RUN pip install --ignore-installed --no-deps --default-timeout=100 -r requirements.txt

COPY . .

CMD ["..venv/Scripts/python", "manage.py", "runserver", "0.0.0.0:8000"]