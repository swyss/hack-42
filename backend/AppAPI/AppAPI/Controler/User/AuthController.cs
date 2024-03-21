using AppAPI.Model.User;
using AppAPI.Service.User;
using Microsoft.AspNetCore.Mvc;

namespace AppAPI.Controler.User;

[Route("api/[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;

    public AuthController(IAuthService authService)
    {
        _authService = authService;
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginModel loginModel)
    {
        var token = await _authService.AuthenticateAsync(loginModel.Username, loginModel.Password);

        if (string.IsNullOrEmpty(token))
        {
            return Unauthorized();
        }

        return Ok(new { Token = token });
    }
}