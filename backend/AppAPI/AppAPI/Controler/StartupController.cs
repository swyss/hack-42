using AppAPI.Model;
using AppAPI.Model.StartupHelpers;
using AppAPI.Service;
using AppAPI.Service.StartupHelpers;
using Microsoft.AspNetCore.Mvc;

namespace AppAPI.Controler;

[Route("api/[controller]")]
[ApiController]
public class StartupController(IStartupRegistrationService registrationService, IStartupService startupService)
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
        if (id != startup.StartupId) return BadRequest();

        await startupService.UpdateStartupAsync(startup);
        return NoContent();
    }

    // POST: api/Register
    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] StartupRegistration registration)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);

        try
        {
            await registrationService.RegisterAsync(registration);
            return Ok("Startup successfully registered.");
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Internal Server-Error: {ex.Message}");
        }
    }

    // DELETE: api/StartupHelpers/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteStartup(int id)
    {
        await startupService.DeleteStartupAsync(id);
        return NoContent();
    }
}