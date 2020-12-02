import React from "react";
import "./style.css";
import { Timeline, Event } from "react-trivial-timeline";
export default function App() {
  return (
    <Timeline lineColor="black">
      <Event interval={{ start: 2010 }} title="Event title" subtitle="Subtitle">
        Content
      </Event>
      <Event interval="2016 – 2019" title="Some text">
        Some content
      </Event>
    </Timeline>
  );
}
