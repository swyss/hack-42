using AppAPI.Model;
using AppAPI.Model.StartupHelpers;
using AppAPI.Service;
using AppAPI.Service.StartupHelpers;
using Microsoft.AspNetCore.Mvc;

namespace AppAPI.Controler;

[Route("api/[controller]")]
[ApiController]
public class StartupController( IStartupService startupService)
    : ControllerBase
{
    // GET: api/StartupHelpers
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Startup>>> GetAllStartups()
    {
        var startups = await startupService.GetAllStartupsAsync();
        return Ok(startups);
    }

    // GET: api/StartupHelpers/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Startup>> GetStartup(int id)
    {
        var startup = await startupService.GetStartupByIdAsync(id);

        return Ok(startup);
    }

    // POST: api/StartupHelpers
    [HttpPost]
    public async Task<ActionResult<Startup>> CreateStartup(Startup startup)
    {
        await startupService.CreateStartupAsync(startup);
        return CreatedAtAction(nameof(GetStartup), new { id = startup.StartupId }, startup);
    }

    // PUT: api/StartupHelpers/5
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateStartup(int id, Startup startup)
    {
        if (id != startup.StartupId)
        {
            return BadRequest();
        }

        await startupService.UpdateStartupAsync(startup);
        return NoContent();
    }
    
   

    // DELETE: api/StartupHelpers/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteStartup(int id)
    {
        await startupService.DeleteStartupAsync(id);
        return NoContent();
    }
}