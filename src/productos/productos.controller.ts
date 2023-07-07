import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { Producto } from './modelos/productos';
import { CrearProductoDto } from './dto/crear-producto-dto';

@Controller('productos')
export class ProductosController {

   constructor (private service: ProductosService) {}
   
    @Get()
    devolvertodoslosproductos():Promise <Producto[]>{

        return this.service.listadoProducto()
    }

    @Post()
    insertarproductos(@Body() dto: CrearProductoDto){
        return this.service.insertarproducto(dto)

    }

   }


