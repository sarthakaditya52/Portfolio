import alShita from '../../../assets/images/alShita.png'
// import rootAndLeaves from '../../../assets/images/rootAndLeaves.png'

export const featuredProjects = [
    {
        titile: "Al-Shita",
        desc: "A web application for managing restaurants and an android application for monitoring restaurants and "+
        "transfer data from incoming phone calls (phone number and contact name) from android to web application in real time.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Kotlin"],
        gitlink: "https://github.com/sarthakaditya52/Al-Shita",
        livelink: "https://al-shita.herokuapp.com",
        image: alShita
    }
]

export const projects = [
    {
        titile: "Root and Leaves",
        desc: "A simple web application built using React.js and Next.js",
        tech: ["Next.js", "React.js", "CSS"],
        gitlink: "https://github.com/sarthakaditya52/RootAndLeaves",
        livelink: "https://rootandleaves.sarthakaditya52.now.sh/",
        icon: "fab fa-react"
        // image: rootAndLeaves
    },
    {
        titile: "AuthRec",
        desc: "A Django web application for recognizing and authenticating using voice of the user.",
        tech: ["Python", "Django", "Sklearn"],
        gitlink: "https://github.com/sarthakaditya52/AuthRec",
        icon: "fab fa-python"
    },
    {
        titile: "UnSplash",
        desc: "A Flutter application for displaying images with innite scroll using Unsplash api.",
        tech: ["Flutter", "Unsplash Api"],
        gitlink: "https://github.com/sarthakaditya52/UnSplash",
        icon:"fas fa-mobile"
    },
    {
        titile: "Jawaab Do: Quiz App",
        desc: "An android app and a web app using node.js for creating courses and add" + 
        "quizzes in the courses. Other users can enroll in the courses and attempt quizzes.",
        tech: ["Android", "Node.js", "Firebase", "Java"],
        gitlink: "https://github.com/SarthakAditya/JawabDo_Android",
        livelink: "https://github.com/SarthakAditya/JawabDo",
        icon: "fab fa-android"
    },
    {
        titile: "Smart Parking",
        desc: "Smart Parking system using Arduino and ultrasonic sensor module to determine" + 
        "available spaces and an Android app for booking available spaces.",
        tech: ["Arduino", "Android", "Firebase", "Java"],
        gitlink: "https://github.com/SarthakAditya/Parking-System"
    },
    {
        titile: "Chain Reaction Multiplayer Game",
        desc: "A javaFX application implementing a multiplayer board game: Chain Reaction",
        tech: ["JavaFx"],
        icon: "fab fa-java"
    },
    {
        titile: "Quadcopter",
        desc: "A remote controlled quadcopter built using arduino UNO",
        tech: ["Arduino"]
    }
]
