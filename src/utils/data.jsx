const linebreak = <br />;

export const formValidationData = {
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

export const jobInfo = [
  {
    value: "job 1",
    description: "Job 1",
  },
  {
    value: "job 2",
    description: "Job 2",
  },
  {
    value: "job 3",
    description: "Job 3",
  },
  {
    value: "job 4",
    description: "Job 4",
  },
  {
    value: "job 5",
    description: "Job 5",
  },
  {
    value: "job 6",
    description: "Job 6",
  },
  {
    value: "job 7",
    description: "Job 7",
  },
  {
    value: "job 8",
    description: "Job 8",
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
      "Is there a way for me to keep track of my information in your system?",
    answer:
      "Yes, once you submit your information you will be given an ID number. You don't need to copy the full thing just the last 5 or 6 characters are fine. You can then call us anytime & ask to review the information you've given to us.",
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
      "We generally prefer emails, they are less intrusive & you can check them at your leasure, however, we will call you for something important, urgent or if that's the only communication method you've given us.",
  },
  {
    question:
      "Are there required fields that I need to fill out in order to submit the form?",
    answer:
      "Yes, first name, last name, ss number & phone number are all required information.",
  },
  {
    question:
      "Why are those specific pieces of information required to fill out this form?",
    answer:
      "First & last name so that we know who to communicate with : ss number so that we can perform the necessary background check : phone number so that we can get ahold of you since everyone (generally) has a phone where they can be reached, but believe it or not, not everyone has an email address. ",
  },
];

export const alerts = {
  success:
    "Your information was successfully submitted!\nYour submission ID is:",
  failure: "Error adding information",
};
