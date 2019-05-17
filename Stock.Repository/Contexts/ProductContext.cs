using Microsoft.EntityFrameworkCore;
using Stock.Model.Entities;
using Stock.Repository.Base;
using System.Collections.Generic;

namespace Stock.Repository.Contexts
{
    public class ProductContext : DbContext, IDbContext<Product>
    {
        public ProductContext(DbContextOptions<ProductContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>()
                .Property(b => b.Stock)
                .HasField("_stock");
        }

        public DbSet<Product> DbSet { get; set; }

        public Product Add(Product entity)
        {
            this.Entry(entity.ProductType).State = EntityState.Unchanged;
            return base.Add(entity).Entity;
        }

        public IEnumerable<Product> GetAll()
        {
            return this.DbSet;
        }

        public void Remove(Product entity)
        {
            this.Entry(entity.ProductType).State = EntityState.Unchanged;
            base.Remove(entity);
        }

        public Product Update(Product entity)
        {
            this.Entry(entity.ProductType).State = EntityState.Unchanged;
            return base.Update(entity).Entity;
        }
    }
}
