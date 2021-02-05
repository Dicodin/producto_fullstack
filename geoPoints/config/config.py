# Configuración de BD
USER_DB = 'postgres'
PASS_DB = 'admin'
URL_DB = 'localhost'
NAME_DB = 'geo_points'
FULL_URI_DB = f'postgres://{USER_DB}:{PASS_DB}@{URL_DB}/{NAME_DB}'

SQLALCHEMY_DATABASE_URI = FULL_URI_DB
SQLALCHEMY_TRACK_MODIFICATIONS = False