namespace AppAPI.Model;

public class StartupApplication(int id, string startupName, string founderNames, string email, string description)
{
    
    public int Id { get; set; } = id;
    public string StartupName { get; set; } = startupName;
    public string FounderNames { get; set; } = founderNames;
    public string Email { get; set; } = email;
    public string Description { get; set; } = description;
    public DateTime ApplicationDate { get; set; } = DateTime.Now;
}