Vote.destroy_all
Answer.destroy_all
Question.destroy_all
User.destroy_all

#Users

user0 = User.create(
  display_name: "CodingCat",
  email: "coding_cat@gmail.com",
  password: "password"
)

user1 = User.create(
  display_name: "ProgrammingPoodle",
  email: "programming_poodle@gmail.com",
  password: "password"
)

user2 = User.create(
  display_name: "SingingSyntax",
  email: "sing@gmail.com",
  password: "password"
)

user3 = User.create(
  display_name: "OverflowOverlord",
  email: "over@gmail.com",
  password: "password"
)

user4 = User.create(
  display_name: "PancakeHouse",
  email: "pancakes@gmail.com",
  password: "password"
)

user5 = User.create(
  display_name: "ComputerCow",
  email: "computercow@gmail.com",
  password: "password"
)

user6 = User.create(
  display_name: "UnseededUser",
  email: "userflower@gmail.com",
  password: "password"
)

user7 = User.create(
  display_name: "T-Pain",
  email: "tpain@gmail.com",
  password: "password"
)

user8 = User.create(
  display_name: "QueenElizabeth",
  email: "thequeen@gmail.com",
  password: "password"
)

user9 = User.create(
  display_name: "Demo User",
  email: "demo@user.com",
  password: "password"
)

#Questions

question0 = Question.create(
  title: "What's the difference between Java and JavaScript", 
  body: "I know both are programming languages, but what is the difference? Are they related? Is the syntax the same?", 
  author_id: user0.id
)

question1 = Question.create(
  title: "When should I use React to manage my state as opposed to Redux?", 
  body: "I know it must seem weird because I must be on a computer right now, but metaphorically, programatically, what is a computer? How do they relate to code? What can I make of this?", 
  author_id: user1.id
)

question2 = Question.create(
  title: "What is a computer?", 
  body: "I know it must seem weird because I must be on a computer right now, but metaphorically, programatically, what is a computer? How do they relate to code? What can I make of this?", 
  author_id: user2.id
)

question3 = Question.create(
  title: "I can't get my application to register the changes I make in my React components.", 
  body: "I've closed my browser and refreshed my localhost, any ideas what might be causing this? I'm using a React-Redux, Ruby on Rails, PostgreSQL stack.", 
  author_id: user3.id
)

question4 = Question.create(
  title: "Is recursion cooler than iteration?", 
  body: "I'm trying to impress a classmate of mine and I want to know which of these approaches may make me seem skilled, knowledgable, and clever. What difference in time and space complexity exist in the different approaches typically?", 
  author_id: user4.id
)

question5 = Question.create(
  title: "What's the difference between a function and a method?", 
  body: "I know both are used in different languages but I can't seem to figure out the difference between the two. Are they the same? Is one a subset of the other? Square rectangle situation or no?", 
  author_id: user5.id
)

question6 = Question.create(
  title: "I'm considering a career in tech...", 
  body: "What sort of things should I watch out for as far as pivoting into the industry? What kind of cultures are present in the industry? Is it just nerds? What of diversity and inclusion, but also accessability? I'd like an open discussion on this one.", 
  author_id: user6.id
)

question7 = Question.create(
  title: "I'm considering a career switch", 
  body: "I've had an immensely successful career as a music artist and I'm wondering what possibilities the realm of software engineering may hold for me. What sort of steps can I take to flirt with this aspiration further? Is this recommended for someone in my position?", 
  author_id: user7.id
)

question8 = Question.create(
  title: "I'm an artist, I'm a coder. Who am I?", 
  body: "What ways can I employ programming in my art? I want to answer questions—all of them. I can code but I don't know how my ability to code can bring me to this goal of mine. What ways do people typically combine programming ability with creative intrigue and passion?", 
  author_id: user8.id
)

question9 = Question.create(
  title: "I want to make an audio-visualizer.", 
  body: "What tools or frameworks would be helpful for me to use? I'm familiar with Java and Javascript. What should I look into? I like colors a lot.", 
  author_id: user7.id
)

question10 = Question.create(
  title: "I want to dress up as a data structure for Halloween.", 
  body: "Which one do you guys think I should pick? Any fun computer jokes for my costume?", 
  author_id: user6.id
)

