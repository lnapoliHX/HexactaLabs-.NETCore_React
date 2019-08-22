using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using Microsoft.Extensions.Options;
using Stock.AppService.Base;
using Stock.Model.Entities;
using Stock.Repository.LiteDb.Interface;
using Stock.Settings;

namespace Stock.AppService.Services
{
    public class ProductService: BaseService<Product>
    {
        private readonly IOptions<DomainSettings> domainSettings;

        public ProductService(IRepository<Product> repository, IOptions<DomainSettings> domainSettings)
            : base(repository)
        {
            this.domainSettings = domainSettings;
        }

        public int ObtenerStock(string idProducto)
        {
            var producto = this.Repository.GetById(idProducto);
            return producto.Stock;
        }

        public void DescontarStock(string idProducto, int value)
        {
            var producto = this.Repository.GetById(idProducto);
            producto.DescontarStock(value);
            this.Repository.Update(producto);
        }

        public void SumarStock(string idProducto, int value)
        {
            var producto = this.Repository.GetById(idProducto);
            producto.SumarStock(value);
            this.Repository.Update(producto);
        }

        public decimal ObtenerPrecioVentaPublico(string idProducto)
        {
            var electroTypeId = this.domainSettings.Value.ElectroTypeId;
            var producto = this.Repository.GetById(idProducto);
            var margenGanancia = producto.SalePrice - producto.CostPrice;
            if (producto.ProductType.Id != electroTypeId.ToString())
            {
                var exceso = margenGanancia - (producto.CostPrice * 0.1M);
                if (exceso > 0)
                {
                    exceso = exceso * 0.2M;
                    return producto.CostPrice + (producto.CostPrice * 0.1M) + exceso;
                }
            }
            else
            {
                return producto.CostPrice + (margenGanancia * 0.5M);
            }

            return producto.SalePrice;
        }

        public decimal ObtenerPrecioVentaEmpleado(string idProducto)
        {
            var producto = this.Repository.GetById(idProducto);
            return producto.CostPrice;
        }

        public IEnumerable<Product> Search(Expression<Func<Product,bool>> filter)
        {
            return this.Repository.List(filter);
        }
    }
}
