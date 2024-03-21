namespace AppAPI.Service.User;

public class AuthService : IAuthService
{
    public async Task<string> AuthenticateAsync(string username, string password)
    {
        switch (username)
        {
            case "admin":
                return "AdminHack24"; // JWT Token
            case "user":
                return "UserHack24"; // JWT Token
            default:
                return string.Empty;
        }
    }
}