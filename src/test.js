const initializeValidate = require("./index");

const dictionary = [
  {
    key: "books",
    label: "favorite books",
    type: "array",
    typeArrayItem: "string",
    maxLengthArray: 4,
    maxLengthArrayItem: 6,
    whitelistArray: ["test", "thing", "yooo"],
    blacklistArray: {
      exact: ["yooO"],
    },
  },
  {
    key: "cursor",
    type: "base64",
  },
  {
    key: "isLiked",
    label: "liked state",
    type: "boolean",
  },
  {
    key: "isBookmarked",
    label: "bookmarked state",
    type: "booleanNumber",
  },
  {
    key: "isSaved",
    label: "saved state",
    type: "booleanString",
  },
  {
    key: "isAny",
    label: "any boolean",
    type: "booleanAny",
  },
  {
    key: "created_at",
    label: "published date",
    type: "date",
  },
  {
    key: "callback",
    type: "function",
    ignoreSanitizer: true,
  },
  {
    key: "data",
    type: "json",
  },
  {
    key: "dataStringified",
    label: "stringified data",
    type: "jsonString",
  },
  {
    key: "id",
    type: "number",
    min: 5,
    max: 10,
  },
  {
    key: "properties",
    type: "object",
    whitelistKeys: ["pages", "words"],
    blacklistKeys: ["asd"],
  },
  {
    key: "r",
    label: "regex",
    type: "regex",
    ignoreSanitizer: true,
  },
  {
    key: "username",
    type: "string",
    // regex: ["noWhitespace", "noSpecialChar", "email"],
    // blacklist: {
    //   exact: ["mrsbottoms"],
    //   loose: ["botom"],
    // },
    // whitelist: ["mrbottoms"],
  },
  {
    key: "username_confirmation",
    label: "username confirmation",
    type: "string",
    match: "username",
  },
  {
    key: "comment",
    label: "Comment",
    type: "string",
    maxLengthHTML: 15,
    minLengthHTML: 5,
    minWordsHTML: 3,
    maxWordsHTML: 5,
  },
  {
    key: "comment2",
    label: "Comment 2",
    type: "string",
    minLength: 10,
    minWords: 3,
    maxWords: 5,
  },
  {
    key: "chew",
    type: "valid",
  },
  {
    key: "token",
    type: "jwt",
  },
  {
    key: "jumanji",
    type: "stringOrArray",
  },
  {
    key: "ticketLink",
    type: "http",
  },
];

const payload = {
  books: ["test", "thing", "yooo"],
  cursor: "MTAw",
  isLiked: false,
  isBookmarked: 0,
  isSaved: "true",
  isAny: 1,
  created_at: new Date(),
  callback: () => null,
  data: { text: "This is some text." },
  dataStringified: `["as0df90asd9f09"]`,
  id: "5",
  properties: { pages: 100, words: 5000 },
  r: new RegExp(),
  chew: "null",
  username: "mrbottoms_",
  username_confirmation: "mrbottoms_",
  comment: "<p>asdf a s dfs d</p>",
  comment2: "asda sda  asdf asdf asdf",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJpenZpbmFtZWVyQGdtYWlsLmNvbSIsImlhdCI6MTYzNzI3MjMyMiwiZXhwIjoxNjM3MjczMjIyfQ.cQVGo42D_emjj-o1SZPFAwlnSsSYFt8mVALpXYIH8lo",
  jumanji: ["testtttt"],
  ticketLink: "http://dcmusic.live",
};

const required = dictionary.map((i) => i.key);

try {
  const sanitizedPayload = initializeValidate(dictionary)(payload, required);
  console.log({ sanitizedPayload });
} catch (error) {
  console.log({ error: error.toString() });
}

initializeValidate(dictionary, { async: true })(payload, required)
  .then((sanitizedPayload) => console.log({ sanitizedPayload }))
  .catch((error) => console.log({ error: error.toString() }));
