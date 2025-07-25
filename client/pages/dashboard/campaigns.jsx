
import Head from "next/head";
import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Notifications from "@/components/campaigns/Notifications";
import NewCampaigns from "@/components/campaigns/NewCampaigns";
import Reports from "@/components/campaigns/Reports";
import Schedules from "@/components/campaigns/Schedules";
import Templetes from "/components/campaigns/Templetes";
import AllCampaigns from "/components/campaigns/AllCampaigns";


const navigation = [
  { name: "All Campaigns", id: "all-campaigns" },
  { name: "New Campaigns", id: "new-campaigns" },
  { name: "Reports", id: "reports" },
  { name: "Templates", id: "templates" },
  { name: "Schedules", id: "schedules" },
  { name: "Notifications", id: "notifications" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Campaigns() {
  const [activeTab, setActiveTab] = useState("all-campaigns");

  const renderContent = () => {
    switch (activeTab) {
    case "all-campaigns":
        return  <AllCampaigns/>
      case "new-campaigns":
        return <NewCampaigns />;
      case "reports":
        return <Reports />;
      case "templates":
        return <Templetes />;
      case "schedules":
        return <Schedules />;
      case "notifications":
        return <Notifications />;
       
    }
  };

  return (
    <DashboardLayout>
      <Head className="mt-[5%] ">
        <title>Campaigns - EmailAI Pro</title>
      </Head>

      {/* Navigation */}
      <Disclosure as="nav" className="bg-white text-black dark:bg-gray-900 dark:text-white shadow mt-5 pt-5 w-full"  >
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 pt-5 mt-5">
          <div className="relative flex h-16 items-center justify-between">
            {/* Mobile menu button */}
            <div className="absolute inset-y-0 flex items-center sm:hidden">
              <DisclosureButton className="relative inline-flex items-center justify-center rounded-md   text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
              </DisclosureButton>
            </div>

            {/* Logo + Tabs */} 
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start" >
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={classNames(
                        activeTab === item.id
                          ? "bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full bg-gray-200 dark:bg-gray-800 p-1 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3">
                <div>
                  <MenuButton className="flex rounded-full bg-gray-300 dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                      alt="User"
                    />
                  </MenuButton>
                </div>
                <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-gray-800 py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                  <MenuItem>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-gray-100 dark:bg-gray-700" : "",
                          "block px-4 py-2 text-sm text-gray-700 dark:text-gray-200"
                        )}
                      >
                        Your Profile 
                      </a>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-gray-100 dark:bg-gray-700" : "",
                          "block px-4 py-2 text-sm text-gray-700 dark:text-gray-200"
                        )}
                      >
                        Settings
                      </a>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-gray-100 dark:bg-gray-700" : "",
                          "block px-4 py-2 text-sm text-gray-700 dark:text-gray-200"
                        )}
                      >
                        Sign out
                      </a>
                    )}
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.id}
                as="button"
                onClick={() => setActiveTab(item.id)}
                className={classNames(
                  activeTab === item.id
                    ? "bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white",
                  "block w-full text-left rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
        <div className="mt-4" style={{width:"100%"}}>{renderContent()}
      </div>
      
      </Disclosure>

      {/* Main Content Area */}
      
       
    </DashboardLayout>
  );
=======
'use client';

import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Notifications from "@/components/campaigns2/Notifications";
import NewCampaigns from "@/components/campaigns2/NewCampaigns";
import Reports from "@/components/campaigns2/Reports";
import Schedules from "@/components/campaigns2/Schedules";
import Templetes from "@/components/campaigns2/Templetes";
import AllCampaigns from "@/components/campaigns2/AllCampaigns";

// Navigation tabs
const navigation = [
    { name: "All Campaigns", id: "all-campaigns" },
    { name: "New Campaigns", id: "new-campaigns" },
    { name: "Reports", id: "reports" },
    { name: "Templates", id: "templates" },
    { name: "Schedules", id: "schedules" },
    { name: "Notifications", id: "notifications" },
];

// Utility for className merging
const classNames = (...classes) => classes.filter(Boolean).join(" ");

// Tab content renderer
const contentMap = {
    "all-campaigns": <AllCampaigns />,
    "new-campaigns": <NewCampaigns />,
    "reports": <Reports />,
    "templates": <Templetes />,
    "schedules": <Schedules />,
    "notifications": <Notifications />,
};

export default function CampaignsPage() {
    const [activeTab, setActiveTab] = useState("all-campaigns");

    return (
        <DashboardLayout>
            <Disclosure
                as="nav"
                className="bg-white text-black dark:bg-gray-900 dark:text-white shadow mt-5 pt-5 w-full"
            >
                <div className="mx-auto px-2 w-full sm:px-6 lg:px-8 pt-5 mt-5">
                    <div className="relative flex h-16 w-full items-center justify-between">
                        {/* Mobile menu button */}
                        <div className="absolute inset-y-0 left-0 w-full flex items-center sm:hidden">
                            <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
                            </DisclosureButton>
                        </div>

                        {/* Desktop Tabs */}
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start w-full">
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => setActiveTab(item.id)}
                                            className={classNames(
                                                activeTab === item.id
                                                    ? "bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
                                                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white",
                                                "rounded-md px-3 py-2 text-sm font-medium"
                                            )}
                                        >
                                            {item.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Tabs */}
                <DisclosurePanel className="sm:hidden">
                    <div className="space-y-1 px-2 pt-2 pb-3 w-full">
                        {navigation.map((item) => (
                            <DisclosureButton
                                key={item.id}
                                as="button"
                                onClick={() => setActiveTab(item.id)}
                                className={classNames(
                                    activeTab === item.id
                                        ? "bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
                                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white",
                                    "block w-full text-left rounded-md px-3 py-2 text-base font-medium"
                                )}
                            >
                                {item.name}
                            </DisclosureButton>
                        ))}
                    </div>
                </DisclosurePanel>

                {/* Main Content */}
                <div className="mt-4 w-full px-4">{contentMap[activeTab]}</div>
            </Disclosure>
        </DashboardLayout>
    );

}
 
 