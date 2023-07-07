import { Injectable } from '@nestjs/common';
import { Producto } from './modelos/productos';
import { InjectModel } from '@nestjs/sequelize';
import { CrearProductoDto } from './dto/crear-producto-dto';

@Injectable()
export class ProductosService {

    constructor(
        @InjectModel(Producto)
        private readonly ProductoModel: typeof Producto){}
        

    insertarproducto(dto: CrearProductoDto): Promise<Producto> {

        return this.ProductoModel.create({
            nombre: dto.nombre,
            precio: dto.precio,
            imagen: dto.imagen,
            descripcion: dto.descripcion,
        })
    }
    listadoProducto ():Promise<Producto[]> {

        return this.ProductoModel.findAll()
    }


}
