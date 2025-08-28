// src/data/timelineData.js
import { Calendar, Mic, Rocket } from "lucide-react";

// Each object = one node in the orbit timeline
const timelineData = [
    {
        id: 1,
        title: "Kickoff Event",                      // 👈 node label
        content: "Keshav Sadhna, famed for his role as Karan in College Romance, captivates millions with his authentic acting, infectious energy, and versatility, emerging as a leading face of India’s digital entertainment and Gen-Z storytelling.", // 👈 card content
        status: "completed",                         // "completed" | "in-progress" | "pending"
        icon: Calendar,
        relatedIds: [2, 3],                          // 👈 connected nodes
    },
    {
        id: 2,
        title: "DIKSHANT",
        content: "Dikshant Jadhav is a rising music star known for his soulful voice and hit song 'Aankhon Se Batana' which has garnered millions of streams and widespread acclaim for its emotional depth.",
        status: "in-progress",
        icon: Mic,
        relatedIds: [1],
    },
    {
        id: 3,
        title: "HARINI SIVAKUMAR",
        content: "Harini Sivakumar, a former homemaker, founded Earth Rhythm after seeking safe, non-toxic skincare for her special-needs son. Starting small, she built a Rs 200 crore, plastic-negative clean beauty brand inspiring wellness and sustainability.",
        status: "pending",
        icon: Rocket,
        relatedIds: [1],
    },
];

export default timelineData;
