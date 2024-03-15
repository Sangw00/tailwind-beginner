

import Input from "./Input";
import Button from "./Button";
export default function login (){




    return(
     <form className="max-w-sm mx-auto pb-20 " action="#"> 
     <div class="mt-10 pt-10 text-2xl mx-auto pb-20 w-full max-w-md bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">Log in
 <Input type="text" name="email" label="Your email "  placeholder="ex: someone@domaine"/>
    <Input type="password" name="password" label="Your password "  placeholder="**************"/>
    <Input type="password" name="confirm_password" label="Confirm password "  placeholder="**************"/>
    <Button name="log in" />
    <div class="flex items-center justify-between pb-6">
                    <p class="mb-0 text-sm">Don't have an account?</p>
    <Button name="Register" />
                  </div>
                    

    </div>
    </form>
   )
}