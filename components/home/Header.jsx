'use client';
import React from 'react'
import mainPagesHeaderIcon from '@/public/images/mainPagesHeaderIcon.svg'
import messegeIcon from '@/public/images/messegeIcon.svg'
import notificationIcon from '@/public/images/notificationIcon.svg'
import defaultUser from '@/public/images/defaultUser.jpg'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { useRouter } from 'next/navigation'

export default function Header({ page, title, isMain, first, firstURL, second, third, thirdURL, secondURL }) {
    const router = useRouter();
    return (
        <div className="header">
            <div className="r-side">
                {
                    isMain ?
                        <div className="main-icon">
                            <Image src={mainPagesHeaderIcon} alt="Aakdi" />
                        </div> :
                        <button className="header-icon" onClick={() => { router.back() }}>
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                }
                <div className="page-info">
                    {
                        title ?
                            <h2>{title}</h2>
                            : null
                    }
                    <div className="bread-crumb">
                        {
                            first ?
                                <Link href={firstURL} className="page-name">{first}</Link>
                                : null
                        }
                        {
                            second ?
                                <>
                                    <i className="fa-solid fa-chevron-left"></i>
                                    <Link href={secondURL} className="page-name">{second}</Link>
                                </>
                                : null
                        }
                        {
                            third ?
                                <>
                                    <i className="fa-solid fa-chevron-left"></i>
                                    <Link href={thirdURL} className="page-name">{third}</Link>
                                </>
                                : null
                        }
                    </div>

                </div>
            </div>
            <div className="l-side">
                <Link href='/messages' className="header-icon"><Image src={messegeIcon} alt="Aakdi" /></Link>
                <Link href='/notification' className="header-icon"><Image src={notificationIcon} alt="Aakdi" /></Link>
                <div className="user-cont">
                    <Image src={defaultUser} alt="Aakdi" />
                    <div className="user-data">
                        <h3>محمد علي</h3>
                        <span>موظف</span>
                    </div>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="header-icon header-drop-button">
                            <i className="fa-solid fa-chevron-down"></i>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="start">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Billing
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Settings
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Keyboard shortcuts
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            Log out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}
