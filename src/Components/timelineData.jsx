// src/data/timelineData.js
import { Calendar, Mic, Rocket } from "lucide-react";

// Each object = one node in the orbit timeline
const timelineData = [
    {
        id: 1,
        title: "Kickoff Event",                      // 👈 node label
        content: "Project kickoff and scope alignment.", // 👈 card content
        status: "completed",                         // "completed" | "in-progress" | "pending"
        icon: Calendar,
        relatedIds: [2, 3],                          // 👈 connected nodes
    },
    {
        id: 2,
        title: "Speaker Onboarding",
        content: "Confirm speakers, collect bios, and prep slides.",
        status: "in-progress",
        icon: Mic,
        relatedIds: [1],
    },
    {
        id: 3,
        title: "Launch Day",
        content: "Public launch, PR push, and social media blast.",
        status: "pending",
        icon: Rocket,
        relatedIds: [1],
    },
];

export default timelineData;
