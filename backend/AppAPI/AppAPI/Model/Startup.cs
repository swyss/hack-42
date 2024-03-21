namespace AppAPI.Model;

public class Startup
{
    public Startup(int startupId, string name, DateTime foundingDate, string industry, string description, string status)
    {
        StartupId = startupId;
        Name = name;
        FoundingDate = foundingDate;
        Industry = industry;
        Description = description;
        Status = status;
    }

    public int StartupId { get; set; }
    public string Name { get; set; }
    public DateTime FoundingDate { get; set; }
    public string Industry { get; set; }
    public string Description { get; set; }
    public string Status { get; set; } // z.B. In Gründung, Aktiv
}