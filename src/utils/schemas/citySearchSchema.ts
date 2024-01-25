import z from "zod";

export const citySearchSchema = z.object({
  city_name: z.string().min(1, { message: "City name is required" }),
});
