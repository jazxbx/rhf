import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

function YoutubeForm() {
  const form = useForm();
  const { register, control } = form;
  //const { name, ref, onChange, onBlur } = register("username");

  return (
    <div>
      <form className="form-container">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" {...register("username")}></input>

        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")}></input>

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register("channel")}></input>

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
}

export default YoutubeForm;
