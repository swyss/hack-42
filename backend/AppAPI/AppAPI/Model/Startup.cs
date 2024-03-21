using AppAPI.Model.StartupHelpers;


namespace AppAPI.Model;

public class Startup
{
    public Startup(int startupId, DateTime registrationDate, string status)
    {
        StartupId = startupId;
        RegistrationDate = registrationDate;
        Status = status;
    }

    public Startup()
    {
        throw new NotImplementedException();
    }

    public int StartupId { get; set; }
    public PersonalInfo PersonalInfo { get; set; }
    public AcademiaInfo AcademiaInfo { get; set; }
    public StartupInfo StartupInfo { get; set; }
    public DateTime RegistrationDate { get; set; }
    public string Status { get; set; }
    public string Name { get; set; }
}