using EasyHotel.api.models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace EasyHotel.api.data
{
    public class CustomerContext : DbContext
    {
        public CustomerContext(DbContextOptions<CustomerContext> options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder builder) => base.OnModelCreating(builder);
        public DbSet<Customer> Customer { get; set; }
    }
}