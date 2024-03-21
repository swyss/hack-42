using AppAPI.Model;

namespace AppAPI.Service;

public class StartupApplicationService : IStartupApplicationService
{
    private readonly ApplicationDbContext _context;

    public StartupApplicationService(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task ApplyAsync(StartupApplication application)
    {
        if (application == null)
            throw new ArgumentNullException(nameof(application));

        // Hier könnten weitere Validierungen durchgeführt werden

        _context.StartupApplications.Add(application);
        await _context.SaveChangesAsync();
    }
}