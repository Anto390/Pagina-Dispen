import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./AnimatedNavigationTabs.css";

interface NavTabItem {
  id: string | number;
  tile: string;
  href: string;
}

interface AnimatedNavigationTabsProps {
  items: NavTabItem[];
}

export function AnimatedNavigationTabs({ items }: AnimatedNavigationTabsProps) {
  const location = useLocation();

  return (
    <nav className="animated-tabs" aria-label="Navigation Tabs">
      {items.map((item) => {
        const isActive = location.pathname === item.href;
        return (
          <Link
            key={item.id}
            to={item.href}
            className={`animated-tab ${isActive ? "active" : ""}`}
          >
            {item.tile}
          </Link>
        );
      })}
    </nav>
  );
}
