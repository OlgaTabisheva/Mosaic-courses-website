# Mosaic Courses Website
Website for Mosaic Courses that utilizes React and Django. It allows users to view available courses, book them, and access various other features.

### Tech stack
- React 
- Django
- Django REST Framework
- PostgreSQL
- Docker
- nginx
- GitHub Actions


### Installation
Clone the repository.
Install Docker and Docker Compose.
Run the following command to build the project's Docker containers:
```console
cd infra/
docker-compose up --build -d
```

A successful containers launch is followed by a similar output
``` 
[+] Running 5/5
 ⠿ Network infra_default       Created                                                 0.3s
 ⠿ Container infra-frontend-1  Started                                                12.7s
 ⠿ Container infra-db-1        Started                                                12.7s
 ⠿ Container infra-web-1       Started                                                20.4s
 ⠿ Container infra-nginx-1     Started 
```

Once the containers are ready, enter the web container CLI
```console
docker exec -it infra-web-1 bash    
```

Run the following command to make migrations:
```console
python manage.py makemigrations
python manage.py migrate
```


Run the following command to create a superuser:
```console
docker-compose exec web python manage.py createsuperuser
```

Access the application at http://localhost or http://127.0.0.1
User the credentials of the superuser to access http://localhost/admin

### API docs
Quite soon the docs will be available at http://localhost/swagger
Right now you can find the autogenerated yaml file at mosaic_backend/schema.yaml
