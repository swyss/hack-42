using AppAPI.Model;
using AppAPI.Model.StartupHelpers;

namespace AppAPI.Service.StartupHelpers;

public class StartupRegistrationService : IStartupRegistrationService
{
    private readonly ApplicationDbContext _context;

    public StartupRegistrationService(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task RegisterAsync(StartupRegistration registration)
    {
        // Transformieren Sie das Registration-Model in ein Startup-Entity-Model
        var startup = new Startup
        {
            Name = registration.Name
            // Weitere Zuweisungen...
        };

        // Fügen Sie Ihre Geschäftslogik hinzu, z.B. Validierungen, zusätzliche Datenverarbeitung usw.

        _context.Startups.Add(startup);
        await _context.SaveChangesAsync();
    }
}