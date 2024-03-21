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
        chat: [
          {
            message:
              "Hello and Welcome to our platform! Please ask us any questions if you need help!",
            isAdmin: true,
            time: "18:20",
          },
          {
            message: "Hello! Thank you for supporting our startup!",
            isAdmin: false,
            time: "18:30",
          },
          {
            message: "How can I apply for support from your company?",
            isAdmin: false,
            time: "19:00",
          },
          {
            message:
              "To apply for support, visit our website's 'Support' page and fill out the application form. Our team will review your application and get back to you.",
            isAdmin: true,
            time: "19:40",
          },
          {
            message: "What kind of support do you offer to startups?",
            isAdmin: false,
            time: "20:10",
          },
          {
            message:
              "We offer a range of support services including mentorship, funding assistance, networking opportunities, and access to resources and tools.",
            isAdmin: true,
            time: "20:25",
          },
          {
            message: "How long does the application review process take?",
            isAdmin: false,
            time: "21:00",
          },
          {
            message:
              "The application review process typically takes around 2-4 weeks, depending on the volume of applications we receive and the complexity of your request.",
            isAdmin: true,
            time: "21:10",
          },
        ],
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
        chat: [
          {
            message:
              "Hello and Welcome to our platform! Please ask us any questions if you need help!",
            isAdmin: true,
            time: "18:20",
          },
          {
            message: "Hello thank you for supporting our startup!",
            isAdmin: false,
            time: "18:30",
          },
          {
            message: "How can I create a new request?",
            isAdmin: false,
            time: "19:00",
          },
          {
            message: "You can find the request section in your dashboard",
            isAdmin: true,
            time: "19:40",
          },
          {
            message: "How do I request coaching?",
            isAdmin: false,
            time: "20:10",
          },
          {
            message:
              "To request coaching, visit the 'Coaching' section and click on the 'Request Coaching' button.",
            isAdmin: true,
            time: "20:25",
          },
        ],
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
        chat: [
          {
            message:
              "Hello and Welcome to our platform! Please ask us any questions if you need help!",
            isAdmin: true,
            time: "18:20",
          },
          {
            message: "Hi there! I'm excited to explore your platform.",
            isAdmin: false,
            time: "18:30",
          },
          {
            message: "How can I connect with other startups on your platform?",
            isAdmin: false,
            time: "19:00",
          },
          {
            message:
              "You can connect with other startups through our community forum or by attending our networking events.",
            isAdmin: true,
            time: "19:40",
          },
          {
            message:
              "That sounds great! Do you provide any workshops or training sessions for startups?",
            isAdmin: false,
            time: "20:10",
          },
          {
            message:
              "Yes, we regularly organize workshops and training sessions covering various topics such as business development, marketing strategies, and fundraising.",
            isAdmin: true,
            time: "20:25",
          },
          {
            message:
              "How can I access funding opportunities through your platform?",
            isAdmin: false,
            time: "21:00",
          },
          {
            message:
              "You can explore funding opportunities through our 'Resources' section where we list available grants, investor contacts, and funding programs.",
            isAdmin: true,
            time: "21:10",
          },
          {
            message:
              "Thank you for the information! I'm looking forward to leveraging your platform for our startup.",
            isAdmin: false,
            time: "21:30",
          },
          {
            message:
              "You're welcome! If you have any more questions or need assistance, feel free to reach out anytime.",
            isAdmin: true,
            time: "21:45",
          },
        ],
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
