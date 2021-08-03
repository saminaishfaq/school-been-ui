import React from 'react'
import Sidebar from '../testing/SideBar';

import CustomInput from './Component/CustomInput';
import CustomProfileDropdown from './Component/CustomProfileDropdown';





function TopBar() {
    return (
      
      <div className="antialiased relative min-h-screen lg:flex" >
          <Sidebar />
            <div className="relative z-0 lg:flex-grow">     
              <header className="bg-white-100 shadow-xl h-16   ">

                   
                  <span className="block text-2xl sm:text-2xl p-3">
                  
                    <a className="ml-0 text-black  flex items-start justify-start  hover:text-black px-3 py-2 rounded-md text-sm font-medium"> 
                          <span className="text-sm "><b className="text-2xl border-l-2">WelCome To</b> School Name</span>
                          
                          <select class="w-40 border mx-8 bg-white rounded px-3 py-2 outline-none text-yellow-500">
                            <option class="py-1 ">ADMINISTRATION</option>
                            <option class="py-1">Students</option>
                            <option class="py-1">Teachers</option>
                            <option class="py-1">Parents</option>
                         </select> 
                            
                              
                         <CustomInput />
                         <div>
                                
                                <img src="icon.png" className=" h-10 w-10  rounded-full border-2" alt=""/>
               
                             </div>
               
                       <div>
               
                        <img src="bell icon.png" className=" h-10 w-10  rounded-full border-2" alt=""/>
                       </div>
                         <div>
                              <img src="icon email.png" className=" h-10 w-10 rounded-full border-2" alt=""/>
                         </div>
                              

                               



                            <CustomProfileDropdown />
                            
                                
                                 
                                 
                                 
                              
     


                               
      

      
                                 
                    </a>
                    
                       
                   

            
        
        
                  </span>
        
            

                
              

                </header>
            </div> 
      
      </div>
      

                
    )
  }

export default TopBar
