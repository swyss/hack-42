import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const requests = [
  {
    type: "Coaching",
    fullname: "Jean Jardin",
  },
  {
    type: "Travel",
    fullname: "Danielle Johnson",
  },
  {
    type: "Travel",
    fullname: "Anthony Gonzalez",
  },
  {
    type: "Reimboursement",
    fullname: "Alin Abbott",
  },
  {
    type: "Intro",
    fullname: "Norman Chavez",
  },
];

const RequestAdm = () => {
  const [stSelected, setStSelected] = useState(false);
  return (
    <div className="">
        <div><h1>Admin request</h1></div>
      {stSelected ? (
        <div>
            <p onClick={() => {setStSelected(false)}}>close</p>
        </div>
      ) : (
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Request type</TableHead>
                <TableHead>Fullname</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {requests.map((item, index) => (
                <TableRow
                  key={index}
                  onClick={() => {
                    setStSelected(true);
                  }}
                >
                  <TableCell>{item.type}</TableCell>
                  <TableCell>{item.fullname}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default RequestAdm;
