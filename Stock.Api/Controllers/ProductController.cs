using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Stock.Api.DTOs;
using Stock.AppService.Services;
using Stock.Model.Entities;
using System.Collections.Generic;
using System.Linq;

namespace Stock.Api.Controllers
{
    [Produces("application/json")]
    [Route("api/product")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly ProductService service;
        private readonly ProductTypeService productTypeService;
        private readonly IMapper mapper;

        public ProductController(ProductService service, ProductTypeService productTypeService, IMapper mapper)
        {
            this.service = service;
            this.productTypeService = productTypeService;
            this.mapper = mapper;
        }

        /// <summary>
        /// Permite recuperar todas las instancias
        /// </summary>
        /// <returns>Una colección de instancias</returns>
        [HttpGet]
        public ActionResult<IEnumerable<ProductDTO>> Get()
        {
            return this.mapper.Map<IEnumerable<ProductDTO>>(this.service.GetAll()).ToList();
        }

        /// <summary>
        /// Permite recuperar una instancia mediante un identificador
        /// </summary>
        /// <param name="id">Identificador de la instancia a recuperar</param>
        /// <returns>Una instancia</returns>
        [HttpGet("{id}")]
        public ActionResult<ProductDTO> Get(int id)
        {
            return this.mapper.Map<ProductDTO>(this.service.Get(id));
        }

        /// <summary>
        /// Permite crear una nueva instancia
        /// </summary>
        /// <param name="value">Una instancia</param>
        [HttpPost]
        public void Post([FromBody] ProductDTO value)
        {
            TryValidateModel(value);
            var product = this.mapper.Map<Product>(value);
            product.ProductType = this.productTypeService.Get(value.ProductTypeId.Value);
            this.service.Create(product);
        }

        /// <summary>
        /// Permite editar una instancia
        /// </summary>
        /// <param name="id">Identificador de la instancia a editar</param>
        /// <param name="value">Una instancia con los nuevos datos</param>
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] ProductDTO value)
        {
            var product = this.service.Get(id);
            TryValidateModel(value);
            this.mapper.Map<ProductDTO, Product>(value, product);
            product.ProductType = this.productTypeService.Get(value.ProductTypeId.Value);
            this.service.Update(product);
        }

        /// <summary>
        /// Permite borrar una instancia
        /// </summary>
        /// <param name="id">Identificador de la instancia a borrar</param>
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var product = this.service.Get(id);
            this.service.Delete(product);
        }

        /// <summary>
        /// Permite conocer el stock de un producto
        /// </summary>
        /// <param name="id">Identificador del producto</param>
        /// <returns>El stock disponible</returns>
        [HttpGet("stock/{id}")]
        public ActionResult<GenericResultDTO<int>> ObtenerStock(int id)
        {
            return new GenericResultDTO<int>(this.service.ObtenerStock(id));
        }

        /// <summary>
        /// Permite descontar una cantidad de stock a un producto
        /// </summary>
        /// <param name="id">Identificador del producto</param>
        /// <param name="value">La cantidad a descontar</param>
        [HttpPut("stock/descontar/{id}")]
        public void DescontarStock(int id, [FromBody] int value)
        {
            this.service.DescontarStock(id, value);
        }

        /// <summary>
        /// Permite sumar una cantidad de stock a un producto
        /// </summary>
        /// <param name="id">Identificador del producto</param>
        /// <param name="value">La cantidad a sumar</param>
        [HttpPut("stock/sumar/{id}")]
        public void SumarStock(int id, [FromBody] int value)
        {
            this.service.SumarStock(id, value);
        }

        /// <summary>
        /// Permite obtener el precio de venta al público de un producto
        /// </summary>
        /// <param name="id">Identificador del producto</param>
        /// <returns>El precio de venta al público</returns>
        [HttpGet("precioVenta/{id}")]
        public ActionResult<GenericResultDTO<decimal>> ObtenerPrecioVenta(int id)
        {
            return new GenericResultDTO<decimal>(this.service.ObtenerPrecioVentaPublico(id));
        }

        /// <summary>
        /// Permite obtener el precio de venta de un producto para un empleado
        /// </summary>
        /// <param name="id">Identificador del producto</param>
        /// <returns>El precio de venta para un empleado</returns>
        [HttpGet("precioVentaEmpleado/{id}")]
        public ActionResult<GenericResultDTO<decimal>> ObtenerPrecioVentaEmpleado(int id)
        {
            return new GenericResultDTO<decimal>(this.service.ObtenerPrecioVentaEmpleado(id));
        }
    }
}
