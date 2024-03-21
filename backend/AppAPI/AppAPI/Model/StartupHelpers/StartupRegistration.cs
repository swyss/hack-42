namespace AppAPI.Model.StartupHelpers;

public class StartupRegistration
{
    public StartupRegistration(string name, string founder, string email, string website, string description)
    {
        Name = name;
        Founder = founder;
        Email = email;
        Website = website;
        Description = description;
    }

    public string Name { get; set; }
    public string Founder { get; set; }
    public string Email { get; set; }
    public string Website { get; set; }
    public string Description { get; set; }

}
