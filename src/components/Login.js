

import Input from "./Input";
export default function login (){




    return(
    <form className="max-w-sm mx-auto pb-20 grad" action="#"> 
         <div class="mb-5 pt-10 glass">Singin
    <Input type="text" name="email" label="Your email "  placeholder="ex: someone@domaine"/>
    <Input type="password" name="password" label="Your password "  placeholder="**************"/>
    </div>
    </form>
   )
}