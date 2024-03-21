using AppAPI.Model;

namespace AppAPI.Service;

public interface IPartnerService
{
    IEnumerable<Partner> GetAllPartners();
    Partner GetPartnerById(int id);
    void CreatePartner(Partner partner);
    void UpdatePartner(Partner partner);
    void DeletePartner(int id);
}