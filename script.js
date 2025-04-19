 // Menu toggle
 const menuToggle = document.querySelector(".menu-toggle");
 const navList = document.querySelector(".nav-list");
 menuToggle.addEventListener("click", () => {
   navList.classList.toggle("active");
   menuToggle.textContent = navList.classList.contains("active") ? "✕" : "☰";
 });

 // Dynamic iPad devices
 const ipads = [
  {
    img: "./assets/ipadpro.png",
    alt: "iPad Pro",
    title: "iPad Pro",
    colors: ["rgb(0, 0, 0)", "rgb(170, 170, 170)"],
    description: "ที่สุดแห่งประสบการณ์ iPad พร้อมเทคโนโลยีที่ล้ำหน้าที่สุดของเรา",
    price: "฿37,900",
  },
  {
    img: "./assets/ipadair.png",
    alt: "iPad Air",
    title: "iPad Air",
    colors: [
      "rgb(0, 0, 0)",
      "rgb(170, 170, 170)",
      "rgb(221, 221, 221)",
      "rgb(255, 252, 173)",
    ],
    description: "ประสิทธิภาพหนักหน่วง<br/>ในดีไซน์บางเบา",
    price: "฿21,900",
  },
  {
    img: "./assets/ipad.png",
    alt: "iPad",
    title: "iPad",
    colors: [
      "rgb(77, 181, 255)",
      "rgb(255, 43, 43)",
      "rgb(230, 251, 70)",
      "rgb(113, 113, 113)",
    ],
    description: "iPad สุดสดใสแบบหน้าจอทั้งหมดสำหรับสิ่งต่างๆ ที่คุณทำทุกวัน",
    price: "฿12,900",
  },
  {
    img: "./assets/ipad-mini.png",
    alt: "iPad Mini",
    title: "iPad mini",
    colors: [
      "rgb(77, 181, 255)",
      "rgb(255, 43, 43)",
      "rgb(230, 251, 70)",
      "rgb(113, 113, 113)",
    ],
    description: "ประสบการณ์ iPad แบบเต็มๆในดีไซน์ที่พกพาสะดวกสุดๆ",
    price: "฿17,900",
  },
];

const ipadGroup = document.getElementById("ipad-group");
ipads.forEach((ipad) => {
  const div = document.createElement("div");
  div.className = "ipad-device";
  div.innerHTML = `
    <img src="${ipad.img}" alt="${ipad.alt}" />
    <div class="group-color">
      ${ipad.colors
        .map(
          (color) =>
            `<div class="color-1" style="background-color: ${color}"></div>`
        )
        .join("")}
    </div>
    <h3>${ipad.title}</h3>
    <p>${ipad.description}</p>
    <p>เริ่มต้นที่ ${ipad.price}</p>
    <div class="group-detail">
    <a href="#" class="buy-btn">ดูเพิ่มเติม</a>
      <button class="view-more">ซื้อ ></button>
      
    </div>
  `;
  ipadGroup.appendChild(div);
});
 // Dynamic property list
 const properties = [
   {
     screen: {
       title: "จอภาพ Ultra Retina XDR",
       size: '13" หรือ 11"',
       tech: "เทคโนโลยี ProMotion",
       option: "ตัวเลือกกระจกจอภาพ Nano-texture",
       note: "สำหรับรุ่น 1TB และ 2TB",
     },
     items: [
       { img: "./assets/m4.svg", alt: "M4 Chip", text: "ชิป M4" },
       {
         img: "./assets/camera.svg",
         alt: "Camera",
         text: ["กล้องไวด์ 12MP", "วิดีโอระดับ 4K, ProRes"],
       },
       {
         img: "./assets/landscape.svg",
         alt: "Landscape Camera",
         text: "กล้อง 12MP Center Stage ในแนวนอน",
       },
       {
         img: "./assets/ai.svg",
         alt: "Apple Intelligence",
         text: "สร้างมาเพื่อ Apple Intelligence",
       },
       {
         img: "./assets/pencil.svg",
         alt: "Apple Pencil",
         text: ["รองรับ Apple Pencil Pro", "รองรับ Apple Pencil (USB‑C)"],
       },
       {
         img: "./assets/magickeyboard.svg",
         alt: "Magic Keyboard",
         text: "รองรับ Magic Keyboard สำหรับ iPad Pro",
       },
     ],
   },
 ];

 const propertyList = document.getElementById("property-list");
 for (let i = 0; i < 4; i++) {
   const prop = properties[0];
   const div = document.createElement("div");
   div.className = "group-property";
   div.innerHTML = `
     <div>
       <p>${prop.screen.title}</p>
       <h1>${prop.screen.size}</h1>
       <p>${prop.screen.tech}</p>
       <p>${prop.screen.option}</p>
       <p>${prop.screen.note}</p>
     </div>
     ${prop.items
       .map(
         (item) => `
         <div class="group-item-property">
           <img src="${item.img}" alt="${item.alt}" />
           ${
             Array.isArray(item.text)
               ? item.text.map((t) => `<p>${t}</p>`).join("")
               : `<p>${item.text}</p>`
           }
         </div>
       `
       )
       .join("")}
   `;
   propertyList.appendChild(div);
 };