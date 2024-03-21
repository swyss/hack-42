using AppAPI.Model;
using AppAPI.Model.StartupHelpers;
using AppAPI.Service;
using AppAPI.Service.StartupHelpers;
using Microsoft.AspNetCore.Mvc;

namespace AppAPI.Controler;

[Route("api/[controller]")]
[ApiController]
public class StartupApplicationController(IStartupRegistrationService registrationService) : ControllerBase
{
    // POST: api/Register
    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] StartupRegistration registration)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

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
}