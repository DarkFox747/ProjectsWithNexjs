"use client"; 


import React, { useState } from "react";
import Header from '../components/Header';
import '../app/globals.css';


export default function Home() {
  
  const [ingredients, setIngredients] = useState<string[]>(["Chicken", "Oregano", "Tomatoes"]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient") as string;

    if (newIngredient && !ingredients.includes(newIngredient)) {
      setIngredients([...ingredients, newIngredient]);
      event.currentTarget.reset(); 
    }
  }

  return (
    <>  
      <Header />


      <main className="flex flex-col items-center justify-center h-screen ">
        <form onSubmit={handleSubmit} className="add-ingredient-form flex flex-col gap-4 items-center w-full max-w-md">
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
        <h2 className="text-2xl font-semibold mt-8">Ingredients</h2>
        <ul className="w-full max-w-md mt-4">
          {ingredients.map((ingredient) => (
            <li key={ingredient} className="p-2 border-b border-gray-300">{ingredient}</li>
          ))}
        </ul>
      </main>    
    </>
  );
}
