using AppAPI.Model;
using AppAPI.Service;
using Microsoft.AspNetCore.Mvc;

namespace AppAPI.Controler;

[Route("api/[controller]")]
[ApiController]
public class StartupApplicationController(IStartupApplicationService applicationService) : ControllerBase
{
    [HttpPost]
    public async Task<IActionResult> Apply([FromBody] StartupApplication application)
    {
        if (ModelState.IsValid)
        {
            await applicationService.ApplyAsync(application);
            return Ok();
        }

        return BadRequest(ModelState);
    }
}