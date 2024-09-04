"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Weather1() {
  const [timeOfDay, setTimeOfDay] = useState("day");
  useEffect(() => {
    const updateTimeOfDay = () => {
      const currentHour = new Date().getHours();
      if (currentHour >= 5 && currentHour < 8) {
        setTimeOfDay("sunrise");
      } else if (currentHour >= 8 && currentHour < 18) {
        setTimeOfDay("day");
      } else {
        setTimeOfDay("sunset");
      }
    };
    updateTimeOfDay();
    const interval = setInterval(updateTimeOfDay, 60000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className={`w-full min-h-screen flex flex-col bg-gradient-to-b ${timeOfDay === "sunrise"
        ? "from-[#ffd59e] to-[#ffa500]"
        : timeOfDay === "day"
          ? "from-[#87ceeb] to-[#add8e6]"
          : "from-[#87ceeb] to-[#4169e1]"
        } transition-colors duration-500 ease-in-out`}
    >
      <header className="bg-background/50 backdrop-blur-sm py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <CloudRainWindIcon className="w-8 h-8 text-primary" />
          <h1 className="text-2xl font-bold">Weather Report</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-xl font-bold">
              {timeOfDay === "sunrise" ? "6:30 AM" : timeOfDay === "day" ? "2:00 PM" : "7:45 PM"}
            </div>
            <div className="text-muted-foreground">
              {timeOfDay === "sunrise" ? "Sunrise" : timeOfDay === "day" ? "Midday" : "Sunset"}
            </div>
          </div>
          <div className="bg-muted rounded-full w-10 h-10 flex items-center justify-center">
            <CalendarIcon className="w-6 h-6 text-muted-foreground" />
          </div>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center gap-8 px-6 py-12">
        <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 w-full max-w-md flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <CloudMoonIcon className="w-12 h-12 text-primary" />
            <div>
              <div className="text-4xl font-bold">
                {timeOfDay === "sunrise" ? "68\u00B0F" : timeOfDay === "day" ? "75\u00B0F" : "62\u00B0F"}
              </div>
              <div className="text-muted-foreground">
                {timeOfDay === "sunrise" ? "Partly Cloudy" : timeOfDay === "day" ? "Sunny" : "Clear"}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 w-full">
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold">
                {timeOfDay === "sunrise" ? "68%" : timeOfDay === "day" ? "45%" : "22%"}
              </div>
              <div className="text-muted-foreground">Humidity</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold">
                {timeOfDay === "sunrise" ? "5 mph" : timeOfDay === "day" ? "10 mph" : "3 mph"}
              </div>
              <div className="text-muted-foreground">Wind</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold">
                {timeOfDay === "sunrise" ? "30%" : timeOfDay === "day" ? "0%" : "10%"}
              </div>
              <div className="text-muted-foreground">Chance of Rain</div>
            </div>
          </div>
        </div>
        <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 w-full max-w-md flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <CalendarIcon className="w-8 h-8 text-primary" />
            <div className="text-2xl font-bold">7-Day Forecast</div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
            <div className="flex flex-col items-center">
              <div className="text-xl font-bold">Mon</div>
              <CloudMoonIcon className="w-8 h-8 text-primary" />
              <div className="text-muted-foreground">
                {timeOfDay === "sunrise" ? "68\u00B0F" : timeOfDay === "day" ? "75\u00B0F" : "62\u00B0F"}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-xl font-bold">Tue</div>
              <CloudMoonIcon className="w-8 h-8 text-primary" />
              <div className="text-muted-foreground">
                {timeOfDay === "sunrise" ? "70\u00B0F" : timeOfDay === "day" ? "78\u00B0F" : "64\u00B0F"}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-xl font-bold">Wed</div>
              <CloudMoonIcon className="w-8 h-8 text-primary" />
              <div className="text-muted-foreground">
                {timeOfDay === "sunrise" ? "72\u00B0F" : timeOfDay === "day" ? "80\u00B0F" : "66\u00B0F"}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-xl font-bold">Thu</div>
              <CloudMoonIcon className="w-8 h-8 text-primary" />
              <div className="text-muted-foreground">
                {timeOfDay === "sunrise" ? "74\u00B0F" : timeOfDay === "day" ? "82\u00B0F" : "68\u00B0F"}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-xl font-bold">Fri</div>
              <CloudMoonIcon className="w-8 h-8 text-primary" />
              <div className="text-muted-foreground">
                {timeOfDay === "sunrise" ? "76\u00B0F" : timeOfDay === "day" ? "84\u00B0F" : "70\u00B0F"}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-xl font-bold">Sat</div>
              <CloudMoonIcon className="w-8 h-8 text-primary" />
              <div className="text-muted-foreground">
                {timeOfDay === "sunrise" ? "78\u00B0F" : timeOfDay === "day" ? "86\u00B0F" : "72\u00B0F"}
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-xl font-bold">Sun</div>
              <CloudMoonIcon className="w-8 h-8 text-primary" />
              <div className="text-muted-foreground">
                {timeOfDay === "sunrise" ? "80\u00B0F" : timeOfDay === "day" ? "88\u00B0F" : "74\u00B0F"}
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-background/50 backdrop-blur-sm py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <LocateIcon className="w-6 h-6 text-muted-foreground" />
          <div className="text-muted-foreground">San Francisco, CA</div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <ShareIcon className="w-6 h-6 text-muted-foreground" />
            <span className="sr-only">Share</span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <SettingsIcon className="w-6 h-6 text-muted-foreground" />
            <span className="sr-only">Settings</span>
          </Button>
        </div>
      </footer>
    </div>
  );
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}


function CloudIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}


function CloudMoonIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z" />
      <path d="M10.1 9A6 6 0 0 1 16 4a4.24 4.24 0 0 0 6 6 6 6 0 0 1-3 5.197" />
    </svg>
  );
}


function CloudRainWindIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="m9.2 22 3-7" />
      <path d="m9 13-3 7" />
      <path d="m17 13-3 7" />
    </svg>
  );
}


function LocateIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}


function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}


function ShareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  );
}
