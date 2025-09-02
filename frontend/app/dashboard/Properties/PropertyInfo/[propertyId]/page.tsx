'use client'

import React, { useState } from 'react'
import { ArrowLeft, Edit3, Camera, MapPin, Home, Calendar, DollarSign, User, Phone, Mail, Settings, Trash2, Plus } from 'lucide-react'
import Link from 'next/link'

export default function PropertyInfo() {
  const [activeTab, setActiveTab] = useState('overview')
  const [isEditing, setIsEditing] = useState(false)

  // Mock property data - replace with real data from your API
  const propertyData = {
    id: 1,
    address: '123 Oak Street',
    city: 'Dallas',
    state: 'TX',
    zip: '75201',
    propertyType: 'Single Family Home',
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1850,
    purchasePrice: 285000,
    purchaseDate: '2024-03-15',
    currentRent: 2200,
    tenant: {
      name: 'John & Sarah Williams',
      email: 'williams.family@email.com',
      phone: '(555) 123-4567',
      leaseStart: '2024-06-01',
      leaseEnd: '2025-05-31'
    },
    photos: [
      '/api/placeholder/400/300',
      '/api/placeholder/400/300',
      '/api/placeholder/400/300'
    ]
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'tenant', label: 'Tenant Info', icon: User },
    { id: 'photos', label: 'Photos', icon: Camera },
    { id: 'settings', label: 'Settings', icon: Settings }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 p-6 roundedf">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link href="/dashboard/Properties" className="p-2 hover:bg-white rounded-lg transition-colors">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{propertyData.address}</h1>
              <p className="text-gray-600 flex items-center gap-1 mt-1">
                <MapPin className="w-4 h-4" />
                {propertyData.city}, {propertyData.state} {propertyData.zip}
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              isEditing 
                ? 'bg-green-600 text-white hover:bg-green-700' 
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            <Edit3 className="w-4 h-4" />
            {isEditing ? 'Save Changes' : 'Edit Property'}
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex border-b border-gray-200">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              )
            })}
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'overview' && (
              <div className="grid md:grid-cols-2 gap-8">
                {/* Property Details */}
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Property Details</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-gray-500">Property Type</label>
                        <p className="font-medium text-gray-900">{propertyData.propertyType}</p>
                      </div>
                      <div>
                        <label className="text-sm text-gray-500">Square Feet</label>
                        <p className="font-medium text-gray-900">{propertyData.squareFeet.toLocaleString()} sq ft</p>
                      </div>
                      <div>
                        <label className="text-sm text-gray-500">Bedrooms</label>
                        <p className="font-medium text-gray-900">{propertyData.bedrooms}</p>
                      </div>
                      <div>
                        <label className="text-sm text-gray-500">Bathrooms</label>
                        <p className="font-medium text-gray-900">{propertyData.bathrooms}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Financial Information</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-gray-500">Purchase Price</label>
                        <p className="font-medium text-gray-900">${propertyData.purchasePrice.toLocaleString()}</p>
                      </div>
                      <div>
                        <label className="text-sm text-gray-500">Current Rent</label>
                        <p className="font-medium text-green-600">${propertyData.currentRent.toLocaleString()}/month</p>
                      </div>
                      <div>
                        <label className="text-sm text-gray-500">Purchase Date</label>
                        <p className="font-medium text-gray-900">{new Date(propertyData.purchaseDate).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <label className="text-sm text-gray-500">Monthly ROI</label>
                        <p className="font-medium text-green-600">0.77%</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white">
                    <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                      <button className="w-full bg-white/20 hover:bg-white/30 rounded-lg p-3 text-left transition-colors">
                        <div className="flex items-center gap-3">
                          <DollarSign className="w-5 h-5" />
                          <span>Record Rent Payment</span>
                        </div>
                      </button>
                      <button className="w-full bg-white/20 hover:bg-white/30 rounded-lg p-3 text-left transition-colors">
                        <div className="flex items-center gap-3">
                          <Calendar className="w-5 h-5" />
                          <span>Schedule Maintenance</span>
                        </div>
                      </button>
                      <button className="w-full bg-white/20 hover:bg-white/30 rounded-lg p-3 text-left transition-colors">
                        <div className="flex items-center gap-3">
                          <User className="w-5 h-5" />
                          <span>Contact Tenant</span>
                        </div>
                      </button>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Rent payment received</p>
                          <p className="text-xs text-gray-500">2 days ago</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">Maintenance request completed</p>
                          <p className="text-xs text-gray-500">1 week ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'tenant' && (
              <div className="max-w-2xl">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Current Tenant</h3>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm text-gray-500">Tenant Name</label>
                        <p className="font-medium text-gray-900">{propertyData.tenant.name}</p>
                      </div>
                      <div>
                        <label className="text-sm text-gray-500">Email</label>
                        <p className="font-medium text-blue-600">{propertyData.tenant.email}</p>
                      </div>
                      <div>
                        <label className="text-sm text-gray-500">Phone</label>
                        <p className="font-medium text-gray-900">{propertyData.tenant.phone}</p>
                      </div>
                      <div>
                        <label className="text-sm text-gray-500">Monthly Rent</label>
                        <p className="font-medium text-green-600">${propertyData.currentRent.toLocaleString()}</p>
                      </div>
                    </div>
                    
                    <div className="border-t pt-6">
                      <h4 className="font-medium text-gray-900 mb-4">Lease Information</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm text-gray-500">Lease Start</label>
                          <p className="font-medium text-gray-900">{new Date(propertyData.tenant.leaseStart).toLocaleDateString()}</p>
                        </div>
                        <div>
                          <label className="text-sm text-gray-500">Lease End</label>
                          <p className="font-medium text-gray-900">{new Date(propertyData.tenant.leaseEnd).toLocaleDateString()}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        <Mail className="w-4 h-4" />
                        Send Message
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                        <Phone className="w-4 h-4" />
                        Call Tenant
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'photos' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Property Photos</h3>
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Plus className="w-4 h-4" />
                    Add Photos
                  </button>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {propertyData.photos.map((photo, index) => (
                    <div key={index} className="relative group">
                      <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                          <Camera className="w-12 h-12 text-gray-500" />
                        </div>
                      </div>
                      <button className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                  
                  <div className="aspect-video border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center hover:border-blue-500 transition-colors cursor-pointer">
                    <div className="text-center">
                      <Plus className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">Add Photo</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="max-w-2xl space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Property Settings</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3">
                      <div>
                        <p className="font-medium text-gray-900">Rent Reminders</p>
                        <p className="text-sm text-gray-500">Send automatic rent reminders to tenant</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between py-3 border-t">
                      <div>
                        <p className="font-medium text-gray-900">Maintenance Notifications</p>
                        <p className="text-sm text-gray-500">Get notified of maintenance requests</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-red-900 mb-4">Danger Zone</h3>
                  <p className="text-sm text-red-700 mb-4">
                    Once you delete this property, all associated data will be permanently removed. This action cannot be undone.
                  </p>
                  <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                    <Trash2 className="w-4 h-4" />
                    Delete Property
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}