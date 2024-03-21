import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
  
import { Button } from '@/components/ui/button';
  

const AdmDashboard = () => {

    const menu = [
        {
            title: ""
        }
    ]

    return (
        <div className="section__padding">
            <div className='border rounded p-4'>
                <div className='border'>
                    <h1 className='text-3xl font-bold'>Dashbord Fellow</h1>
                </div>
                <div className='flex flew-row mt-4'>
                    <div className='border mr-4 w-1/5'>
                        <div className='py-2 px-1'>
                            <Button variant="outline" className="w-full">TEst</Button>
                        </div>
                    </div>
                    <div className='border w-4/5'>content</div>
                </div>
            </div>
        </div>
    )
 }
 
 export default AdmDashboard;