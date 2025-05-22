const tick = new Audio('selected.wav');
const won = new Audio('won.wav');
gifts = [
  "1. Mug", "2. Smartwatch", "3. Wallet", "4. Candles", "5. Speaker",
  "6. T-Shirt", "7. CoffeeMaker", "8. Letter", "9. Plants", "10. Earbuds",
  "11. Chocolates", "12. Jewelry", "13. Tracker", "14. ArtKit", "15. Backpack",
  "16. Keychain", "17. Subscription", "18. Blanket", "19. CookingSet", "20. PhotoFrame",
  "21. Games", "22. Perfume", "23. CraftKit", "24. Headphones", "25. Pen",
  "26. Notebook", "27. Projector", "28. PhoneCase", "29. Soap", "30. Charger",
  "31. Puzzle", "32. Journal", "33. TeaSet", "34. SmartDevice", "35. Calendar",
  "36. Skincare", "37. Chess", "38. Grinder", "39. Pottery", "40. ToteBag",
  "41. Diffuser", "42. CandleKit", "43. Watch", "44. RecipeBook", "45. FountainPen",
  "46. Diary", "47. Drone", "48. Socks", "49. Vinyl", "50. Dreamcatcher"
];

//to creat the layout of elements
const container = document.getElementsByClassName("container")[0];//-[0]—first item in the collection.
gifts.forEach(function(value,i) { 
  const boxElement = `<div class="items" id="box${i+1}">${value}</div>`;
  container.insertAdjacentHTML("beforeend",boxElement);
});
function getRandomNumber() {
  return Math.floor(Math.random()*50);
}
const btn = document.getElementById("btn");
btn.addEventListener("click",function(){
  const dis = document.getElementById("discription");
  const str = "please wait ...."
  dis.innerHTML = str;
    for(let i=1;i<=50;i++){
      let btn = document.getElementById(`box${i}`);
      btn.classList.remove("itemWined");
    }
    let count = 0;
    let intervel=setInterval(function(){
      tick.pause();
      tick.currentTime=0;
      tick.play();
      for(let i=1;i<=50;i++){
      let btn = document.getElementById(`box${i}`);
      btn.classList.remove("itemselect");
    }
      let btn = document.getElementById(`box${getRandomNumber()}`);
      btn.classList.add("itemselect");
      count= count +1;
    },1000);
    setTimeout(() => {
      for(let i=1;i<=50;i++){
      let btn = document.getElementById(`box${i}`);
      btn.classList.remove("itemselect");
    }
      clearInterval(intervel);
      tick.pause();
      won.pause();
      won.currentTime=0;
      won.play();
      let btn = document.getElementById(`box${getRandomNumber()}`);
      btn.classList.add("itemWined");
      if (dis.innerHTML == str) {
        dis.innerHTML = `<div id="discription">Congratulations! You have triumphantly secured this coveted item: ${btn.textContent}</div>`;
      }
    }, 5000);
    
});
