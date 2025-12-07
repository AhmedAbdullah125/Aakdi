'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import bluelogo from '@/public/images/blue-logo.svg';
import waving from '@/public/images/waving.svg';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormField, FormItem, FormControl, FormMessage, FormLabel, } from '@/components/ui/form';
import Image from 'next/image';
import { useState } from 'react';
import 'react-phone-number-input/style.css';
import Link from 'next/link';
export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const FormSchema = z.object({
    email: z.string().email().nonempty("Please enter a valid email address."),
    password: z.string().min(6, "Password must be at least 6 characters."),
    remember: z.boolean().refine(value => value === true, {
      message: "Please check the 'Remember me' box",
    }),
  });
  const form = useForm({
    resolver: zodResolver(FormSchema),
    // ✅ default values for ALL fields used
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
    // optional, but helps keep fields mounted state consistent
    shouldUnregister: false,
  });
  const onSubmit = (formdata) => {
    //send post request
    console.log(formdata);

  };
  return (
    <div className="sign-section" >
      <div className="sign-container">
        <div className="upper-head">
          <Link href="/" className="logo-ancor"> <figure className="logo-img"> <Image src={bluelogo} alt="logo" className="img-fluid" /> </figure> </Link>
          <Image src={waving} alt="Aakdi" className="img-fluid" />
        </div>
        <h2 className="form-head">مرحبـــــاً بعودتـــك !.</h2>
        <p className="form-pargh">لوحة تحكم الموظفيــن.</p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField name="email" control={form.control} render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="form-cont">
                    <div className="form-group">
                      <FormLabel className="form-label">البريـــد الإلكتـــرونـــي <span>*</span></FormLabel>
                      <Input type="text" className="form-input" placeholder='أدخل بريدك الإلكتروني هنــا ...' {...field} />
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField name="password" control={form.control} render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="form-cont">
                    <div className="form-group">
                      <FormLabel className="form-label">كلمة المرور <span>*</span></FormLabel>
                      <Input type="password" className="form-input" placeholder='أدخل كلمة المرور هنــا ...'  {...field} />
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <FormField name="remember" control={form.control} render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="check-group">
                    <div className="check-width flex justify-between">
                      <label className="check-label">
                        <input type="checkbox" checked={field.value} onChange={field.onChange} />
                        <span className="checkmark custom-checkmark"></span>
                        <span className="check-text">تــذكرني</span>
                      </label>
                      <Link href={'/reset'}>هل نسيــت كلمة المــرور !</Link>
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <div className="form-btn-cont"> <Button type="submit" className="form-btn" disabled={loading}> <span>{loading ? "جار التحقق" : "تسجيـــل الدخــول"}</span><span className="arrow-icon"><i className="fa-solid fa-arrow-up"></i></span></Button> </div>

          </form>
        </Form>
      </div>
    </div>
  );
}
