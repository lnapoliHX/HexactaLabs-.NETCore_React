using Microsoft.EntityFrameworkCore;
using Stock.Model.Entities;
using Stock.Repository.Base;
using Stock.Repository.Contexts;
using System.Collections.Generic;

namespace Stock.Repository.Repositories
{
    public class ProductTypeRepository: BaseRepository<ProductType>
    {
        public ProductTypeRepository(ProductTypeContext dbContext)
            : base(dbContext)
        {
        }
    }
}
