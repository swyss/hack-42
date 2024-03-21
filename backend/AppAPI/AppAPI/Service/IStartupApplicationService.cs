using AppAPI.Model;

namespace AppAPI.Service;

public interface IStartupApplicationService
{
    Task ApplyAsync(StartupApplication application);
}