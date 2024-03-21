using AppAPI.Model;
using Microsoft.EntityFrameworkCore;

namespace AppAPI.Service;

public class FellowService : IFellowService
{
    private readonly ApplicationDbContext _context;

    public FellowService(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Fellow>> GetAllFellowsAsync()
    {
        return await _context.Fellows.ToListAsync();
    }

    public async Task<Fellow> GetFellowByIdAsync(int id)
    {
        return await _context.Fellows.FindAsync(id) ?? throw new InvalidOperationException();
    }

    public async Task CreateFellowAsync(Fellow fellow)
    {
        _context.Fellows.Add(fellow);
        await _context.SaveChangesAsync();
    }

    public async Task UpdateFellowAsync(Fellow fellow)
    {
        _context.Entry(fellow).State = EntityState.Modified;
        await _context.SaveChangesAsync();
    }

    public async Task DeleteFellowAsync(int id)
    {
        var fellow = await _context.Fellows.FindAsync(id);
        if (fellow != null)
        {
            _context.Fellows.Remove(fellow);
            await _context.SaveChangesAsync();
        }
    }
}

