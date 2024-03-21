using AppAPI.Model;
using Microsoft.EntityFrameworkCore;

namespace AppAPI.Service;

public class PartnerService : IPartnerService
{
    private readonly ApplicationDbContext _context;

    public PartnerService(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Partner>> GetAllPartnersAsync()
    {
        return await _context.Partners.ToListAsync();
    }

    public async Task<Partner> GetPartnerByIdAsync(int id)
    {
        return await _context.Partners.FindAsync(id);
    }

    public async Task CreatePartnerAsync(Partner partner)
    {
        _context.Partners.Add(partner);
        await _context.SaveChangesAsync();
    }

    public async Task UpdatePartnerAsync(Partner partner)
    {
        _context.Entry(partner).State = EntityState.Modified;
        await _context.SaveChangesAsync();
    }

    public async Task DeletePartnerAsync(int id)
    {
        var partner = await _context.Partners.FindAsync(id);
        if (partner != null)
        {
            _context.Partners.Remove(partner);
            await _context.SaveChangesAsync();
        }
    }

    public IEnumerable<Partner> GetAllPartners()
    {
        throw new NotImplementedException();
    }

    public Partner GetPartnerById(int id)
    {
        throw new NotImplementedException();
    }

    public void CreatePartner(Partner partner)
    {
        throw new NotImplementedException();
    }

    public void UpdatePartner(Partner partner)
    {
        throw new NotImplementedException();
    }

    public void DeletePartner(int id)
    {
        throw new NotImplementedException();
    }
}
