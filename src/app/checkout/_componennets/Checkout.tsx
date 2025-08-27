'use client'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { adressSchema, adressSchemaForm } from '@/schema/adress.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Label } from '@radix-ui/react-label'
import React from 'react'
import { useForm } from 'react-hook-form'
import { checkoutOnline } from '../_actions/checkout.actions'

export default function CheckOut({id}:{id:string}) {
  const form = useForm<adressSchemaForm>({
     resolver:zodResolver(adressSchema),
    defaultValues:{
      city:'',
      details:'',
      phone:''
    }
  })

  async function OnSubmit(data:adressSchemaForm)
  {
    
    const res =  await checkoutOnline(id,data)
    if(res?.status==='success')
      window.location.href=res?.session?.url
  }

  return (
    <Form {...form}>
      <form action="" className='w-2/3 mx-auto my-5' onSubmit={form.handleSubmit(OnSubmit)}>
      
        <FormField
                        name='city'
                        control={form.control}
                        render={({ field }) => (
                            <FormItem className='my-3'>
                                <Label>city:</Label>
                                <FormControl>
                                        <Input {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
        <FormField
                        name='details'
                        control={form.control}
                        render={({ field }) => (
                            <FormItem className='my-3'>
                                <Label>details:</Label>
                                <FormControl>
                                        <Input {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
        <FormField
                        name='phone'
                        control={form.control}
                        render={({ field }) => (
                            <FormItem className='my-3'>
                                <Label>phone:</Label>
                                <FormControl>
                                        <Input {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <Button>send Data</Button>
      </form>
    </Form>
  )
}
