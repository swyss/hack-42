namespace AppAPI.Model;

public class StartupApplication
{
    public int Id { get; set; }
    public string StartupName { get; set; }
    public string FounderNames { get; set; }
    public string Email { get; set; }
    public string Description { get; set; }
    public DateTime ApplicationDate { get; set; } = DateTime.Now; // Standardmäßig auf das aktuelle Datum gesetzt
}