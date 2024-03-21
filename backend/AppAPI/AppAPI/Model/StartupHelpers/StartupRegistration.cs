namespace AppAPI.Model.StartupHelpers;

public class StartupRegistration
{
    public StartupRegistration(string name, string founder, string email, string website, string description, string founderFirstName, string founderLastName, string founderdateOfBirth, string founderGender, string founderEmail, string founderPhone, string founderAddressCity, string founderAddressZip, string founderAddressCountry, string founderAddressStreet, string founderAddressNumber, string founderNationality, string founderLinkedIn, string founderUniversity, string founderDegree, string founderFieldOfStudy, string founderGraduationDate, string founderUniStartDate, string founderUniversityCountry, string founderUniversityCity, string startupName, string startupDescription, string startupDate, string startupPotential, string startupFellowship24, string startupNumOfCoFounder, string startupCoFounder, string founderEnglishProTest, string founderEnglishProLevel, string founderEnglishProofPath, string founderHearAboutStart)
    {
        FounderFirstName = founderFirstName;
        FounderLastName = founderLastName;
        FounderDateOfBirth = founderdateOfBirth;
        FounderGender = founderGender;
        FounderEmail = founderEmail;
        FounderPhone = founderPhone;
        FounderAddressCity = founderAddressCity;
        FounderAddressZIP = founderAddressZip;
        FounderAddressCountry = founderAddressCountry;
        FounderAddressStreet = founderAddressStreet;
        FounderAddressNumber = founderAddressNumber;
        FounderNationality = founderNationality;
        FounderLinkedIn = founderLinkedIn;
        FounderUniversity = founderUniversity;
        FounderDegree = founderDegree;
        FounderFieldOfStudy = founderFieldOfStudy;
        FounderGraduationDate = founderGraduationDate;
        FounderUniStartDate = founderUniStartDate;
        FounderUniversityCountry = founderUniversityCountry;
        FounderUniversityCity = founderUniversityCity;
        StartupName = startupName;
        StartupDescription = startupDescription;
        StartupDate = startupDate;
        StartupPotential = startupPotential;
        StartupFellowship24 = startupFellowship24;
        StartupNumOfCoFounder = startupNumOfCoFounder;
        StartupCoFounder = startupCoFounder;
        FounderEnglishProTest = founderEnglishProTest;
        FounderEnglishProLevel = founderEnglishProLevel;
        FounderEnglishProofPath = founderEnglishProofPath;
        FounderHearAboutStart = founderHearAboutStart;

    }
// personal data
    public string FounderFirstName { get; set; }
    public string FounderLastName { get; set; }
    public string FounderDateOfBirth { get; set; }
    public string FounderGender { get; set; }
    public string FounderEmail { get; set; }
    public string FounderPhone { get; set; }
    public string FounderAddressCity { get; set; }
    public string FounderAddressZIP { get; set; }
    public string FounderAddressCountry { get; set; }
    public string FounderAddressStreet { get; set; }
    public string FounderAddressNumber { get; set; }
    public bool FounderEU { get; set; } //EU-Passport
    public string FounderNationality { get; set; }
    public string FounderLinkedIn { get; set; }
    // Academia
    public string FounderUniversity { get; set; }
    public string FounderDegree { get; set; }
    public string FounderFieldOfStudy { get; set; }
    public string FounderGraduationDate { get; set; }
    public string FounderUniStartDate { get; set; }
    public string FounderUniversityCountry { get; set; }
    public string FounderUniversityCity { get; set; }
    // Startup
    public string StartupName { get; set; }
    public string StartupDescription { get; set; }
    public string StartupDate { get; set; }
    public string StartupPotential { get; set; }
    public string StartupFellowship24 { get; set; }
    public string StartupNumOfCoFounder { get; set; }
    public string StartupCoFounder { get; set; }
    // Additional Information
    public string FounderEnglishProTest { get; set; }
    public string FounderEnglishProLevel { get; set; }
    public string FounderEnglishProofPath { get; set; }
    public string FounderHearAboutStart { get; set; }
    
    
    
    

}
