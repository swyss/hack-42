export const data = [
  {
    value: "current",
    label: "Current Bagde",
    batchs: [
      {
        id: 1111,
        name: "Startup current",
        logo: "https://picsum.photos/id/237/200/300",
        industry: "Testing",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        founderDetails: {
          fullname: "John Doe",
          email: "johndoe@gmail.com",
          birthday: "01.01.1999",
          phoneNumber: "076 888 88 88",
          city: "Basel",
          country: "Switzerland",
        },
      },
      {
        id: 1122,
        name: "Startup current",
        logo: "https://fastly.picsum.photos/id/765/536/354.jpg",
        industry: "Software",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        founderDetails: {
          fullname: "Hans Peter",
          email: "hans.peter@gmail.com",
          birthday: "10.02.1980",
          phoneNumber: "076 888 88 77",
          city: "München",
          country: "Germany",
        },
      },
    ],
  },
  {
    value: "badge2024Q4",
    label: "Badge 2024 Q4",
    batchs: [
      {
        id: 12344,
        name: "Startup past",
        logo: "https://picsum.photos/200",
        industry: "Software",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        founderDetails: {
          fullname: "Stefan Tester",
          email: "stefan.tester@gmail.com",
          birthday: "11.05.2003",
          phoneNumber: "076 888 82 22",
          city: "München",
          country: "Germany",
        },
      },
    ],
  },
];

export function getBatchById(id) {
  for (const item of data) {
    for (const batch of item.batchs) {
      if (batch.id == id) {
        return batch;
      }
    }
  }
  return null; // Return null if batch with the specified ID is not found
}
