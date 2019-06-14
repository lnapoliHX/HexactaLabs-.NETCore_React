using Microsoft.Extensions.Options;
using Stock.AppService.Base;
using Stock.Model.Entities;
using Stock.Repository.Repositories;
using Stock.Settings;

namespace Stock.AppService.Services
{
    public class ProductService: BaseService<Product>
    {
        private readonly IOptions<DomainSettings> domainSettings;

        public ProductService(ProductRepository repository, IOptions<DomainSettings> domainSettings)
            : base(repository)
        {
            this.domainSettings = domainSettings;
        }

        public int ObtenerStock(int idProducto)
        {
            var producto = this.Repository.Get(idProducto);
            return producto.Stock;
        }

        public void DescontarStock(int idProducto, int value)
        {
            var producto = this.Repository.Get(idProducto);
            producto.DescontarStock(value);
            this.Repository.Update(producto);
        }

        public void SumarStock(int idProducto, int value)
        {
            var producto = this.Repository.Get(idProducto);
            producto.SumarStock(value);
            this.Repository.Update(producto);
        }

        public decimal ObtenerPrecioVentaPublico(int idProducto)
        {
            var electroTypeId = this.domainSettings.Value.ElectroTypeId;
            var producto = this.Repository.Get(idProducto);
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

        public decimal ObtenerPrecioVentaEmpleado(int idProducto)
        {
            var producto = this.Repository.Get(idProducto);
            return producto.CostPrice;
        }
    }
}
