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
        <form
          action={handleSubmit}
          className="add-ingredient-form flex flex-col gap-4 items-center w-full max-w-md"
        >
          <input
            type="text"
            placeholder="e.g. oregano"
            aria-label="Add ingredient"
            name="ingredient"
            className="rounded-md border border-gray-300 p-2.5 shadow-sm w-full"
          />
          <button
            type="submit"
            className="font-sans rounded-md border-none bg-[#141413] text-[#FAFAF8] w-full text-sm font-medium p-2.5"
          >
            Add ingredient
          </button>
        </form>

        {ingredients.length > 0 && (
          <section className="w-full max-w-md mt-8 text-left">
            <h2 className="text-2xl font-semibold">Ingredients on hand:</h2>
            <ul className="w-full mt-4">
              {ingredients.map((ingredient) => (
                <li
                  key={ingredient}
                  className="p-2 border-b border-gray-300"
                >
                  {ingredient}
                </li>
              ))}
            </ul>
            {ingredients.length >= 3 && (
              <div className="get-recipe-container mt-6 p-4 border rounded-md bg-gray-100">
                <div>
                  <h3 className="text-lg font-bold">Ready for a recipe?</h3>
                  <p className="text-sm text-gray-600">
                    Generate a recipe from your list of ingredients.
                  </p>
                </div>
                <button className="mt-4 px-4 py-2 bg-[#D17557] text-white rounded-md">
                  Get a recipe
                </button>
              </div>
            )}
          </section>
        )}
      </main>    
    </>
  );
}
