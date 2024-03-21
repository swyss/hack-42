namespace AppAPI.Service.User;

public interface IAuthService
{
    Task<string> AuthenticateAsync(string username, string password);
}

public class AuthService : IAuthService
{
    public async Task<string> AuthenticateAsync(string username, string password)
    {
        return "token"; // JWT Token
    }
}