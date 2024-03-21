using AppAPI.Model;

namespace AppAPI.Service;

public interface IStartupService
{
    Task<IEnumerable<Startup>> GetAllStartupsAsync();
    Task<Startup> GetStartupByIdAsync(int id);
    Task CreateStartupAsync(Startup startup);
    Task UpdateStartupAsync(Startup startup);
    Task DeleteStartupAsync(int id);
}