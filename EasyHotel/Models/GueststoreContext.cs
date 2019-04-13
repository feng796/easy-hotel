using Microsoft.EntityFrameworkCore;

namespace EasyHotel.Models{
    public class GueststroeContext : DbContext{
        public GueststoreContext(DbContextOptions<GueststoreContext>options)
            : base(options)
            {
            }
            public DbSet<Guest> Guests { get; set; }
    }
}