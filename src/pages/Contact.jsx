// Add Proper Form in Contact Page

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Helmet } from "react-helmet-async";
import emailjs from "@emailjs/browser";
import { Loader2 } from "lucide-react";

import { motion } from "framer-motion"

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { set, useForm, useFormState } from "react-hook-form";
import { z } from "zod";

import { AlertModal } from "@/components";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const PhoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$|^0\d{10}$|^[1-9]\d{9}$/;

const FormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .min(3, "Name is too short")
    .max(50, "Name is too long"),
  email: z.string().email("Invalid email").min(1, "Email is required"),
  phone: z.string().trim().regex(PhoneRegex, "Invalid phone number"),
  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .min(10, "Message is too short")
    .max(500, "Message is too long"),
  tnc: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: "Please agree to the terms and conditions",
    }),
});

import { cn } from "@/lib/utils";

export default function Contact() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      phone: "",
      tnc: false,
    },
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState({
    title: "Response Submitted",
    description: `Dear ${form.watch(
      "name"
    )}, your response has been submitted successfully. We will get back to you soon.`,
  });

  const { isSubmitting: pending } = useFormState({ control: form.control });

  const onSubmit = async (data) => {
    try {
      // const responseEmail = ResponseEmailTemplate({
      //   name: data.name,
      //   email: data.email,
      //   phone: data.phone,
      //   message: data.message,
      // });

      // await emailjs.sendForm(
      //   import.meta.env.VITE_EMAILJS_SERVICE_ID,
      //   import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      //   {
      //     name: data.name,
      //     email: data.email,
      //     phone: data.phone,
      //     message: data.message,
      //   },
      //   { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      // );

      setModalMessage({
        title: "Response Submitted",
        description: `Dear ${data.name}, your response has been submitted successfully. We will get back to you soon.`,
      });
      setIsModalOpen(true);
      // form.reset();
      await new Promise(() => setTimeout(() => form.clearErrors(), 0));
    } catch (error) {
      if (import.meta.env.MODE === "development") {
        console.error(error);
      }
      setModalMessage({
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
      setIsModalOpen(true);
    }
  };

  const embededLink =
    import.meta.env.VITE_APP_MAP_EMBED_LINK ||
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83203.15320693795!2d77.09447691618303!3d28.627498366828036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ca864c98aa3%3A0x8d8e94d55f32e4ed!2sCrescent%20Exports%20Private%20Limited!5e0!3m2!1sen!2sin!4v1727654322766!5m2!1sen!2sin";

  return (
    <motion.div
    initial={{  scale: 0.9, opacity: 0 }}
    animate={{scale: 1, opacity: 1}}
    transition={{ duration: 1 }}
    >
      <Helmet prioritizeSeoTags>
        <title className="contactustitle">Contact Us</title>
        <meta
          name="description"
          content="Contact us for any queries or feedback. We are here to help you."
        />
      </Helmet>
      <AlertModal
        isOpen={isModalOpen}
        title={modalMessage.title}
        description={modalMessage.description}
        onClose={() => setIsModalOpen(false)}
      />
      <div className="flex items-center justify-center my-2 flex-col">
        <h1 className="text-4xl font-bold mt-4">Contact Us</h1>
        <div className="w-full lg:grid lg:grid-cols-2 mt-4 md:mt-8">
          <div className="hidden lg:flex justify-center items-center">
            <iframe
              src={embededLink}
              style={{ border: 0 }}
              className="w-10/12 aspect-[5/4] rounded-2xl"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="flex items-center justify-center py-2">
            <div className="mx-auto grid w-[450px] gap-6">
              <div className="grid gap-2 text-center"></div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className={cn("flex flex-col gap-4 mx-auto w-11/12")}
                  method="post"
                  noValidate
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={() => (
                      <FormItem>
                        <FormLabel>
                          Name
                          <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Please enter your name."
                            className="w-full bg-white text-black rounded-2xl focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                            {...form.register("name")}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={() => (
                      <FormItem>
                        <FormLabel>
                          Email
                          <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Please enter your email."
                            className="w-full bg-white text-black rounded-2xl focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                            {...form.register("email")}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={() => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="Please enter your phone number."
                            className="w-full bg-white text-black rounded-2xl focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                            {...form.register("phone")}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={() => (
                      <FormItem>
                        <FormLabel>
                          Message
                          <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Please enter your message here."
                            className="h-28 resize-none w-full bg-white text-black rounded-2xl focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                            {...form.register("message")}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="tnc"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center">
                          <FormControl>
                            <Checkbox
                              {...form.register("tnc")}
                              className="me-2"
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormDescription>
                            I agree to contact by Crescent Export.
                          </FormDescription>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    className="w-full bg-blue-800 hover:bg-blue-900 text-white"
                    type="submit"
                    radius="sm"
                    disabled={pending}
                  >
                    {pending ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : null}
                    {pending ? "Submitting...." : "Submit"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