#Answers 

answer0 = Answer.create(
  author_id: user1.id,
  question_id: question0.id,
  body: "JavaScript and Java and very different. Though both of them are C-style languages and include the word 'Java' in their names, their uses and applications vary greatly. JavaScript is a web-programming language used in conjunction with HTML while Java can function through its own devices. "
)

answer1 = Answer.create(
  author_id: user2.id,
  question_id: question0.id,
  body: "They're so different, JavaScript just used Java in the name for clout. OOPs, am I right??"
)

answer2 = Answer.create(
  author_id: user8.id,
  question_id: question1.id,
  body: "One might want to incorporate Redux into their project when considering scalability as well as unidirectionality of state. React does a fine job of passing information through components, but if you've got a complicated app that many people are going to be using, Redux will enable you to take a stronger hold of the information flowing through your app."
)

answer3 = Answer.create(
  author_id: user0.id,
  question_id: question2.id,
  body: "metaphorically, mother, machine, menace, mechanism, mobile, molecular, mental, maleable, momentus, maniacal, melded, monsoon. A computer can be your friend or your enemy, probably both, and so you might as well start treating it with respect. Programatically, the culmination of decades of development of software and hardware to deliver a tool for access of information and agency in communication."
)

answer4 = Answer.create(
  author_id: user0.id,
  question_id: question3.id,
  body: "It sounds like you don't have a JavaScript bundler running. Perhaps you need to run webpack?"
)

answer5 = Answer.create(
  author_id: user3.id,
  question_id: question3.id,
  body: "That was it, thank you!"
)

answer6 = Answer.create(
  author_id: user4.id,
  question_id: question4.id,
  body: "Recursion might get you more clout with your romantic interests but usually will not be the best way to solve your problems, programming otherwise. The time and space complexity of recursion depends entirely on the action you take on each recursive step, but there are situations where you can use steps like memoization to speed up the actual runtime of your application."
)

answer7 = Answer.create(
  author_id: user8.id,
  question_id: question4.id,
  body: "As the Queen of the Commonwealth, I've never once had to use recursion on the job. Think about what your goals of tomorrow are instead of what your goals for today are."
)

answer8 = Answer.create(
  author_id: user0.id,
  question_id: question5.id,
  body: "A function is something that takes in an input and spits out an output, like in math class. A method is when a function exists inside of a class, typically used in OOP."
)

answer9 = Answer.create(
  author_id: user1.id,
  question_id: question6.id,
  body: "A career in tech is certainly a great oppotunity to consider. Personally, I came from a creative background. I studied art in college and wanted to develop my tools of expression further so I pursued a coding bootcamp. A coding bootcamp is a good way to pivot into a career in tech because they streamline the information and skills required to do a job well as well as the skills necessary to even get the job in the first place. Happy to talk about it further if you're interested."
)

answer10 = Answer.create(
  author_id: user6.id,
  question_id: question7.id,
  body: "Hey T-Pain, I'm a big fan of your music. I actually just asked a question similar to this one. The response I got was to consider a coding bootcamp. After researching them further I realized that there are actually a lot of different ways you can pivot careers. Even just following free tutorials on YouTube and trying to curate your own portfolio could be a good way to consider a switch. You're obviously a creative and talented thinker, so a career in programming might be a cool move for you!"
)

answer11 = Answer.create(
  author_id: user5.id,
  question_id: question7.id,
  body: "Wait is this the real T-Pain???"
)

answer12 = Answer.create(
  author_id: user7.id,
  question_id: question7.id,
  body: "Thanks for your response! And yeah dude, what's up."
)

answer13 = Answer.create(
  author_id: user4.id,
  question_id: question8.id,
  body: "Hey, art and code aren't necessarily as disperate of practices as one might think. The ways I've been able to combine my creative and technical interests have been through creative coding projects. There are some really cool tools like Processing that you can use to get an interactive art piece up and running super quickly. There are a lot of built in methods and make the process easier. Alternatively, languages like JavaScript also afford you a lot of good ways to create art and express creativity that you should look into. Check out an audio-visualizer I made using Javascript at https://adammoftah.com/sound-sight"
)

