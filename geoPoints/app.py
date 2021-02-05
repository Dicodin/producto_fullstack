from flask import Flask, render_template, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)

# Obtengo los datos de configuración para la conexión al servidor de BD
app.config.from_pyfile('./config/config.py')
# Por si hay problemas por CORS en local por el consumo desde el FrontEnd
CORS(app)

# Inicialización de objeto db de sqlalchemy
db = SQLAlchemy(app)

# Creo mi modelo tal como lo cree en la BD
class tabla_puntos(db.Model):
    the_geom = db.Column(db.String)
    cartodb_id = db.Column(db.Integer, primary_key=True)
    tipo = db.Column(db.Integer)
    latitude = db.Column(db.Numeric(asdecimal=False))
    longitude = db.Column(db.Numeric(asdecimal=False))
    color = db.Column(db.String)

    def __init__(self, name):
        self.the_geom = name
        self.cartodb_id = name
        self.tipo = name
        self.latitude = name
        self.longitude = name
        self.color = name

    def serialize(self):
        return {
            'the_geom': self.the_geom,
            'cartodb_id': self.cartodb_id,
            'tipo': self.tipo,
            'latitude': self.latitude,
            'longitude': self.longitude,
            'color': self.color
        }

# Método para manejo de ruta no válida
@app.errorhandler(404)
def servicio_no_encontrado(error):
    return render_template('error.html', error=error), 404

# Método para retornar los puntos serializados desde la consulta a todos los datos de la tabla
@app.route('/', methods=['GET'])
def inicio():
    return jsonify({'data': list(map(lambda pts: pts.serialize(), tabla_puntos.query.all()))})