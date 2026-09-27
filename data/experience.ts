export type Job = {
  company: string;
  role: string;
  dates: string;
  location: string;
  blurb: string;
  stat?: { value: string; label: string };
};

export const experience: Job[] = [
  {
    company: "Infosys",
    role: "Software Engineering Intern · Security Lead",
    dates: "Jun 2026 → present",
    location: "Richardson, TX",
    blurb:
      "Owned the device-to-cloud security layer for a 6-person autonomous sentry robot project, designing mutual tls between an android-based temi robot and aws iot core over mqtt. built a hardware-backed key-management module in java that stores x.509 credentials in the android keystore as non-exportable keys, and validated a test pki (ec p-256 root ca) with openssl.",
    stat: { value: "mTLS", label: "robot ↔ aws iot core" },
  },
  {
    company: "University of Mississippi Medical Center",
    role: "Data Science Research & Lab Assistant",
    dates: "May 2025 → Aug 2025",
    location: "Jackson, MS",
    blurb:
      "Led daily lab sessions on python, statistical modeling, machine learning, and nlp. tutored students through real-world addiction-related datasets, including national health surveys, electronic health records, and social media data.",
  },
  {
    company: "UTD University Recreation",
    role: "Graphic Designer",
    dates: "Sep 2024 → Jun 2025",
    location: "Richardson, TX",
    blurb:
      "Designed flyers, banners, and digital graphics with the marketing team using illustrator, photoshop, and web technologies to promote campus events and reinforce utd's brand identity.",
  },
];