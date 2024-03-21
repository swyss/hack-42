import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CoachForm from "@/components/form/coach/CoachForm";

const Coach = () => {
  const coach = [
    {
      firstname: "Jean",
      lastname: "Jardin",
      email: "jean.jardin@hack.com",
      country: "France",
      phone: "0000000000",
    },
    {
      firstname: "Danielle",
      lastname: "Johnson",
      email: "john21@hotmail.com",
      country: "Saint Vincent",
      phone: "+1-196-001-3389",
    },
    {
      firstname: "Anthony",
      lastname: "Gonzalez",
      email: "lrobinson@yahoo.com",
      country: "Sudan",
      phone: "2654235116",
    },
    {
      firstname: "Colin",
      lastname: "Abbott",
      email: "lindsay78@gmail.com",
      country: "Uzbekistan",
      phone: "(184)959-3103x4131",
    },
    {
      firstname: "Norman",
      lastname: "Chavez",
      email: "francisco53@hotmail.com",
      country: "Ethiopia",
      phone: "001-192-832-7648x350",
    },
    {
      firstname: "Jeremy",
      lastname: "Johnson",
      email: "richard13@hotmail.com",
      country: "Turkey",
      phone: "001-537-672-4238x849",
    },
    {
      firstname: "Ross",
      lastname: "Silva",
      email: "jeffrey28@yahoo.com",
      country: "Bermuda",
      phone: "001-012-269-1669x78480",
    },
  ];

  return (
    <div className="">
      <div>
        <h1 className="text-3xl font-bold">Coach</h1>
      </div>
      <div className="mt-8">
        <div>
          <CoachForm />
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Firstname</TableHead>
              <TableHead>Lastname</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Country</TableHead>
              <TableHead>Phone</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {coach.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.firstname}</TableCell>
                <TableCell>{item.lastname}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.country}</TableCell>
                <TableCell>{item.phone}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Coach;
