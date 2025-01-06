export const formData = {
  maxNameLength: 25,
  maxEmailLength: 50,
  maxAgeLength: 2,
  minAgeLength: 1,
  phoneNumCharLength: 10,
  ssCharLength: 9,
  minCharLength: 2,
  verifyNum: /^[0-9]+$/,
  verifyChar: /^[a-zA-Z]+$/,
};

export const checkboxInfo = [
  {
    name: "job 1",
    forLabel: "job 1",
    label: "Job 1",
  },
  {
    name: "job 2",
    forLabel: "job 2",
    label: "Job 2",
  },
  {
    name: "job 3",
    forLabel: "job 3",
    label: "Job 3",
  },
  {
    name: "job 4",
    forLabel: "job 4",
    label: "Job 4",
  },
  {
    name: "job 5",
    forLabel: "job 5",
    label: "Job 5",
  },
  {
    name: "job 6",
    forLabel: "job 6",
    label: "Job 6",
  },
  {
    name: "job 7",
    forLabel: "job 7",
    label: "Job 7",
  },
  {
    name: "job 8",
    forLabel: "job 8",
    label: "Job 8",
  },
];

export const faqsInfo = [
  {
    question: "Where does my information go?",
    answer:
      "Your information goes into our database so that we can run a background check & if you're selected for a role, we will use your information for payroll purposes to get you paid! If you're not selected, we will delete your information promptly!",
  },
  {
    question: "How secure is your database?",
    answer:
      "We use firebase (a backend database service) which is quite secure & has been in service since 2011.",
  },
  {
    question:
      "How long is the turnaround time for the background check, communication for the new job, etc.?",
    answer:
      "This is a difficult question to answer because the background check depends on your history. Generally it takes about 2 weeks for a background check to come back provided it's clean, after that we can move further into the onboarding process.",
  },
  {
    question: "How will you keep in contact with me?",
    answer:
      "We generally prefer emails, they are less intrusive & you can check them at your leasure. We will call you for something important or urgent.",
  },
];
