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
    public class ProviderService : BaseService<Provider>
    {
        private readonly IOptions<DomainSettings> domainSettings;

        public ProviderService(IRepository<Provider> repository, IOptions<DomainSettings> domainSettings)
            : base(repository)
        {
            this.domainSettings = domainSettings;
        }

        public IEnumerable<Provider> Search(Expression<Func<Provider,bool>> filter)
        {
            return this.Repository.List(filter);
        }
    }
}