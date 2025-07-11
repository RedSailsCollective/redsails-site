// src/pages/data/apps.js
export const apps = [
  {
    id: 'redsails-monitor',
    title: 'RedSails Monitor',
    description: `
A lightweight, real-time desktop dashboard built in **WPF + C#**.

RedSails Monitor displays live CPU, GPU, RAM and fan stats against an animated “code-rain” backdrop. Threaded sensor polling keeps it smooth, while a transparent-overlay mode makes it perfect for a second monitor or stream overlay.

**Tech:** C#, WPF, XAML, MVVM-lite, LibreHardwareMonitor  
**Highlights**
• Real-time sensor updates  
• Transparent overlay (no task-bar clutter)  
• Themed UI with CodeRain animation  
• Modular monitors for CPU, GPU, RAM & fans  
• Easily extensible for logging, alerts or OBS overlay
    `.trim(),
    thumbnail: '/images/redsails-monitor/thumb.png',
    href: 'https://github.com/RedSailsCollective/systemmonitor/releases/tag/Windows'
  },

  // add more apps here…
];
