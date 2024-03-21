namespace AppAPI.Model;

public class Startup
{
    public int StartupId { get; set; }
    public string Name { get; set; }
    public DateTime FoundingDate { get; set; }
    public string Industry { get; set; }
    public string Description { get; set; }
    public string Status { get; set; } // z.B. In Gründung, Aktiv
}