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
        // transform the registration into a startup
        var startup = new Startup
        {
            StartupId = 0,
            PersonalInfo = null,
            AcademiaInfo = null,
            StartupInfo = null,
            AdditionalInfo = null,
            RegistrationDate = default,
            Status = null,
        };
        

        _context.Startups.Add(startup);
        await _context.SaveChangesAsync();
    }


}