answer14 = Answer.create(
  author_id: user2.id,
  question_id: question8.id,
  body: "There are a lot of creative coders out there! Look up creative coding on google and you'll find so many ways people have been able to employ programming extremely artfully. Additionally, another thing to consider is that while you may be looking for creative outputs for your code, there are a lot of ways to incorporate creativity into your coding practices with unique and clever problem solving skills in your coding."
)

answer15 = Answer.create(
  author_id: user3.id,
  question_id: question8.id,
  body: "Check out YoutTube for the codingtrain and other channels that walkthrough cool projects that will tickle your creative funny bone!"
)

answer16 = Answer.create(
  author_id: user5.id,
  question_id: question9.id,
  body: "There are so many ways to make your sound look pretty. To process sound you can look at JavaScript as well as the Web Audio API. Those will allow you to interface with audio through a browser and produce arrays of audio data. To visualize you could look at tools like HTML Canvas or D3.js, both of which can be used to draw the data you receive from the Web Audio API."
)

answer17 = Answer.create(
  author_id: user2.id,
  question_id: question9.id,
  body: "Some tools I've used in the past are Processing, there are a lot of helpful tutorials on YouTube about how to get started visualizing sound. Alternatively, if you're interested in exploring the realm of visual coding, I'd recommend looking into Max MSP. It costs money but you can use it for free if you don't want to save files and are just looking to try things out. It offers a lot of really in depth ways to interface with properties of sound and then use video processing to visualize them."
)

answer18 = Answer.create(
  author_id: user8.id,
  question_id: question10.id,
  body: "Array of Sunshine? Hash Browns? Turn your fingers into a Linked List?"
)

answer19 = Answer.create(
  author_id: user4.id,
  question_id: question10.id,
  body: "Honestly, I'd just dress up as a cat if I were you"
)

#Votes

#question0, answer0, answer1
vote0 = Vote.create(user_id: user8.id, value: 1, votable_id: question0.id, votable_type: "Question")
vote1 = Vote.create(user_id: user7.id, value: 1, votable_id: question0.id, votable_type: "Question")
vote2 = Vote.create(user_id: user6.id, value: 1, votable_id: question0.id, votable_type: "Question")
vote3 = Vote.create(user_id: user5.id, value: 1, votable_id: question0.id, votable_type: "Question")
vote4 = Vote.create(user_id: user4.id, value: 1, votable_id: question0.id, votable_type: "Question")
vote5 = Vote.create(user_id: user8.id, value: 1, votable_id: answer0.id, votable_type: "Answer")
vote6 = Vote.create(user_id: user7.id, value: 1, votable_id: answer0.id, votable_type: "Answer")
vote7 = Vote.create(user_id: user6.id, value: 1, votable_id: answer0.id, votable_type: "Answer")
vote8 = Vote.create(user_id: user5.id, value: 1, votable_id: answer1.id, votable_type: "Answer")
vote9 = Vote.create(user_id: user4.id, value: 1, votable_id: answer1.id, votable_type: "Answer")

#question1, answer2
vote10 = Vote.create(user_id: user5.id, value: 1, votable_id: question1.id, votable_type: "Question")
vote11 = Vote.create(user_id: user4.id, value: 1, votable_id: question1.id, votable_type: "Question")
vote12 = Vote.create(user_id: user3.id, value: 1, votable_id: question1.id, votable_type: "Question")
vote13 = Vote.create(user_id: user0.id, value: 1, votable_id: answer2.id, votable_type: "Answer")
vote14 = Vote.create(user_id: user8.id, value: 1, votable_id: answer2.id, votable_type: "Answer")

