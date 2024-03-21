namespace AppAPI.Model.StartupHelpers;

public class PersonalInfo
{
    public PersonalInfo(string firstName, string lastName, DateTime dateOfBirth, string gender, string email, string phone, string addressCity, string addressZip, string addressCountry, string addressStreet, string addressNumber, bool euPassword, string nationality, string linkedIn)
    {
        FirstName = firstName;
        LastName = lastName;
        DateOfBirth = dateOfBirth;
        Gender =  (Gender)Enum.Parse(typeof(Gender), gender);;
        Email = email;
        Phone = phone;
        AddressCity = addressCity;
        AddressZIP = addressZip;
        AddressCountry = addressCountry;
        AddressStreet = addressStreet;
        AddressNumber = addressNumber;
        EU_Password = euPassword;
        Nationality = nationality;
        LinkedIn = linkedIn;
    }

    public string FirstName { get; set; }
    public string LastName { get; set; }
    public DateTime DateOfBirth { get; set; }
    public Gender Gender { get; set; }
    public string Email { get; set; }
    public string Phone { get; set; }
    public string AddressCity { get; set; }
    public string AddressZIP { get; set; }
    public string AddressCountry { get; set; }
    public string AddressStreet { get; set; }
    public string AddressNumber { get; set; }
    public bool EU_Password { get; set; } //EU-Passport
    public string Nationality { get; set; }
    public string LinkedIn { get; set; }
}

public enum Gender
{
    Female=1,
    Male=2,
    PreferNotToSay=10,
    Other=100

}