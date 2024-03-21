using AppAPI.Model;

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

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Hier können Sie zusätzliche Konfigurationen für Ihre Modelle definieren, wie z.B. Schlüssel, Indizes, Beziehungen, etc.
    }
}