#question2, answer3
vote15 = Vote.create(user_id: user0.id, value: 1, votable_id: question2.id, votable_type: "Question")
vote16 = Vote.create(user_id: user1.id, value: 1, votable_id: question2.id, votable_type: "Question")
vote17 = Vote.create(user_id: user2.id, value: 1, votable_id: question2.id, votable_type: "Question")
vote18 = Vote.create(user_id: user3.id, value: 1, votable_id: question2.id, votable_type: "Question")
vote19 = Vote.create(user_id: user4.id, value: 1, votable_id: question2.id, votable_type: "Question")
vote20 = Vote.create(user_id: user5.id, value: 1, votable_id: question2.id, votable_type: "Question")
vote21 = Vote.create(user_id: user6.id, value: 1, votable_id: question2.id, votable_type: "Question")
vote22 = Vote.create(user_id: user7.id, value: 1, votable_id: question2.id, votable_type: "Question")
vote23 = Vote.create(user_id: user8.id, value: 1, votable_id: question2.id, votable_type: "Question")
vote24 = Vote.create(user_id: user7.id, value: 1, votable_id: answer3.id, votable_type: "Answer")
vote25 = Vote.create(user_id: user6.id, value: 1, votable_id: answer3.id, votable_type: "Answer")
vote26 = Vote.create(user_id: user5.id, value: 1, votable_id: answer3.id, votable_type: "Answer")
vote27 = Vote.create(user_id: user4.id, value: 1, votable_id: answer3.id, votable_type: "Answer")
vote28 = Vote.create(user_id: user3.id, value: 1, votable_id: answer3.id, votable_type: "Answer")
vote29 = Vote.create(user_id: user2.id, value: 1, votable_id: answer3.id, votable_type: "Answer")

#question3, answer4, answer5
vote30 = Vote.create(user_id: user0.id, value: 1, votable_id: question3.id, votable_type: "Question")
vote31 = Vote.create(user_id: user1.id, value: 1, votable_id: answer4.id, votable_type: "Answer")
vote32 = Vote.create(user_id: user2.id, value: 1, votable_id: answer4.id, votable_type: "Answer")
vote33 = Vote.create(user_id: user4.id, value: 1, votable_id: answer4.id, votable_type: "Answer")
vote34 = Vote.create(user_id: user0.id, value: 1, votable_id: answer5.id, votable_type: "Answer")

#question4, answer6, answer7
vote35 = Vote.create(user_id: user0.id, value: 1, votable_id: question4.id, votable_type: "Question")
vote36 = Vote.create(user_id: user1.id, value: 1, votable_id: question4.id, votable_type: "Question")
vote37 = Vote.create(user_id: user2.id, value: 1, votable_id: question4.id, votable_type: "Question")
vote38 = Vote.create(user_id: user3.id, value: 1, votable_id: question4.id, votable_type: "Question")
vote39 = Vote.create(user_id: user1.id, value: 1, votable_id: answer6.id, votable_type: "Answer")
vote40 = Vote.create(user_id: user2.id, value: 1, votable_id: answer6.id, votable_type: "Answer")
vote41 = Vote.create(user_id: user4.id, value: 1, votable_id: answer7.id, votable_type: "Answer")
vote42 = Vote.create(user_id: user0.id, value: 1, votable_id: answer7.id, votable_type: "Answer")
vote43 = Vote.create(user_id: user1.id, value: 1, votable_id: answer7.id, votable_type: "Answer")
vote44 = Vote.create(user_id: user2.id, value: 1, votable_id: answer7.id, votable_type: "Answer")
vote45 = Vote.create(user_id: user3.id, value: 1, votable_id: answer7.id, votable_type: "Answer")
vote46 = Vote.create(user_id: user4.id, value: 1, votable_id: answer7.id, votable_type: "Answer")

#question5, answer8
vote47 = Vote.create(user_id: user1.id, value: 1, votable_id: question5.id, votable_type: "Question")
vote48 = Vote.create(user_id: user2.id, value: 1, votable_id: answer8.id, votable_type: "Answer")
vote49 = Vote.create(user_id: user3.id, value: 1, votable_id: answer8.id, votable_type: "Answer")
vote50 = Vote.create(user_id: user4.id, value: 1, votable_id: answer8.id, votable_type: "Answer")

#question6, answer9
vote51 = Vote.create(user_id: user1.id, value: 1, votable_id: question6.id, votable_type: "Question")
vote52 = Vote.create(user_id: user0.id, value: 1, votable_id: question6.id, votable_type: "Question")
vote53 = Vote.create(user_id: user3.id, value: 1, votable_id: question6.id, votable_type: "Question")
vote54 = Vote.create(user_id: user2.id, value: 1, votable_id: answer9.id, votable_type: "Answer")
vote55 = Vote.create(user_id: user3.id, value: 1, votable_id: answer9.id, votable_type: "Answer")
vote56 = Vote.create(user_id: user4.id, value: 1, votable_id: answer9.id, votable_type: "Answer")
vote57 = Vote.create(user_id: user4.id, value: 1, votable_id: answer9.id, votable_type: "Answer")

