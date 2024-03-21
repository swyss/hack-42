namespace AppAPI.Service.User;

public interface IAuthService
{
    Task<string> AuthenticateAsync(string username, string password);
}

