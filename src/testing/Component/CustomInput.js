import React from 'react';



 
 export default function CustomInput() {
   return (
     <div>
       <div class="px-8 relative  mx-auto text-gray-600">
                                    <input class="border-2 border-gray-300 bg-white w-15 h-10 px-4 pr-16 rounded-lg text-sm focus:outline-none "
                                    type="search" name="search" 
                                    placeholder="Search" 
                                    />
                                    <button type="submit" 
                                    class="absolute right-0 top-0 mt-5 mr-4">
                                    <svg class="text-gray-600 h-4 w-12 fill-current"
                                     xmlns="http://www.w3.org/2000/svg"
                                       version="1.1" 
                                       id="Capa_1" x="0px" y="0px"
                                       viewBox="0 0 56.966 56.966" 
                                       width="512px"
                                        height="512px">
            
                                      </svg>
                                   </button>
                              </div>
       
     </div>
   )
 }
 
 
 



