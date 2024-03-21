using AppAPI.Model;

namespace AppAPI.Service;

public interface IFellowService
{
    Task<IEnumerable<Fellow>> GetAllFellowsAsync();
    Task<Fellow> GetFellowByIdAsync(int id);
    Task CreateFellowAsync(Fellow fellow);
    Task UpdateFellowAsync(Fellow fellow);
    Task DeleteFellowAsync(int id);
}