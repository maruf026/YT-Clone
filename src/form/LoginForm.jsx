import { useForm } from "react-hook-form";

function LoginForm() {
  const { register, handleSubmit, formState: {errors},setError } = useForm();
  function onSubmit(formData) {
    let user= "x@gmail.com";
    let pass= 12345678
    let found = formData.email== user && formData.password== pass;
    if(!found){
       setError("root", {
        type: "manual",
        message: "wrong info"
       })
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
      <label htmlFor="email">Email</label>
      <input
        {...register("email", {required: true})}
        className="border border-black"
        type="email"
        name="email"
        id="email"
      />
      <br />
      {errors.email && <span className="text-red-600">This field is required</span>}
      <br /><br />
      <label htmlFor="password">Password</label>
      <input
        {...register("password", {minLength:{
            value: 8,
            message: "Password must be 8 characters"
        }})}
        className="border border-black"
        type="password"
        name="password"
        id="password"
      />
      {errors.password && <span className="text-red-600">{errors.password.message}</span>}
      <br />
      <br />
      <input
        className="bg-purple-800 text-white p-2 rounded-sm"
        type="submit"
        value="Submit"
      />
      {
        errors.root && <span className="text-red-600">{errors.root.message}</span>
      }
    </form>
  );
}

export default LoginForm;
