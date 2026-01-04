"use client";

import {
    Button,
    Checkbox,
    Input,
    Label,
    RadioGroup,
    RadioGroupItem,
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    Textarea,
} from "@relume_io/relume-ui";
import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

export function Contact6() {
    return (
        <section id="aviana" className="px-[5%] py-8 md:py-12 lg:py-14">
            <div className="container grid grid-cols-1 items-start gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:grid-flow-col lg:gap-x-20 lg:gap-y-16">
                <div>
                    <div className="mb-6 md:mb-8">

                        <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                            Send your inquiry
                        </h2>
                        <p className="md:text-md">Tell us what brings you here today</p>
                    </div>
                    <div className="grid grid-cols-1 gap-4 py-2">
                        <div className="flex items-center gap-4">
                            <BiEnvelope className="size-6 flex-none" />
                            <p>info@avianaacademy.in</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <BiPhone className="size-6 flex-none" />
                            <div className="flex flex-col">
                                <p>+91 9731532666</p>
                                <p>+91 9741904555</p>
                                <p>+91 9845739709</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <BiMap className="size-6 flex-none" />
                            <p>Bangalore, India</p>
                        </div>
                    </div>
                </div>
                <form className="grid max-w-lg grid-cols-1 grid-rows-[auto_auto] gap-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="grid w-full items-center">
                            <Label htmlFor="firstName" className="mb-2">
                                First name
                            </Label>
                            <Input type="text" id="firstName" />
                        </div>
                        <div className="grid w-full items-center">
                            <Label htmlFor="lastName" className="mb-2">
                                Last name
                            </Label>
                            <Input type="text" id="lastName" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="grid w-full items-center">
                            <Label htmlFor="email" className="mb-2">
                                Email
                            </Label>
                            <Input type="email" id="email" />
                        </div>
                        <div className="grid w-full items-center">
                            <Label htmlFor="phone" className="mb-2">
                                Phone number
                            </Label>
                            <Input type="text" id="phone" />
                        </div>
                    </div>
                    <div className="grid w-full items-center">
                        <Label className="mb-2">What interests you</Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a topic" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="communication-skills">Communication Skills</SelectItem>
                                <SelectItem value="interview-preparation">Interview Preparation</SelectItem>
                                <SelectItem value="personality-development">Personality Development</SelectItem>
                                <SelectItem value="leadership-managerial-skills">Leadership & Managerial Skills</SelectItem>
                                <SelectItem value="public-speaking-presentations">Public Speaking & Presentations</SelectItem>
                                <SelectItem value="emotional-intelligence">Emotional Intelligence</SelectItem>
                                <SelectItem value="team-building-collaboration">Team Building & Collaboration</SelectItem>
                                <SelectItem value="workplace-etiquette-professionalism">Workplace Etiquette & Professionalism</SelectItem>
                                <SelectItem value="career-guidance-mentorship">Career Guidance & Mentorship</SelectItem>
                                <SelectItem value="corporate-training-programs">Corporate Training Programs</SelectItem>
                                <SelectItem value="customized-training-workshops">Customized Training / Workshops</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid w-full items-center py-3 md:py-4">
                        <Label className="mb-3 md:mb-4">
                            How would you describe yourself
                        </Label>
                        <RadioGroup className="grid grid-cols-2 gap-x-6 gap-y-3.5">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="Business leader" id="#first_choice" />
                                <Label htmlFor="#first_choice">Business leader</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="First choice" id="#second_choice" />
                                <Label htmlFor="#second_choice">HR professional</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="First choice" id="#third_choice" />
                                <Label htmlFor="#third_choice">Team manager</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="First choice" id="#fourth_choice" />
                                <Label htmlFor="#fourth_choice">Executive coach</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="First choice" id="#fifth_choice" />
                                <Label htmlFor="#fifth_choice">Consultant</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="First choice" id="#other" />
                                <Label htmlFor="#other">Other</Label>
                            </div>
                        </RadioGroup>
                    </div>
                    <div className="grid w-full items-center">
                        <Label htmlFor="message" className="mb-2">
                            Message
                        </Label>
                        <Textarea
                            id="message"
                            placeholder="Tell us more"
                            className="min-h-[11.25rem] overflow-auto"
                        />
                    </div>
                    <div className="mb-3 flex items-center space-x-2 text-sm md:mb-4">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms" className="cursor-pointer">
                            I agree to the Terms
                        </Label>
                    </div>
                    <div>
                        <Button title="Send">Send</Button>
                    </div>
                </form>
            </div>
        </section>
    );
}
