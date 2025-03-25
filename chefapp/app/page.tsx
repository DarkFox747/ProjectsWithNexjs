"use client"; 


import React, { useState } from "react";
import Header from '../components/Header';
import '../app/globals.css';


export default function Home() {
  
  const [ingredients, setIngredients] = useState<string[]>([]);

  function handleSubmit(formData: FormData) {    
   
    const newIngredient = formData.get("ingredient") as string ;

    if (newIngredient && !ingredients.includes(newIngredient)) {
      setIngredients([...ingredients, newIngredient]);
      
    }
  }

  return (
    <>  
      <Header />


      <main className="flex flex-col items-center justify-start min-h-screen pt-8">
        <form action={handleSubmit} className="add-ingredient-form flex flex-col gap-4 items-center w-full max-w-md">
          <input 
            type="text"
            placeholder="e.g. oregano"
            aria-label="Add ingredient"
            name ="ingredient"
            className="rounded-md border border-gray-300 p-2.5 shadow-sm w-full"
          />
          <button  type="submit" className="font-sans rounded-md border-none bg-[#141413] text-[#FAFAF8] w-full text-sm font-medium p-2.5">
            Add ingredient
          </button>
        </form>
  {ingredients.length>0 &&<section>
          <h2 className="text-2xl font-semibold mt-8">Ingredients on hand:</h2>
          <ul className="w-full max-w-md mt-4">
            {ingredients.map((ingredient) => (
              <li key={ingredient} className="p-2 border-b border-gray-300">{ingredient}</li>
            ))}
          </ul>
                  {ingredients.length>=3 &&<div className="get-recipe-container">
                      <div>
                          <h3>Ready for a recipe?</h3>
                          <p>Generate a recipe from your list of ingredients.</p>
                      </div>
                      <button>Get a recipe</button>
                  </div>}
              </section>}

        </main>    
    </>
  );
}
