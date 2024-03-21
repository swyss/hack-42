using AppAPI.Model.StartupHelpers;

namespace AppAPI.Service.StartupHelpers;

public interface IStartupRegistrationService
{
    Task RegisterAsync(StartupRegistration registration);
}
