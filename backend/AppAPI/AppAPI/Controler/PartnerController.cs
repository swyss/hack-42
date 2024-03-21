using AppAPI.Model;
using AppAPI.Service;
using Microsoft.AspNetCore.Mvc;

namespace AppAPI.Controler;

[Route("api/[controller]")]
[ApiController]
public class PartnerController : ControllerBase
{
    private readonly IPartnerService _partnerService;

    public PartnerController(IPartnerService partnerService)
    {
        _partnerService = partnerService;
    }

    // GET: api/Partner
    [HttpGet]
    public ActionResult<IEnumerable<Partner>> GetPartners()
    {
        return Ok(_partnerService.GetAllPartners());
    }

    // GET: api/Partner/5
    [HttpGet("{id}")]
    public ActionResult<Partner> GetPartner(int id)
    {
        var partner = _partnerService.GetPartnerById(id);

        if (partner == null)
        {
            return NotFound();
        }

        return Ok(partner);
    }

    // POST: api/Partner
    [HttpPost]
    public ActionResult<Partner> PostPartner(Partner partner)
    {
        _partnerService.CreatePartner(partner);
        return CreatedAtAction(nameof(GetPartner), new { id = partner.PartnerId }, partner);
    }

    // PUT: api/Partner/5
    [HttpPut("{id}")]
    public IActionResult PutPartner(int id, Partner partner)
    {
        if (id != partner.PartnerId)
        {
            return BadRequest();
        }

        _partnerService.UpdatePartner(partner);

        return NoContent();
    }

    // DELETE: api/Partner/5
    [HttpDelete("{id}")]
    public IActionResult DeletePartner(int id)
    {
        _partnerService.DeletePartner(id);
        return NoContent();
    }
}