#question7, answer10, answer11, answer12
vote58 = Vote.create(user_id: user0.id, value: 1, votable_id: question7.id, votable_type: "Question")
vote59 = Vote.create(user_id: user1.id, value: 1, votable_id: question7.id, votable_type: "Question")
vote60 = Vote.create(user_id: user2.id, value: 1, votable_id: question7.id, votable_type: "Question")
vote61 = Vote.create(user_id: user3.id, value: 1, votable_id: question7.id, votable_type: "Question")
vote62 = Vote.create(user_id: user4.id, value: 1, votable_id: question7.id, votable_type: "Question")
vote63 = Vote.create(user_id: user5.id, value: 1, votable_id: question7.id, votable_type: "Question")
vote64 = Vote.create(user_id: user2.id, value: 1, votable_id: answer10.id, votable_type: "Answer")
vote65 = Vote.create(user_id: user3.id, value: 1, votable_id: answer10.id, votable_type: "Answer")
vote66 = Vote.create(user_id: user4.id, value: 1, votable_id: answer10.id, votable_type: "Answer")
vote67 = Vote.create(user_id: user2.id, value: 1, votable_id: answer11.id, votable_type: "Answer")
vote68 = Vote.create(user_id: user3.id, value: 1, votable_id: answer11.id, votable_type: "Answer")
vote69 = Vote.create(user_id: user4.id, value: 1, votable_id: answer11.id, votable_type: "Answer")
vote70 = Vote.create(user_id: user2.id, value: 1, votable_id: answer12.id, votable_type: "Answer")
vote71 = Vote.create(user_id: user3.id, value: 1, votable_id: answer12.id, votable_type: "Answer")
vote72 = Vote.create(user_id: user4.id, value: 1, votable_id: answer12.id, votable_type: "Answer")

#question8, answer13, answer14, answer15
vote73 = Vote.create(user_id: user0.id, value: 1, votable_id: question8.id, votable_type: "Question")
vote74 = Vote.create(user_id: user1.id, value: 1, votable_id: question8.id, votable_type: "Question")
vote75 = Vote.create(user_id: user2.id, value: 1, votable_id: question8.id, votable_type: "Question")
vote76 = Vote.create(user_id: user2.id, value: 1, votable_id: answer13.id, votable_type: "Answer")
vote77 = Vote.create(user_id: user3.id, value: 1, votable_id: answer13.id, votable_type: "Answer")
vote78 = Vote.create(user_id: user4.id, value: 1, votable_id: answer13.id, votable_type: "Answer")
vote79 = Vote.create(user_id: user4.id, value: 1, votable_id: answer14.id, votable_type: "Answer")
vote80 = Vote.create(user_id: user2.id, value: 1, votable_id: answer15.id, votable_type: "Answer")
vote81 = Vote.create(user_id: user3.id, value: 1, votable_id: answer15.id, votable_type: "Answer")

#question9, answer16, answer17
vote82 = Vote.create(user_id: user0.id, value: 1, votable_id: question9.id, votable_type: "Question")
vote83 = Vote.create(user_id: user2.id, value: 1, votable_id: answer16.id, votable_type: "Answer")
vote84 = Vote.create(user_id: user4.id, value: 1, votable_id: answer16.id, votable_type: "Answer")
vote85 = Vote.create(user_id: user4.id, value: 1, votable_id: answer17.id, votable_type: "Answer")

#question10, answer18, answer19
vote86 = Vote.create(user_id: user0.id, value: -1, votable_id: question10.id, votable_type: "Question")
vote87 = Vote.create(user_id: user7.id, value: -1, votable_id: question10.id, votable_type: "Question")
vote88 = Vote.create(user_id: user2.id, value: 1, votable_id: answer18.id, votable_type: "Answer")
vote89 = Vote.create(user_id: user4.id, value: -1, votable_id: answer19.id, votable_type: "Answer")
vote90 = Vote.create(user_id: user5.id, value: -1, votable_id: answer19.id, votable_type: "Answer")