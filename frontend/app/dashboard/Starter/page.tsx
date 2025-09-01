'use client'

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { UserContext } from "../UserContext"
import { useContext } from "react";

type UserProfileData = {
  highLoanAmount: number;
  lowLoanAmount: number;
  meanLoanAmount: number;
};

const DashboardPage = () => {
  const { profile } = useContext(UserContext);
  const [userData, setData] = useState<UserProfileData | null>(null);

  useEffect(() => {
    if (!profile?.uid) return;

    const getData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SITE_URL}/api/userProfile?userId=${profile.uid}`,
          { cache: 'no-store' }
        );
        if (!res.ok) throw new Error('Failed to fetch');
        const json: UserProfileData = await res.json();
        setData(json);
      } catch (err) {
        console.error(err);
      }
    };

    getData();
  }, [profile?.uid]);

  const high = userData?.highLoanAmount ?? 0;
  const low = userData?.lowLoanAmount ?? 0;
  const mean = userData?.meanLoanAmount ?? 0;
  const percentage = mean ? (mean / 850000) * 100 : 0;



  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-3xl">
      <div className="py-10 px-4 flex justify-center">
        <div className="w-full max-w-screen-xl h-full border border-gray-200 rounded-2xl shadow-lg bg-white flex flex-col text-gray-800">
          {/* Header */}
          <header className="mt-10 flex flex-col items-center text-center px-4">
            <h1 className="text-5xl font-bold">Welcome, {profile?.firstName!}</h1>
            <p className="mt-3 text-lg text-gray-600">
              Here's what you can afford and how to get started.
            </p>
          </header>

          {/* Grid */}
          <div className="mt-12 grid lg:grid-cols-3 grid-cols-1 grid-rows-2 gap-x-6 gap-y-10 w-full px-6 pb-10">
            {/* Buying Power Card */}
            <div className="lg:col-span-3 col-span-1 bg-gray-50 border border-gray-100 rounded-xl shadow-sm p-6">
              <h2 className="text-xl flex items-center gap-3">
                <CheckCircle className="text-green-500 w-7 h-7" />
                Your Estimated Buying Power
              </h2>

              <p className="text-4xl font-bold text-blue-600 py-4">
                ${low.toLocaleString()} - ${high.toLocaleString()}
              </p>


              <p className="text-sm text-gray-500 mb-2">
                Estimated Total House Price
              </p>

              {/* Blue Price Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>$150,000</span>
                  <span>$1,000,000</span>
                </div>
                <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="absolute h-3 bg-gradient-to-r from-blue-300 to-blue-600 rounded-full shadow"
                    style={{
                      left: "0%",
                      width: `${percentage}%`
                    }}
                  />
                </div>
                <p className="text-xs text-center text-gray-500 mt-2">
                  Estimated price range based on your info
                </p>
              </div>

              <p className="text-sm text-gray-500">
                This is an estimate. Lenders will verify your details before pre-approval.
              </p>
            </div>

            {/* Card 1: Browse Properties */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">Start Browsing Properties</h3>
                <p className="text-base text-gray-600">
                  See available properties in your target area and save favorites.
                </p>
              </div>
              <Link
                href="/dashboard/Properties"
                className="mt-6 bg-blue-600 hover:bg-blue-700 text-white text-base font-medium py-2 px-4 rounded-lg text-center transition"
              >
                Explore Listings
              </Link>
            </div>

            {/* Card 2: Get Pre-Approved */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">Get Pre-Approved</h3>
                <p className="text-base text-gray-600">
                  Find out how much you can borrow by starting a pre-approval.
                </p>
              </div>
              <Link
                href="/dashboard/Properties"
                className="mt-6 bg-blue-600 hover:bg-blue-700 text-white text-base font-medium py-2 px-4 rounded-lg text-center transition"
              >
                See My Rates
              </Link>
            </div>

            {/* Card 3: Learn Market */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">Learn About Your Market</h3>
                <p className="text-base text-gray-600">
                  Get insights on pricing trends and competition in your target city.
                </p>
              </div>
              <Link
                href="/dashboard/Properties"
                className="mt-6 bg-blue-600 hover:bg-blue-700 text-white text-base font-medium py-2 px-4 rounded-lg text-center transition"
              >
                Find My Market
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;
