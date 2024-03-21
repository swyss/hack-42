using AppAPI.Model;
using Microsoft.EntityFrameworkCore;

namespace AppAPI;

public class ApplicationDbContext(
    DbContextOptions<ApplicationDbContext> options,
    DbSet<Partner> partners,
    DbSet<Fellow> fellows,
    DbSet<Startup> startups,
    DbSet<StartupApplication> startupApplications)
    : DbContext(options)
{
    public DbSet<Partner> Partners { get; set; } = partners;
    public DbSet<Fellow> Fellows { get; set; } = fellows;
    public DbSet<Startup> Startups { get; set; } = startups;
    public DbSet<StartupApplication> StartupApplications { get; set; } = startupApplications;


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Hier können Sie zusätzliche Konfigurationen für Ihre Modelle definieren, wie z.B. Schlüssel, Indizes, Beziehungen, etc.
    }
}