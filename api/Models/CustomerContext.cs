using Microsoft.EntityFrameworkCore;

namespace newhotel.api.models
{
    public class CustomerContext : DbContext
    {
        public CustomerContext(DbContextOptions<CustomerContext> options) : base(options)
        {

        }
        public DbSet<Customer> Customer {get;set;}
    }
}