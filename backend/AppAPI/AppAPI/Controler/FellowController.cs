using AppAPI.Model;
using AppAPI.Service;
using Microsoft.AspNetCore.Mvc;

namespace AppAPI.Controler;

[Route("api/[controller]")]
[ApiController]
public class FellowController(IFellowService fellowService) : ControllerBase
{
    // GET: api/Fellow
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Fellow>>> GetAllFellows()
    {
        var fellows = await fellowService.GetAllFellowsAsync();
        return Ok(fellows);
    }

    // GET: api/Fellow/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Fellow>> GetFellow(int id)
    {
        var fellow = await fellowService.GetFellowByIdAsync(id);

        return Ok(fellow);
    }

    // POST: api/Fellow
    [HttpPost]
    public async Task<ActionResult<Fellow>> CreateFellow(Fellow fellow)
    {
        await fellowService.CreateFellowAsync(fellow);
        return CreatedAtAction(nameof(GetFellow), new { id = fellow.FellowId }, fellow);
    }

    // PUT: api/Fellow/5
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateFellow(int id, Fellow fellow)
    {
        if (id != fellow.FellowId) return BadRequest();

        await fellowService.UpdateFellowAsync(fellow);
        return NoContent();
    }

    // DELETE: api/Fellow/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteFellow(int id)
    {
        await fellowService.DeleteFellowAsync(id);
        return NoContent();
    }
}