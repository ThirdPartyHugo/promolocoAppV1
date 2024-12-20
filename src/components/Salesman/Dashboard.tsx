import React, { useState } from 'react';
import { Map } from '../Map';
import { SalesMetrics } from './SalesMetrics';
import { PersonalPaySheet } from '../shared/PersonalPaySheet';
import { ChallengesView } from './ChallengesView';
import { RewardsStore } from './RewardsStore';
import { Leaderboard } from '../shared/Leaderboard';
import { BarChart3, MapPin, Network, DollarSign, Trophy, Gift } from 'lucide-react';

const SalesmanDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('map');

  const tabs = [
    { id: 'map', label: 'Map View', icon: MapPin },
    { id: 'sales', label: 'Sales Metrics', icon: BarChart3 },
    { id: 'paysheet', label: 'Pay Sheet', icon: DollarSign },
    { id: 'challenges', label: 'Challenges', icon: Trophy },
    { id: 'rewards', label: 'Rewards Store', icon: Gift },
    { id: 'leaderboard', label: 'Leaderboard', icon: Network },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'map':
        return (
          <div className="h-[calc(100vh-8rem)]">
            <Map apiKey="AIzaSyBn1qguY8gUoQ3Jq2hUyHvOV1eM_BGZelk" role="salesman" />
          </div>
        );
      case 'sales':
        return <SalesMetrics />;
      case 'paysheet':
        return (
          <PersonalPaySheet
            name="John Smith"
            role="salesman"
            period="March 2024"
            sales={[]}
            commission={{ rate: 10, amount: 350 }}
            expenses={50}
            bonuses={100}
          />
        );
      case 'challenges':
        return <ChallengesView />;
      case 'rewards':
        return <RewardsStore />;
      case 'leaderboard':
        return <Leaderboard />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <nav className="w-64 bg-white border-r border-gray-200">
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">Salesman Dashboard</h2>
        </div>
        <ul className="space-y-2 p-4">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-red-50 text-red-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <main className="flex-1 overflow-auto bg-gray-50">
        <div className="p-6">{renderContent()}</div>
      </main>
    </div>
  );
};

export default SalesmanDashboard;