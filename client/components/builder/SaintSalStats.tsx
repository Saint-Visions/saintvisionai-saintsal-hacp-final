import React from "react";

interface Stat {
  value: string;
  label: string;
  description: string;
}

interface SaintSalStatsProps {
  title: string;
  stats: Stat[];
}

const SaintSalStats: React.FC<SaintSalStatsProps> = ({ title, stats }) => {
  return (
    <section className="py-16 bg-gray-950 text-white text-center">
      <h2 className="text-3xl font-bold mb-12">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <div key={index}>
            <div className="text-4xl font-bold text-yellow-400">{stat.value}</div>
            <div className="text-sm uppercase tracking-wider text-muted">{stat.label}</div>
            <p className="text-gray-400 text-sm mt-2">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SaintSalStats;
