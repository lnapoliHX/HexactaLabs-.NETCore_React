using Stock.Model.Base;
using Stock.Repository.Exceptions;
using System.Collections.Generic;

namespace Stock.Repository.Base
{
    public class BaseRepository<TEntity>: IRepository<TEntity>
        where TEntity: class, IEntity
    {
        protected IDbContext<TEntity> DbContext { get; set; }

        public BaseRepository(IDbContext<TEntity> dbContext)
        {
            this.DbContext = dbContext;
        }

        public TEntity Add(TEntity entity)
        {
            var result = this.DbContext.Add(entity);
            this.DbContext.SaveChanges();
            return result;
        }

        public IEnumerable<TEntity> GetAll()
        {
            var productos = this.DbContext.GetAll();
            return productos;
        }

        public TEntity Get(int id)
        {
            var result = this.DbContext.DbSet.Find(id);
            if (result == null)
                throw new RepositoryException(string.Format("No existe la entidad ({0}) para el identificador {1}", typeof(TEntity).Name, id.ToString()));                        
            return result;
        }

        public void Delete(TEntity entity)
        {
            this.DbContext.Remove(entity);
            this.DbContext.SaveChanges();
        }

        public TEntity Update(TEntity entity)
        {
            var result = this.DbContext.Update(entity);
            this.DbContext.SaveChanges();
            return result;
        }
    }
}
