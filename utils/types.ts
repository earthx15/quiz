import * as z from "zod";


const userSchema = z.object({
  id: z.string(),
  firstName: z.string().min(1, { message: "Missing firstname" }),
  lastName: z.string().min(1, { message: "Missing lastname" }),
  email: z.string().email({ message: "Invalid email" }),
  amount: z.string().refine((s) => parseInt(s) < 1000, {
    message: "Wrong plese put more 1000",
  }),
  time: z.string()
});

// Array of users
export const usersSchema = z.array(userSchema);

// Type
export type Donation = z.infer<typeof userSchema>;

// Form validation
export const formSchema = userSchema
  .omit({ id: true })
  .extend({
    password: z.string().min(4, { message: "Password too short" }),
    confirmPassword: z.string().min(1, { message: "Confirm password" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type Form = z.infer<typeof formSchema>;