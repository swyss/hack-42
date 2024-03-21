import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "./button";

export const Application = () => {
    const applications = [
        {
            startupName: "Magic Monkeys",
            startupDescription: "NFT",
            startupPotential: "0",
            startupMotivation: "0",
            startupFounderamount: "0",
            startupCofounder: "El Tony Mate",
        },
        {
            startupName: "Me oui",
            startupDescription: "This company relies on cryptomining",
            startupPotential: "3",
            startupMotivation: "None",
            startupFounderamount: "69",
            startupCofounder: "Sir Van Palm Oil",
        },
        {
            startupName: "Wolff",
            startupDescription: "Institut für Wölfe",
            startupPotential: "7",
            startupMotivation: "High",
            startupFounderamount: "4",
            startupCofounder: "John Doe",
        },
        {
            startupName: "Jacobs Group",
            startupDescription: "investment startup",
            startupPotential: "5",
            startupMotivation: "Medium",
            startupFounderamount: "2",
            startupCofounder: "John Doe the 2nd",
        },
        {
            startupName: "Toy Group",
            startupDescription: "Company that creates fun for children",
            startupPotential: "8",
            startupMotivation: "High",
            startupFounderamount: "1",
            startupCofounder: "John Doe the 3rd",
        },
        {
            startupName: "Goldner LLC",
            startupDescription: "Harvesting gold in goldmines",
            startupPotential: "9",
            startupMotivation: "none",
            startupFounderamount: "1",
            startupCofounder: "Ben Baron",
        },
        {
            startupName: "Schaefer-Rice",
            startupDescription: "Startup that manages rice fields via Satalite images",
            startupPotential: "5",
            startupMotivation: "none",
            startupFounderamount: "2",
            startupCofounder: "Long-Fei",
        },
    ];

    return (
        <div className="">
            <div>
                <h1 className="text-3xl font-bold">Request Application</h1>
            </div>
            <div className="mt-8">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>
                                Startup
                            </TableHead>
                            <TableHead>
                                Description
                            </TableHead>
                            <TableHead>
                                Potential
                            </TableHead>
                            <TableHead>
                                Motivation
                            </TableHead>
                            <TableHead>
                                Amount of Co-Founder
                            </TableHead>
                            <TableHead>
                                Co-Founder
                            </TableHead>
                            <TableHead>
                                *
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {applications.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    {item.startupName}
                                </TableCell>
                                <TableCell>
                                    {item.startupDescription}
                                </TableCell>
                                <TableCell>
                                    {item.startupPotential}
                                </TableCell>
                                <TableCell>
                                    {item.startupMotivation}
                                </TableCell>
                                <TableCell>
                                    {item.startupFounderamount}
                                </TableCell>
                                <TableCell>
                                    {item.startupCofounder}
                                </TableCell>
                                <TableCell>
                                    <div className="flex flex-row">
                                        <Button>Accept</Button>
                                        <Button variant={"destructive"}>Decline</Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};