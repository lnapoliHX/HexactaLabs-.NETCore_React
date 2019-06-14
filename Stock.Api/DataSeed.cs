using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Stock.Repository.Contexts;

namespace Stock.Api{
    public static class DataSeed{
        public static void SeedData(this IApplicationBuilder app)
        {
            // using (var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
            // {
            //     var context = serviceScope.ServiceProvider.GetService<ProductContext>();
            //     if (!context.Database.EnsureCreated())
            //         context.Database.Migrate();
            // }
        }
    }
}