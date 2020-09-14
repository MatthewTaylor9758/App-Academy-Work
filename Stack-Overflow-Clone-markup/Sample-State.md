`
{
  Users {
    1: {
      id: 1,
      email: "SomePerson659@yahoo.com",
      username: "SomePerson659",
      password: "password",
      token: "some token",
      createdAt: some datetime,
      updatedAt: some datetime
    },
    1: {
      id: 2,
      email: "QuestionGuy@yahoo.com",
      username: "QuestionGuy244",
      password: "password2",
      token: "some token",
      createdAt: some datetime,
      updatedAt: some datetime
    },
    1: {
      id: 3,
      email: "AnswerGuy@gmail.com",
      username: "AnswerGuy22",
      password: "password",
      token: "some token",
      createdAt: some datetime,
      updatedAt: some datetime
    }
  },


  Questions {
    {
      id: 1,
      userId: "QuestionGuy244",
      content: "This is a question posed",
      score: 17,
      createdAt: some datetime,
      updatedAt: some datetime
    },
    {
      id: 2,
      userId: "QuestionGuy244",
      content: "This is second question posed",
      score: 12,
      createdAt: some datetime,
      updatedAt: some datetime
    }
  },

  Answers {
    {
      id: 1,
      userId: "AnswerGuy22",
      questionId: 2,
      content: "This is an answer to question 2",
      score: 3,
      createdAt: some datetime,
      updatedAt: some datetime
    }
    {
      id: 2,
      userId: "AnswerGuy22",
      questionId: 2,
      content: "This is another answer to question 2",
      score: 1,
      createdAt: some datetime,
      updatedAt: some datetime
    }
    {
      id: 3,
      userId: "AnswerGuy22",
      questionId: 1,
      content: "This is an answer to question 1",
      score: 8,
      createdAt: some datetime,
      updatedAt: some datetime
    }
  },

  Votes {
    {
      id: 1,
      userId: "QuestionGuy244",
      type: "answerVote",
      questionId: null,
      answerId: 1,
      direction: 1,
      createdAt: some datetime,
      updatedAt: some datetime
    }
    {
      id: 2,
      userId: "QuestionGuy244",
      type: "answerVote",
      questionId: null,
      answerId: 3,
      direction: -1,
      createdAt: some datetime,
      updatedAt: some datetime
    }
    {
      id: 3,
      userId: "AnswerGuy22",
      type: "questionVote",
      questionId: 2,
      answerId: null,
      direction: 1,
      createdAt: some datetime,
      updatedAt: some datetime
    }
  }
}
`
