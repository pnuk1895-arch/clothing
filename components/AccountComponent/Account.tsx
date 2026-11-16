
"use client";

import { useEffect, useState, type FormEvent } from "react";
import {
    FiUser,
    FiShoppingBag,
    FiHeart,
    FiMapPin,
    FiLock,
    FiChevronRight,
    FiPlus,
} from "react-icons/fi";
import { Pencil } from "lucide-react";

import { cn } from "@/lib/utils";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../ui/card";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "../ui/avatar";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import { useAuth } from "@/context/AuthContext";

const bg_Image = "/images/Account/Account-bg.png";

const AccountLinks = [
    { icons: FiUser, title: "My Profile" },
    { icons: FiShoppingBag, title: "My Orders" },
    { icons: FiHeart, title: "My Wishlist" },
    { icons: FiMapPin, title: "My Addresses" },
    { icons: FiLock, title: "Password & Security" },
];

type ProfileType = {
    "Full Name": string | undefined;
    "Email address": string | undefined;
    "Phone Number"?: string | undefined;
    gender?: string | undefined;
};

const Obj: ProfileType = {
    "Full Name": "",
    "Email address": "",
    "Phone Number": "+91 98765 43210",
    gender: "Male",
};



export default function AcountComponent() {
    const [Edit, setEdit] = useState(false);
    const [Account, setAccount] = useState<ProfileType>(Obj);
    const [draft, setDraft] = useState<ProfileType>(Obj);
    const { Profile, setProfile } = useAuth()

    useEffect(() => {
        if (Profile) {
            setAccount({
                "Full Name": Profile?.name,
                "Email address": Profile?.email,
                'Phone Number': "",
                "gender": ""
            })
        }
    }, [Profile])

    function EditHandler() {
        setDraft({ ...Account });
        setEdit(true);
    }

    function FromHandler(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setAccount(draft);
        setEdit(false);
        // Connect your backend API here to persist changes.
    }

    function updateField(key: keyof ProfileType, value: string) {
        setDraft((previous) => ({
            ...previous,
            [key]: value,
        }));
    }

    return (
        <>
            {/* Keep space for your existing fixed navbar */}
            <div className="min-h-16 sm:min-h-24 lg:min-h-26" />

            <section
                style={{ backgroundImage: `url('${bg_Image}')` }}
                className={cn(
                    "min-h-screen w-full bg-cover bg-top-right bg-no-repeat",
                    "pb-10 sm:pb-14 xl:pb-20"
                )}
            >
                <div
                    className={cn(
                        "mx-auto w-[92%] max-w-content-area pt-5",
                        "sm:w-[90%] sm:pt-8",
                        "xl:pt-12"
                    )}
                >
                    {/* Page heading */}
                    <header className="mb-5 space-y-1 sm:mb-7 xl:mb-9">
                        <h2
                            className={cn(
                                "font-serif text-2xl font-semibold text-header-burgundy",
                                "sm:text-3xl xl:text-4xl"
                            )}
                        >
                            My Account
                        </h2>

                        <p className="text-xs text-brand-heading-dark sm:text-sm">
                            Welcome back! Manage your account details here.
                        </p>
                    </header>

                    {/* Main responsive layout */}
                    <div
                        className={cn(
                            "grid grid-cols-1 items-start gap-4",
                            "sm:gap-5",
                            "lg:grid-cols-12 lg:gap-6"
                        )}
                    >
                        {/* Profile and account navigation */}
                        <aside
                            className={cn(
                                "min-w-0 space-y-3",
                                "lg:col-span-4 xl:space-y-4"
                            )}
                        >
                            {/* Profile card */}
                            <Card
                                className={cn(
                                    "items-center gap-2 rounded-xl border-brand-beige/80",
                                    "bg-brand-cream/90 px-4 py-5",
                                    "lg:flex"
                                )}
                            >
                                <Avatar className="size-16 bg-brand-beige/70 xl:size-20">
                                    <AvatarImage
                                        src=""
                                        alt="Profile image"
                                    />
                                    <AvatarFallback className="font-serif text-2xl text-header-burgundy xl:text-3xl">
                                        PN
                                    </AvatarFallback>
                                </Avatar>

                                <div className="space-y-1 text-center">
                                    <h2 className="font-serif text-lg font-semibold text-brand-heading-dark">
                                        {Account["Full Name"]}
                                    </h2>
                                    <p className="text-xs text-brand-Brown">
                                        {Account["Email address"]}
                                    </p>
                                </div>
                            </Card>

                            {/* Mobile + desktop navigation */}
                            <Card
                                className={cn(
                                    "gap-1 rounded-xl border-brand-beige/70",
                                    "bg-brand-cream/90 p-2",
                                    "sm:hidden lg:flex"
                                )}
                            >
                                {AccountLinks.map((link, index) => {
                                    const Icon = link.icons;

                                    return (
                                        <button
                                            key={link.title}
                                            type="button"
                                            className={cn(
                                                "flex w-full items-center justify-between",
                                                "rounded-lg px-3 py-3 text-left",
                                                "transition-colors hover:bg-brand-light-Cream",
                                                // index === 0 &&
                                                // "bg-brand-light-Cream text-header-burgundy"
                                            )}
                                        >
                                            <span className="flex items-center gap-4">
                                                <Icon className="size-5 shrink-0" />
                                                <span className="text-sm font-medium">
                                                    {link.title}
                                                </span>
                                            </span>
                                            <FiChevronRight className="size-4" />
                                        </button>
                                    );
                                })}
                            </Card>

                            {/* Tablet-only horizontal navigation */}
                            <nav
                                className={cn(
                                    "hidden grid-cols-5 gap-1",
                                    "sm:grid lg:hidden",
                                    "bg-brand-cream/90"
                                )}
                                aria-label="Account navigation"
                            >
                                {AccountLinks.map((link, index) => {
                                    const Icon = link.icons;

                                    return (
                                        <button
                                            key={link.title}
                                            type="button"
                                            className={cn(
                                                "flex min-w-0 flex-col items-center",
                                                "justify-center gap-2 rounded-xl",
                                                "px-1 py-4 text-center",
                                                "transition-colors hover:bg-brand-light-Cream",
                                                // index === 0 &&
                                                // "bg-brand-light-Cream text-header-burgundy"
                                            )}
                                        >
                                            <Icon className="size-5" />
                                            <span className="text-xs font-semibold">
                                                {link.title}
                                            </span>
                                        </button>
                                    );
                                })}
                            </nav>
                        </aside>

                        {/* Right-side content */}
                        <main
                            className={cn(
                                "min-w-0 space-y-3",
                                "sm:space-y-4",
                                "lg:col-span-8"
                            )}
                        >
                            {/* Personal information */}
                            <Card
                                className={cn(
                                    "gap-0 rounded-xl border-brand-beige/70",
                                    "bg-brand-cream/90 px-4 py-4",
                                    "sm:px-6 sm:py-5"
                                )}
                            >
                                <div className="flex items-start justify-between gap-2">
                                    <div className="min-w-0 space-y-1">
                                        <CardTitle className="font-serif text-lg text-header-burgundy sm:text-xl">
                                            Personal Information
                                        </CardTitle>
                                        <CardDescription className="hidden text-xs sm:block">
                                            Your personal details and information.
                                        </CardDescription>
                                    </div>

                                    <Button
                                        variant="ghost"
                                        type="button"
                                        onClick={() => {
                                            if (Edit) {
                                                setEdit(false);
                                            } else {
                                                // EditHandler();
                                            }
                                        }}
                                        className="h-8 shrink-0 gap-1 px-2 text-xs text-header-burgundy"
                                    >
                                        <Pencil className="size-3.5" />
                                        {Edit ? "Cancel" : "Edit"}
                                        <span className="hidden sm:inline">
                                            {!Edit && " Profile"}
                                        </span>
                                    </Button>
                                </div>

                                {Edit ? (

                                    <form onSubmit={FromHandler} className="mt-4">
                                        <div className="grid grid-cols-1 gap-x-7 gap-y-4 sm:grid-cols-2">
                                            {(
                                                Object.entries(draft) as [
                                                    keyof ProfileType,
                                                    string
                                                ][]
                                            ).map(([key, value]) => (
                                                <div key={key} className="min-w-0 space-y-1">
                                                    <Label className="text-xs font-semibold capitalize text-brand-heading-dark">
                                                        {key}
                                                    </Label>

                                                    {key === "gender" ? (
                                                        <Select
                                                            value={value}
                                                            onValueChange={(selected) =>
                                                                updateField(key, String(selected ?? ""))
                                                            }
                                                        >
                                                            <SelectTrigger className="h-8 w-full border-0 bg-transparent px-0 shadow-none focus-visible:ring-0">
                                                                <SelectValue placeholder="Select Gender" />
                                                            </SelectTrigger>

                                                            <SelectContent className="bg-brand-cream">
                                                                <SelectItem value="Male">Male</SelectItem>
                                                                <SelectItem value="Female">Female</SelectItem>
                                                                <SelectItem value="Other">Other</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    ) : (
                                                        <Input
                                                            value={value}
                                                            onChange={(e) =>
                                                                updateField(key, e.target.value)
                                                            }
                                                            placeholder={`Enter ${key}`}
                                                            className={cn(
                                                                "h-8 border-0 bg-transparent px-0 text-sm",
                                                                "shadow-none focus-visible:ring-0",
                                                                "focus-visible:outline-none"
                                                            )}
                                                        />
                                                    )}

                                                    <Separator className="bg-brand-beige" />
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-6 flex justify-end">
                                            <Button
                                                type="submit"
                                                className={cn(
                                                    "w-full bg-header-burgundy text-brand-cream",
                                                    "uppercase hover:bg-brand-deep-burgundy",
                                                    "sm:w-auto sm:min-w-40"
                                                )}
                                            >
                                                Save Changes
                                            </Button>
                                        </div>
                                    </form>
                                ) : (
                                    <div className="mt-4 grid grid-cols-1 gap-x-7 gap-y-4 sm:grid-cols-2">
                                        {Object.entries(Account).map(([key, value]) => (
                                            <div key={key} className="min-w-0 space-y-1">
                                                <Label className="text-xs font-semibold capitalize text-brand-heading-dark">
                                                    {key}
                                                </Label>
                                                <p className="wrap-break-word text-sm text-brand-heading-dark">
                                                    {value}
                                                </p>
                                                <Separator className="bg-brand-beige" />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </Card>

                            {/* Address card */}
                            <Card className="gap-3 rounded-xl border-brand-beige/70 bg-brand-cream/90 px-4 py-4 sm:px-6 sm:py-5">
                                <div className="flex items-start justify-between gap-2">
                                    <div className="space-y-1">
                                        <CardTitle className="font-serif text-lg text-header-burgundy sm:text-xl">
                                            My Address
                                        </CardTitle>
                                        <CardDescription className="hidden text-xs sm:block">
                                            Manage your delivery information.
                                        </CardDescription>
                                    </div>

                                    <Button
                                        variant="ghost"
                                        type="button"
                                        className="h-8 shrink-0 gap-1 px-2 text-xs text-header-burgundy"
                                    >
                                        <FiPlus className="size-4" />
                                        Add New
                                    </Button>
                                </div>

                                <div className="flex items-center gap-3 rounded-lg bg-brand-light-Cream/70 p-3">
                                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-beige/40">
                                        <FiMapPin className="size-5 text-header-burgundy" />
                                    </div>

                                    <div className="min-w-0 flex-1 space-y-1">
                                        <p className="text-xs font-semibold text-brand-heading-dark sm:text-sm">
                                            Home Address
                                            <span className="ml-2 rounded bg-brand-beige/40 px-2 py-0.5 text-xs text-header-burgundy">
                                                DEFAULT
                                            </span>
                                        </p>
                                        <p className="text-xs text-brand-Brown">
                                            A-45, Sector 62, Noida, Uttar Pradesh – 201309
                                        </p>
                                    </div>

                                    <Pencil className="size-4 shrink-0 text-header-burgundy" />
                                </div>
                            </Card>

                            {/* Password and security */}
                            <Card className="gap-4 rounded-xl border-brand-beige/70 bg-brand-cream/90 px-4 py-4 sm:px-6 sm:py-5">
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-brand-light-Cream">
                                            <FiLock className="size-5 text-header-burgundy" />
                                        </div>

                                        <div className="space-y-1">
                                            <CardTitle className="font-serif text-base text-header-burgundy sm:text-lg">
                                                Password &amp; Security
                                            </CardTitle>
                                            <CardDescription className="text-xs">
                                                Keep your account safe and secure.
                                            </CardDescription>
                                        </div>
                                    </div>

                                    <Button
                                        variant="outline"
                                        type="button"
                                        className="w-full border-header-burgundy text-xs font-semibold uppercase text-header-burgundy sm:w-auto"
                                    >
                                        Change Password
                                    </Button>
                                </div>
                            </Card>
                        </main>
                    </div>
                </div>
            </section>
        </>
    );
}
