using LiteDB;
using Stock.Repository.LiteDb.Configuration;

namespace Stock.Repository.LiteDb.Interface
{
    public interface IConfigurationProvider
    {
        LiteDatabase GetDatabase(ConfigurationProvider provider);
    }
}