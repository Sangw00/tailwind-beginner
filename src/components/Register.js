import Input from "./Input";
import Button from "./Button";

export default function Register(){


    return ( 
    <form className="max-w-sm mx-auto pb-20 " action="#"> 
    <div class="mt-10 pt-10 text-2xl mx-auto pb-20 w-full max-w-md bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">Register
<Input type="text" name="name" label="Your name "  placeholder="ex:  john doe"/>
<Input type="text" name="email" label="Your email "  placeholder="ex: someone@domaine"/>
<Input type="password" name="password" label="Your password "  placeholder="**************"/>
<Button name="Register"/>

</div>
</form>
)

}