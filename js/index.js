const handlerGetData = async()=>{
     const response = await fetch(" https://openapi.programming-hero.com/api/ai/tools");
     const data = await response.json();
     const AIName = data.data.tools
    //  
    handleAI(AIName)
}

 const handleAI =(items) =>{
    //   get the places where data appendChild
    const cardContainer =document.getElementById("card-container")
      items.forEach(item =>{
        //  console.log(item)
          const cardDiv = document.createElement("div");
          cardDiv.classList = "card bg-gray-200 shadow-xl";
         
          cardDiv.innerHTML = `
          <figure><img src="${item.image}" alt="Shoes" /></figure>
          <div class="card-body">
            <h2 class="text-[25px] font-semibold">Features</h2>
             
             <div>
               <h1>1. Natural language processing<h1/>
               <h1>2. Contextual understanding<h1/>
               <h1>3. Text generation<h1/>
             <div/>
             
             <div class="border-b-2 border-gray-900 my-5">

             </div> 


             <div class="flex justify-between">
                    
             <div>
             <h2 class="text-[25px] font-semibold">${item. name}</h2>
             <p>${item.published_in}</p>
             </div>
                 
                <div flex justify-center items-center>
                <button onclick ="handlesButton()" id="handlesBtn"><i class="fa-solid fa-arrow-right p-4 bg-[#FEF7F7] rounded-full" style="color: #EB5757;"></i></button>
                </div>

               </div>
            
          </div>
          `;
          cardContainer.appendChild(cardDiv)
      })
    // console.log(items)
 };


//  handlesButton()
  const handlesButton =() =>{
    // console.log("hello")
    const handlesBtn =document.getElementById("handlesBtn");
    handlesBtn.innerHTML =`
  
<dialog id="my_modal_3" class="modal">
  <div class="modal-box">
    <form method="dialog">
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click on ✕ button to close</p>
  </div>
</dialog>
    `;
    my_modal_3.showModal()

  }

  
handlerGetData()