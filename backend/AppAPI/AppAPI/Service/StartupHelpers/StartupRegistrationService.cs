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
            PersonalInfo = new PersonalInfo(registration.FounderFirstName, registration.FounderLastName,Convert.ToDateTime(registration.FounderDateOfBirth),registration.FounderGender,registration.FounderEmail, registration.FounderPhone,registration.FounderAddressCity,registration.FounderAddressZIP,registration.FounderAddressCountry,registration.FounderAddressStreet,registration.FounderAddressNumber,registration.FounderEU,registration.FounderNationality,registration.FounderLinkedIn),
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