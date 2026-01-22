
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const loginSchema = z.object({
  email: z
    .string()
    .nonempty("O campo e-mail é obrigatório")
    .email("Formato de e-mail inválido"),
  password: z
    .string()
    .nonempty("O campo senha é obrigatório")
    .min(6, "A senha deve ter no mínimo 6 caracteres"),
});

/* tive muita dificuldade pra entender isso de fato */
type LoginFormInputs = z.infer<typeof loginSchema>;

export function useLoginForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function handleLogin(data: LoginFormInputs) {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    navigate("/home");
  }

  return {
    register,
    handleSubmit: handleSubmit(handleLogin),
    errors,
    isSubmitting,
  };
}