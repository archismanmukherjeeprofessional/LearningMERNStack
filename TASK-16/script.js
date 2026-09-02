const students = [
  {
    name: "Aarav Sharma",
    marks: "87%",
    class: "5th",
    address: "MG Road, Jaipur, Rajasthan",
  },
  {
    name: "Ananya Mukherjee",
    marks: "92%",
    class: "8th",
    address: "Salt Lake, Kolkata, West Bengal",
  },
  {
    name: "Rohan Kinnal",
    marks: "50%",
    class: "10th",
    address: "ABC Main Road, Ahmedabad, Gujarat",
  },
  {
    name: "Priya Nair",
    marks: "78%",
    class: "9th",
    address: "Marine Drive, Kochi, Kerala",
  },
  {
    name: "Aditya Verma",
    marks: "65%",
    class: "9th",
    address: "Hazratganj, Lucknow, Uttar Pradesh",
  },
  {
    name: "Ishita Das",
    marks: "89%",
    class: "12th",
    address: "Beltala Road, Guwahati, Assam",
  },
  {
    name: "Arjun Patel",
    marks: "73%",
    class: "10th",
    address: "Navrangpura, Ahmedabad, Gujarat",
  },
  {
    name: "Sneha Iyer",
    marks: "95%",
    class: "4th",
    address: "Indiranagar, Bengaluru, Karnataka",
  },
  {
    name: "Kabir Singh",
    marks: "61%",
    class: "8th",
    address: "Sector 17, Chandigarh",
  },
  {
    name: "Meera Joshi",
    marks: "84%",
    class: "3rd",
    address: "Kothrud, Pune, Maharashtra",
  },
  {
    name: "Vikram Reddy",
    marks: "76%",
    class: "4th",
    address: "Banjara Hills, Hyderabad, Telangana",
  },
  {
    name: "Diya Chatterjee",
    marks: "91%",
    class: "10th",
    address: "Park Street, Kolkata, West Bengal",
  },
  {
    name: "Rahul Yadav",
    marks: "58%",
    class: "7th",
    address: "Civil Lines, Prayagraj, Uttar Pradesh",
  },
  {
    name: "Kavya Menon",
    marks: "88%",
    class: "6th",
    address: "Vyttila, Kochi, Kerala",
  },
  {
    name: "Siddharth Rao",
    marks: "69%",
    class: "11th",
    address: "Vijayanagar, Bengaluru, Karnataka",
  },
];
window.addEventListener('scroll',()=>{
  const scroll = window.scrollY;
  if(scroll<20){
    document.getElementById('head').style.boxShadow = "none"
  }
  else{
        document.getElementById('head').style.boxShadow = "0px 0px 20px 0px black"
  }
})

const main = document.querySelector("main");
const searchBar = document.getElementById("search-bar");

function search() {
  main.innerHTML="";
  students
    .filter((e) => {
      return e.name.toLowerCase().startsWith(searchBar.value.toLowerCase());
    }).sort((a,b)=>{
      return a.name.localeCompare(b.name)
    }).map((e) => {
    main.innerHTML += `
    <div class="card">
            <ul>
                <li>Student Name: <b>${e.name}</b></li>
                <li>Marks: <b>${e.marks}</b></li>
                <li>Class: <b>${e.class}</b></li>
                <li>Address: <b>${e.address}</b></li>
            </ul>
        </div>
    `
  });
}
search()