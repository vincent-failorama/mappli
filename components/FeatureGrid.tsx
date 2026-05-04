import React from 'react';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
}

export default function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <div className="text-4xl text-brand-600 mb-4">
            {feature.icon && <feature.icon className="inline-block" />}
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
          <p className="text-slate-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}