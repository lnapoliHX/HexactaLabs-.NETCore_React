using Stock.AppService.Base;
using Stock.Model.Entities;
using Stock.Repository.Repositories;
using System;

namespace Stock.AppService.Services
{
    public class ProductTypeService: BaseService<ProductType>
    {                
        public ProductTypeService(ProductTypeRepository repository)
            : base(repository)
        {
        }
    }
}
