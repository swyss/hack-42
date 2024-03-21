using AppAPI.Model;
using AppAPI.Model.StartupHelpers;

namespace AppAPI;

using Microsoft.EntityFrameworkCore;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    public DbSet<Partner> Partners { get; set; }
    public DbSet<Fellow> Fellows { get; set; }
    public DbSet<Startup> Startups { get; set; }
    public DbSet<StartupApplication> StartupApplications { get; set; }  
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
    }
}