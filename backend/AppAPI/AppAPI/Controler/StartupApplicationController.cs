using AppAPI.Model;
using AppAPI.Service;
using Microsoft.AspNetCore.Mvc;

namespace AppAPI.Controler;

[Route("api/[controller]")]
[ApiController]
public class StartupApplicationController : ControllerBase
{
    private readonly IStartupApplicationService _applicationService;

    public StartupApplicationController(IStartupApplicationService applicationService)
    {
        _applicationService = applicationService;
    }

    [HttpPost]
    public async Task<IActionResult> Apply([FromBody] StartupApplication application)
    {
        if (ModelState.IsValid)
        {
            await _applicationService.ApplyAsync(application);
            return Ok(); // oder passen Sie die Antwort an Ihre Bedürfnisse an
        }

        return BadRequest(ModelState); // Bei ungültigen Daten
    }
}