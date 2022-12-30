FROM python:3
RUN pip install django gunicorn requirements.txt
RUN mkdir /code
WORKDIR /code
COPY . /code/
RUN python manage.py migrate
RUN python manage.py collectstatic --noinput
EXPOSE 8000
CMD ["gunicorn", "thunder.wsgi:application", "--bind", "0.0.0.0:8000"]