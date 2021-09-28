export const ICON_COMMENT = <i className="far fa-comment-alt"></i>;
export const ICON_DESC = <i className="fas fa-sort-up"></i>;
export const ICON_ASC = <i className="fas fa-sort-down"></i>;

export const SCHOOL_OPTIONS = [
  { value: 1, label: "A" },
  { value: 2, label: "B" },
  { value: 3, label: "C" },
  { value: 4, label: "D" },
  { value: 5, label: "F" },
];
export const EMPLOYER_OPTIONS = [
  { value: 1, label: "A" },
  { value: 2, label: "B" },
  { value: 3, label: "C" },
  { value: 4, label: "D" },
  { value: 5, label: "F" },
];
export const GENDER_OPTIONS = [
  { value: "M", label: "Male" },
  { value: "F", label: "Female" },
];
export const USER_PROFILE = {
  id: 123,
  firstName: "Michael",
  lastName: "Bluth",
  sex: "Male",
  birthday: "1968-06-20",
  currentCity: "Scramton, PA",
  hometown: "Bevery Hills, CA",
  interests: ["soccer", "football", "basketball"],
  education: [{ school: "A", graduate: 1999 }],
  professional: [{ employer: "A", jobTitle: "frontend developer" }],
};
export const SEARCH_RESULT = [
  {
    id: 213,
    email: "",
    connectedSince: "",
    relationship: "",
    firstName: "",
    lastName: "",
    sex: "",
    birthday: "",
    currentCity: "",
    hometown: "",
    interests: [],
    education: [],
    professional: [],
  },
  {
    id: 214,
    email: "a1@gmail.com",
    connectedSince: "11-11-2011",
    relationship: "Former Coach",
    firstName: "nguyen",
    lastName: "nguyen xuan",
    sex: "Male",
    birthday: "1993-02-10",
    currentCity: "dong nai",
    hometown: "dong nai",
    interests: ["running", "batminton", "ping pong"],
    education: [{ school: "A", graduate: 1999 }],
    professional: [{ employer: "A", jobTitle: "frontend developer" }],
  },
  {
    id: 123,
    email: "a2@gmail.com",
    connectedSince: "12-12-2012",
    relationship: "co-worker",
    firstName: "Michael",
    lastName: "Bluth",
    sex: "Male",
    birthday: "1968-06-20",
    currentCity: "Scramton, PA",
    hometown: "Bevery Hills, CA",
    interests: ["soccer", "football", "basketball"],
    education: [{ school: "A", graduate: 1999 }],
    professional: [{ employer: "A", jobTitle: "frontend developer" }],
  },
];

export const STATUS = [
  {
    id: 123,
    content: "I can’t believe it’s only 2:15! Can’t wait to get outta here….",
    time: "August 30, 2010 2:15PM",
    comment: [
      {
        time: "August 30, 2010 at 2:18PM",
        content:
          "Do you think I’m not keeping an eye on your MyFace status??? Get back to work!",
        owner: "George Bluth",
      },
      {
        time: "August 30, 2010 at 2:22PM",
        content:
          "Well, you can’t be working too hard since you had time to put my stapler inside a Jello mold.",
        owner: "Dwight Shrute",
      },
    ],
  },
  {
    id: 234,
    content: "Work, work, work...",
    time: "August 30, 2010 9:06AM",
    comment: [],
  },
  {
    id: 345,
    content:
      "I just saw the movie Inception and it was crazy… What happened at the end anyway? I’m going to have to watch it again on Saturday. Anyone up for it???",
    time: "August 28, 2010 8:15PM",
    comment: [
      {
        time: "August 29, 2010 at 9:09PM",
        content:
          "I’m in. I’ve only seen the movie twice now. What’s one more time?",
        owner: "Pam Beasley",
      },
    ],
  },
];
