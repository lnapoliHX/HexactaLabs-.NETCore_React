using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Stock.Model.Entities;
using Stock.Repository.Base;

namespace Stock.Repository.Contexts
{
    public class ProductTypeContext: DbContext, IDbContext<ProductType>
    {
        public ProductTypeContext(DbContextOptions<ProductTypeContext> options) 
            : base(options)
        {
        }

        //public DbSet<ProductType> ProductTypes { get; set; }

        public DbSet<ProductType> DbSet { get; set; }

        public ProductType Add(ProductType entity)
        {
            return base.Add(entity).Entity;
        }

        public IEnumerable<ProductType> GetAll()
        {
            return this.DbSet;
        }

        public void Remove(ProductType entity)
        {
            base.Remove(entity);
        }

        public ProductType Update(ProductType entity)
        {
            return base.Update(entity).Entity;
        }
    }
}
