const colorList = [
  { name: "Red", class: "bg-red-500" },
  { name: "Orange", class: "bg-orange-500" },
  { name: "Yellow", class: "bg-yellow-500" },
  { name: "Lime", class: "bg-lime-500" },
  { name: "Green", class: "bg-green-500" },
  { name: "Cyan", class: "bg-cyan-500" },
  { name: "Blue", class: "bg-blue-500" },
  { name: "Purple", class: "bg-purple-500" },
  { name: "Violet", class: "bg-violet-500" },
  { name: "Pink", class: "bg-pink-500" },
  { name: "White", class: "bg-white" },
  { name: "Black", class: "bg-black" },
];

const randomColor = colorList[Math.floor(Math.random() * 12)].class;

export { colorList, randomColor };
