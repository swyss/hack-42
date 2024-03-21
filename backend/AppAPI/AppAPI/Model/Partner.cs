namespace AppAPI.Model;

public class Partner
{
    public Partner(int partnerId, string name, string type, string industry, string contactInfo)
    {
        PartnerId = partnerId;
        Name = name;
        Type = type;
        Industry = industry;
        ContactInfo = contactInfo;
    }

    public int PartnerId { get; set; }
    public string Name { get; set; }
    public string Type { get; set; } // z.B. Unterstützer, Sponsor
    public string Industry { get; set; }
    public string ContactInfo { get; set; } // Einfaches Kontaktinformationsfeld, kann erweitert werden
}