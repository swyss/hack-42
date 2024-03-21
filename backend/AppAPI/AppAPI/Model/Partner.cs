namespace AppAPI.Model;

public class Partner
{
    public int PartnerId { get; set; }
    public string Name { get; set; }
    public string Type { get; set; } // z.B. Unterstützer, Sponsor
    public string Industry { get; set; }
    public string ContactInfo { get; set; } // Einfaches Kontaktinformationsfeld, kann erweitert werden
}