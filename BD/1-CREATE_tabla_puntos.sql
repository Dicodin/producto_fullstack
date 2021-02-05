CREATE TABLE tabla_puntos
(
    the_geom character varying(50) NOT NULL,
    cartodb_id integer NOT NULL,
    tipo character varying(50) NOT NULL,
    latitude double precision NOT NULL,
    longitude double precision NOT NULL,
    color character varying(6) NOT NULL,
    CONSTRAINT tabla_puntos_pkey PRIMARY KEY (cartodb_id)
);