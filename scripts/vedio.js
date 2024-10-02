//create loadCategories
const loadCategories = () =>{
   fetch("https://openapi.programming-hero.com/api/phero-tube/categories") 
   .then(res => res.json())
   .then(data => DisplayCategories(data.categories))
   .catch(error => console.log(error))
};

//create displayCategories
const DisplayCategories = (data) =>{
   console.log(data) 
};

loadCategories();