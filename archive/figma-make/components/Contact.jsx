import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Label } from './ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export function Contact() {
   const contactInfo = [
      {
         icon: Phone,
         title: 'Call Us',
         details: '+1 (555) 123-4567',
         subtitle: 'Mon-Fri 9AM-6PM EST',
      },
      {
         icon: Mail,
         title: 'Email Us',
         details: 'security@tempest.com',
         subtitle: '24/7 Emergency Response',
      },
      {
         icon: MapPin,
         title: 'Visit Us',
         details: '123 Security Blvd',
         subtitle: 'New York, NY 10001',
      },
      {
         icon: Clock,
         title: 'Response Time',
         details: '&lt; 15 minutes',
         subtitle: 'Critical incidents',
      },
   ]

   return (
      <section id='contact' className='py-20'>
         <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center space-y-4 mb-16'>
               <h2 className='text-3xl md:text-4xl tracking-tight'>
                  Get Your Free Security Assessment
               </h2>
               <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
                  Ready to protect your business? Contact our cybersecurity experts today for a
                  comprehensive security assessment.
               </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
               {/* Contact Form */}
               <div className='lg:col-span-2'>
                  <Card>
                     <CardHeader>
                        <CardTitle>Request Your Assessment</CardTitle>
                     </CardHeader>
                     <CardContent className='space-y-6'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                           <div className='space-y-2'>
                              <Label htmlFor='firstName'>First Name</Label>
                              <Input id='firstName' placeholder='John' />
                           </div>
                           <div className='space-y-2'>
                              <Label htmlFor='lastName'>Last Name</Label>
                              <Input id='lastName' placeholder='Doe' />
                           </div>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                           <div className='space-y-2'>
                              <Label htmlFor='email'>Email</Label>
                              <Input id='email' type='email' placeholder='john@company.com' />
                           </div>
                           <div className='space-y-2'>
                              <Label htmlFor='phone'>Phone</Label>
                              <Input id='phone' type='tel' placeholder='+1 (555) 123-4567' />
                           </div>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                           <div className='space-y-2'>
                              <Label htmlFor='company'>Company</Label>
                              <Input id='company' placeholder='Acme Corporation' />
                           </div>
                           <div className='space-y-2'>
                              <Label htmlFor='industry'>Industry</Label>
                              <Select>
                                 <SelectTrigger>
                                    <SelectValue placeholder='Select industry' />
                                 </SelectTrigger>
                                 <SelectContent>
                                    <SelectItem value='healthcare'>Healthcare</SelectItem>
                                    <SelectItem value='finance'>Finance</SelectItem>
                                    <SelectItem value='technology'>Technology</SelectItem>
                                    <SelectItem value='manufacturing'>Manufacturing</SelectItem>
                                    <SelectItem value='retail'>Retail</SelectItem>
                                    <SelectItem value='other'>Other</SelectItem>
                                 </SelectContent>
                              </Select>
                           </div>
                        </div>

                        <div className='space-y-2'>
                           <Label htmlFor='message'>Tell us about your security needs</Label>
                           <Textarea
                              id='message'
                              placeholder="Describe your current security challenges and what type of assessment you're looking for..."
                              className='min-h-[120px]'
                           />
                        </div>

                        <Button className='w-full' size='lg'>
                           Request Free Assessment
                        </Button>
                     </CardContent>
                  </Card>
               </div>

               {/* Contact Information */}
               <div className='space-y-6'>
                  {contactInfo.map((info, index) => (
                     <Card key={index} className='hover:shadow-md transition-shadow'>
                        <CardContent className='p-6'>
                           <div className='flex items-start space-x-4'>
                              <div className='p-2 rounded-lg bg-primary/10'>
                                 <info.icon className='h-6 w-6 text-primary' />
                              </div>
                              <div className='space-y-1'>
                                 <div className='font-medium text-foreground'>{info.title}</div>
                                 <div
                                    className='text-foreground'
                                    dangerouslySetInnerHTML={{
                                       __html: info.details,
                                    }}
                                 />
                                 <div className='text-sm text-muted-foreground'>
                                    {info.subtitle}
                                 </div>
                              </div>
                           </div>
                        </CardContent>
                     </Card>
                  ))}

                  <Card className='bg-primary text-primary-foreground'>
                     <CardContent className='p-6 text-center space-y-4'>
                        <h3 className='text-lg'>Emergency Response</h3>
                        <p className='text-sm opacity-90'>
                           Experiencing a security incident? Our emergency response team is
                           available 24/7 to help contain and mitigate threats.
                        </p>
                        <Button variant='secondary' className='w-full'>
                           Emergency Hotline
                        </Button>
                     </CardContent>
                  </Card>
               </div>
            </div>
         </div>
      </section>
   )
}
