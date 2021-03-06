module.exports = (sequelize, DataTypes) => {
    const Factura = sequelize.define('Factura', {

        num_factura: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },

        idCliente: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'id_cliente'

        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        fechaRegistro: {
            type: DataTypes.DATE,
            allowNull: false,
            field: 'fecha_registro'
        },
        usuarioRegistro: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'usuario_registro'
        },
        fechaModificacion: {
            type: DataTypes.DATE,
            field: 'fecha_modificacion'
        },
        usuarioModificacion: {
            type: DataTypes.STRING,
            field: 'usuario_modificacion'
        },
        activo: DataTypes.BOOLEAN

    }, {
        //schema:'oei',
        tableName: 'factura',
        timestamp: false

    });


    Factura.asociar = (models) => {

        models.Factura.belongsTo(models.Cliente, {
            as: 'cliente',
            foreignKey: {
                name: 'idCliente',
                field: 'id_cliente',
                allowNull: false
            }
        });

        models.Factura.belongsToMany(models.Producto, {
            as: 'producto',
            through: models.Detalle,
            foreignKey: 'idFactura',
            otherKey: 'idProducto'
        });

    };


    return Factura;
};