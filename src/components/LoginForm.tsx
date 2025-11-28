import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import * as Label from "@radix-ui/react-label";
import { Button } from "./Button";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export type LoginFormProps = {
  onSubmit?: (data: LoginFormValues) => void;
};

export const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onFormSubmit = handleSubmit((data) => {
    onSubmit?.(data);
  });

  return (
    <form onSubmit={onFormSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label.Root htmlFor="email" className="block text-sm font-medium">
          Email
        </Label.Root>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-brand-main focus:outline-none focus:ring-2 focus:ring-brand-main"
        />
        {errors.email && (
          <p className="text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label.Root htmlFor="password" className="block text-sm font-medium">
          Password
        </Label.Root>
        <input
          id="password"
          type="password"
          {...register("password")}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-brand-main focus:outline-none focus:ring-2 focus:ring-brand-main"
        />
        {errors.password && (
          <p className="text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>

      <Button type="submit" variant="primary">
        Login
      </Button>
    </form>
  );
};
