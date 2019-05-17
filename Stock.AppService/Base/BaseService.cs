using Stock.Model.Base;
using Stock.Repository.Base;
using Stock.Repository.Exceptions;
using System.Collections.Generic;

namespace Stock.AppService.Base
{
    public class BaseService<TEntity>
        where TEntity : class, IEntity
    {
        protected IRepository<TEntity> Repository { get; set; }

        public BaseService(IRepository<TEntity> repository)
        {
            this.Repository = repository;
        }

        public TEntity Create(TEntity entity)
        {
            return this.Repository.Add(entity);
        }

        public IEnumerable<TEntity> GetAll()
        {
            return this.Repository.GetAll();
        }

        public TEntity Get(int id)
        {
            return this.Repository.Get(id);            
        }

        public void Delete(TEntity entity)
        {
            this.Repository.Delete(entity);
        }

        public TEntity Update(TEntity entity)
        {
            return this.Repository.Update(entity);
        }
    }
}
