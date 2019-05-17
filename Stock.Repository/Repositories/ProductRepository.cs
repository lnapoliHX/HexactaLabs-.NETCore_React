using Stock.Model.Entities;
using Stock.Repository.Base;
using Stock.Repository.Contexts;

namespace Stock.Repository.Repositories
{
    public class ProductRepository: BaseRepository<Product>
    {
        public ProductRepository(ProductContext dbContext)
            : base(dbContext)
        {
        }
    }
}
