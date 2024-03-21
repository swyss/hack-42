using AppAPI.Model;
using AppAPI.Service;
using Microsoft.AspNetCore.Mvc;

namespace AppAPI.Controler;

[Route("api/[controller]")]
[ApiController]
public class StartupController : ControllerBase
{
    private readonly IStartupService _startupService;

    public StartupController(IStartupService startupService)
    {
        _startupService = startupService;
    }

    // GET: api/Startup
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Startup>>> GetAllStartups()
    {
        var startups = await _startupService.GetAllStartupsAsync();
        return Ok(startups);
    }

    // GET: api/Startup/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Startup>> GetStartup(int id)
    {
        var startup = await _startupService.GetStartupByIdAsync(id);

        if (startup == null)
        {
            return NotFound();
        }

        return Ok(startup);
    }

    // POST: api/Startup
    [HttpPost]
    public async Task<ActionResult<Startup>> CreateStartup(Startup startup)
    {
        await _startupService.CreateStartupAsync(startup);
        return CreatedAtAction(nameof(GetStartup), new { id = startup.StartupId }, startup);
    }

    // PUT: api/Startup/5
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateStartup(int id, Startup startup)
    {
        if (id != startup.StartupId)
        {
            return BadRequest();
        }

        await _startupService.UpdateStartupAsync(startup);
        return NoContent();
    }

    // DELETE: api/Startup/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteStartup(int id)
    {
        await _startupService.DeleteStartupAsync(id);
        return NoContent();
    }
}
