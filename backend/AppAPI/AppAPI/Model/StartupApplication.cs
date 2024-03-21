namespace AppAPI.Model;

public class StartupApplication
{
    public StartupApplication(int id, string startupName, string founderNames, string email, string description)
    {
        Id = id;
        StartupName = startupName;
        FounderNames = founderNames;
        Email = email;
        Description = description;
    }

    public int Id { get; set; }
    public string StartupName { get; set; }
    public string FounderNames { get; set; }
    public string Email { get; set; }
    public string Description { get; set; }
    public DateTime ApplicationDate { get; set; } = DateTime.Now; // Standardmäßig auf das aktuelle Datum gesetzt
}