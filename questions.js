//Array of objects
const quiz = [
    {
        q:" ____ at school yesterday?",
        options:["Were you", "Was you", "Did you", "Is you"],
        answer: 0
    },
    {
        q:"Is your family large? - ____ ",
        options:["Yes, they are.", "Yes, it is.", "No, it not.", "No, they isn’t."],
        answer: 1
    },
    {
        q:"What ____ he want?",
        options:["have", "do", "does", "was"],
        answer: 2
    },
    {
        q:" ____ do you have dinner?",
        options:["What for", "What kind of", "When time", "What time" ],
        answer: 3
    },
    {
        q:"He ____ to go home. ",
        options:["didn't want", "want", "did", "didn't wanted"],
        answer: 0
    },
    {
        q:"Where ____ to school?",
        options:["did you went", "did you go", "went you", "did go"],
        answer: 1
    },
    {
        q:"Latin ____ compulsory in Irish schools. ",
        options:["would be", "has been", "used to be", "has"],
        answer: 2   
    },
    {
        q:"The boy ____ cake when his mother came into the room.",
        options:["has eating", "eats", "was eat", "was eating"],
        answer: 3
    },
    {
        q:"There ____ milk for my breakfast.",
        options:["isn't any", "isn't some", "-", "any"],
        answer: 0
    },
    {
        q:" ____ people from Poland went to Scotland in the 20th century. ",
        options:["Many of", "Many", "Some of", "-"],
        answer: 1
    },
    {
        q:"There are ____ French speakers in Montreal.",
        options:["not much", "too much", "a lot of", "a little"],
        answer: 2
    },
    {
        q:"She ____ with her friends on Facebook™ every day",
        options:["will communicating", "-", "is communicating", "communicates"],
        answer: 3
    },
    {
        q:"More and more people ____ divorced every year. ",
        options:["are getting", "wanting", "getting", "are wanting"],
        answer: 0
    },
    {
        q:"Many, but not all, people ____ get married in a church. ",
        options:["are wanting to", "want to", "wanting to", "used to want"],
        answer: 1
    },
    {
        q:"Would you like ____ to the theatre tonight?",
        options:["going", "go", "to go", "to going"],
        answer: 2
    },
    {
        q:"I ____ to Peru on holiday next month.",
        options:["will flying", "am go flying", "flying", "am flying"],
        answer: 3
    },
    {
        q:"Oh! It ____ . I’ll take an umbrella with me. ",
        options:["’s raining", "rains", "will raining", "raining"],
        answer: 0
    },
    {
        q:"Do you have any plans for tonight? Yes, we ____ to the cinema.",
        options:["going", "are going", "will go", "go"],
        answer: 1
    },
    {
        q:"I plan to ____ two weeks by the beach. ",
        options:["making", "bring", "spend", "spending"],
        answer: 2
    },
    {
        q:"The fast food restaurant was _____ dirty. We didn’t eat there. ",
        options:["extreme", "bit", "very much", "extremely"],
        answer: 3
    },
    {
        q:"This restaurant is ____ the one over there.",
        options:["more traditional than", "traditionaler than", "traditionaler", "traditional"],
        answer: 0
    },
    {
        q:"My coffee was ____ yours. I almost burned by mouth.",
        options:["more hot than", "hotter than", "as hot", "hotter as"],
        answer: 1
    },
    {
        q:"The ____ coffee in the world comes from Indonesia.",
        options:["expensive", "expensivest", "most expensive", "more expensive"],
        answer: 2
    },
    {
        q:"I ____ sushi. ",
        options:["have ever eaten", "eat", "eaten", "have never eaten"],
        answer: 3
    },
    {
        q:"She has ____ finished this week’s report.",
        options:["already", "yet", "ever", "never"],
        answer: 0
    },
    {
        q:"I don’t think you ____ them.",
        options:["should to email", "should email", "should emailing", "-"],
        answer: 1
    },
    {
        q:"In the future there ____ cures to the world’s worst diseases.",
        options:["might have", "will being", "might be", "is going to being"],
        answer: 2   
    },
    {
        q:"The space tourists ____ certainly need to be very fit.",
        options:["going to", "-", "won't", "will"],
        answer: 3
    },
    {
        q:"If my new company is successful, I ____ employ people to help me.",
        options:["will be able to", "will able to", "will", "be able to"],
        answer: 0
    },
    {
        q:"The first reality TV show ____ in Sweden in 1997.",
        options:["is shown", "was shown", "shown", "showed"],
        answer: 1
    },
    {
        q:"The film Avatar was directed ____ James Cameron.",
        options:["with", "for", "by", "from"],
        answer: 2
    },
    {
        q:"I’ve had my cat ____ 4 years.",
        options:["it", "with", "since", "for"],
        answer: 3
    },
    {
        q:"Her horse is lovely. She _____ it since she was a teenager.",
        options:["has had", "had", "is had", "have"],
        answer: 0
    },
    {
        q:"I’ve received 33 emails  ____ .",
        options:["on Friday", "yesterday", "two days ago", "this week"],
        answer: 1
    },
    {
        q:"How often have you been to the doctor  ______ ",
        options:["last week?", "yesterday?", "in the last twelve months?", "one year ago?"],
        answer: 2
    },
    {
        q:"I was saving up ____ a new computer.",
        options:["for buying", "-", "to buying", "to buy"],
        answer: 3
    },
    {
        q:"You ____ wear a suit to work, but you can if you want.",
        options:["don't have to", "could", "must", "mustn't"],
        answer: 0
    },
    {
        q:"I had to ____ a uniform to school when I was younger.",
        options:["wearing", "wear", "have", "having"],
        answer: 1
    },
    {
        q:"Cecilia knows someone ____ went to the carnival in Rio de Janeiro.",
        options:["where", "she", "who", "which"],
        answer: 2
    },
    {
        q:"Oxfam is a charity ____ tries to find lasting solutions to poverty.",
        options:["it", "who", "-", "which"],
        answer: 3
    }
    


]