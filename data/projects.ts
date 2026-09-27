export type Project = {
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  links: { live?: string; github?: string };
};

export const projects: Project[] = [
  {
    title: "Secure Sentry Robot",
    tagline: "Hardware-backed mTLS for an autonomous robot.",
    description:
      "Security layer for an android-based temi robot talking to aws iot core over mqtt. device credentials live in the android keystore (strongbox/tee) as non-exportable keys, and a test pki proves the mutual-tls handshake while rejecting clients without ca-signed certificates.",
    stack: ["Java", "Android Keystore", "AWS IoT Core", "MQTT", "mTLS", "OpenSSL"],
    links: {},
  },
  {
    title: "Aivory",
    tagline: "Product recognition with computer vision.",
    description:
      "full-stack flask app that uses resnet18 to identify uploaded product images and compare them against an inventory database. users can view product details and add new items with metadata so they become searchable in future uploads.",
    stack: ["Python", "Flask", "PyTorch", "ResNet18", "HTML", "CSS"],
    links: { github: "TODO" },
  },
  {
    title: "Airline Passenger Service",
    tagline: "In-flight service, from your seat.",
    description:
      "web platform that lets passengers order food, request items, and call a flight attendant from their own device, with asynchronous data handling for real-time passenger-to-crew communication.",
    stack: ["TypeScript", "CSS"],
    links: { github: "TODO" },
  },
];