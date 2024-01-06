const imgThumbOne = "/assets/img/team/team-thumb-01.jpg"
const imgThumbTwo = "/assets/img/team/team-thumb-02.jpg"
const imgThumbThree = "/assets/img/team/team-thumb-03.jpg"
const imgThumbFour = "/assets/img/team/team-thumb-04.jpg"
const imgThumbFive = "/assets/img/team/team-thumb-05.jpg"
const imgThumbsix = "/assets/img/team/team-thumb-06.jpg"
const imgThumbSeven = "/assets/img/team/team-thumb-07.jpg"
const imgThumbeight = "/assets/img/team/team-thumb-08.jpg"
const imgThumbNine = "/assets/img/team/team-thumb-09.jpg"

interface TeamMember {
    _id:string
    title: string;
    img: string;
}
interface TeamMember2 {
    _id:string
    name1: string;
    name2?: string;
}

export const teamData:TeamMember[] = [
    {
        _id: "team-id-1",
        title: "Mr. Umashankar Narayanaswamy",
        img: imgThumbOne,
    },
    {
        _id: "team-id-2",
        title: "Mr. Jaganathan S",
        img: imgThumbTwo,
    },
    {
        _id: "team-id-3",
        title: "Ms. Deepa Umashankar",
        img: imgThumbThree,
    },
    {
        _id: "team-id-4",
        title: "Mr. Ramalingam B",
        img: imgThumbFour,
    },
    {
        _id: "team-id-5",
        title: "Mr. Girish",
        img: imgThumbFive,
    },
    {
        _id: "team-id-6",
        title: "Mr. Uruvatti Muthu",
        img: imgThumbsix,
    },
    {
        _id: "team-id-7",
        title: "Mr. Mahendran A",
        img: imgThumbSeven,
    },
    {
        _id: "team-id-8",
        title: "Mr. Manoj Kumar Menon",
        img: imgThumbeight,
    },
    {
        _id: "team-id-9",
        title: "Ms. Mahadevi",
        img: imgThumbNine,
    },
]

export const teamData2:TeamMember2[] = [
    {
        _id: "team-id-1",
        name1: "Mr. Umashankar Narayanaswamy",
        name2: "Mr. Jaganathan S",
    },
    {
        _id: "team-id-3",
        name1: "Ms. Deepa Umashankar",
        name2: "Mr. Ramalingam B",
    },
    {
        _id: "team-id-5",
        name1: "Mr. Girish",
        name2: "Mr. Uruvatti Muthu",
    },
    {
        _id: "team-id-7",
        name1: "Mr. Mahendran A",
        name2: "Mr. Manoj Kumar Menon",
    },
    {
        _id: "team-id-9",
        name1: "Ms. Mahadevi",
    },
]