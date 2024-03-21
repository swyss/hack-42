using AppAPI.Model;
using AppAPI.Service;
using Microsoft.AspNetCore.Mvc;

namespace AppAPI.Controler;

[Route("api/[controller]")]
[ApiController]
public class FellowController : ControllerBase
{
    private readonly IFellowService _fellowService;

    public FellowController(IFellowService fellowService)
    {
        _fellowService = fellowService;
    }

    // GET: api/Fellow
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Fellow>>> GetAllFellows()
    {
        var fellows = await _fellowService.GetAllFellowsAsync();
        return Ok(fellows);
    }

    // GET: api/Fellow/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Fellow>> GetFellow(int id)
    {
        var fellow = await _fellowService.GetFellowByIdAsync(id);

        if (fellow == null)
        {
            return NotFound();
        }

        return Ok(fellow);
    }

    // POST: api/Fellow
    [HttpPost]
    public async Task<ActionResult<Fellow>> CreateFellow(Fellow fellow)
    {
        await _fellowService.CreateFellowAsync(fellow);
        return CreatedAtAction(nameof(GetFellow), new { id = fellow.FellowId }, fellow);
    }

    // PUT: api/Fellow/5
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateFellow(int id, Fellow fellow)
    {
        if (id != fellow.FellowId)
        {
            return BadRequest();
        }

        await _fellowService.UpdateFellowAsync(fellow);
        return NoContent();
    }

    // DELETE: api/Fellow/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteFellow(int id)
    {
        await _fellowService.DeleteFellowAsync(id);
        return NoContent();
    }
}
