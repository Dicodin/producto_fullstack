COPY tabla_puntos(the_geom, cartodb_id, tipo, latitude, longitude, color)
FROM '{Ruta del archivo CSV}'
DELIMITER ','
CSV HEADER;