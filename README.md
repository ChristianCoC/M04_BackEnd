
Crear y planificar el DER del proyecto a implementar tomando en cuenta la siguientes consideraciones. La aplicación consistirá en un e-commerce en el cual...

Un Usuario podrá registrarse e ingresar a la aplicación mediante usuario y contraseña.

El Usuario registrado puede realizar compras de productos mediante un carrito de compras (solo una unidad de cada producto) emitiendo una Orden de compra que registra la información en un Detalle de Compras.

Las Órdenes de compras son asociadas al Usuario y estas a su vez tienen asociado un Detalle de Compra con la información de los productos adquiridos.

Un Usuario Administrador, tendrá la posibilidad de actualizar la información de los productos cargados en la base de datos así como actualizar stock o agregar imágenes mediante un servicio de nube.


Identificar las entidades principales:

Usuario
Producto
Orden de Compra
Detalle de Compra
Definir las relaciones entre las entidades:

Un Usuario puede realizar múltiples Órdenes de Compra.
Una Orden de Compra pertenece a un único Usuario.
Una Orden de Compra puede contener múltiples Detalles de Compra.
Un Detalle de Compra está asociado a una Orden de Compra y a un Producto.
Un Usuario Administrador puede gestionar (crear, actualizar, eliminar) Productos.
Establecer los atributos de cada entidad:

Entidad Usuario:

id (PK)
nombre
email
contraseña
es_administrador (booleano)
Entidad Producto:

id (PK)
nombre
descripción
precio
stock
imagen_url
Entidad Orden de Compra:

id (PK)
usuario_id (FK)
fecha
total
Entidad Detalle de Compra:

id (PK)
orden_id (FK)
producto_id (FK)
cantidad
precio_unitario
Crear el DER:
Basado en lo anterior, el DER se vería así:


En formato textual:

Usuario

id (PK)
nombre
email
contraseña
es_administrador (booleano)
Producto

id (PK)
nombre
descripción
precio
stock
imagen_url
Orden de Compra

id (PK)
usuario_id (FK a Usuario.id)
fecha
total
Detalle de Compra

id (PK)
orden_id (FK a Orden de Compra.id)
producto_id (FK a Producto.id)
cantidad
precio_unitario
Relaciones:

Un Usuario puede tener múltiples Órdenes de Compra (1
).
Una Orden de Compra pertenece a un único Usuario (N:1).
Una Orden de Compra puede tener múltiples Detalles de Compra (1
).
Un Detalle de Compra pertenece a una única Orden de Compra (N:1).
Un Detalle de Compra está asociado a un único Producto (N:1).
Un Producto puede estar asociado a múltiples Detalles de Compra (1
).