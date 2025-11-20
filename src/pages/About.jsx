import React from 'react';
import Container from '../components/ui/Container.jsx';
import SectionHeader from '../components/ui/SectionHeader.jsx';
import Card from '../components/ui/Card.jsx';
import Pill from '../components/ui/Pill.jsx';
import timeline from '../data/timeline.js';

const skills = [
  'React & TypeScript',
  'Tailwind CSS',
  'Design systems',
  'Accessibility-minded UI',
  'Product thinking',
  'Prototyping'
];

export default function About() {
  return (
    <section className="bg-slate-950 py-12">
      <Container className="space-y-12">
        <SectionHeader
          eyebrow="About"
          title="Designing focused interfaces with modern tools."
          subtitle="This page is a good place to talk about your experience, how you work, and what you care about in products."
        />

        <div className="grid gap-10 md:grid-cols-[3fr,2fr]">
          <div className="space-y-6">
            <Card className="space-y-3">
              <p className="text-sm text-slate-300">
                I like building interfaces that feel calm, responsive, and
                intentional. NovaSite is one example: it focuses on the parts of
                the stack that make a visible difference—typography, spacing, dark
                mode, and structure—without adding unnecessary complexity.
              </p>
              <p className="text-sm text-slate-300">
                Swap this copy with your own story: what you’ve worked on, what
                you’re learning, and what kinds of projects you’d like to take on
                next.
              </p>
            </Card>

            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <Pill key={skill}>{skill}</Pill>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
              Timeline
            </h3>
            <div className="space-y-3">
              {timeline.map(item => (
                <Card key={item.year} className="space-y-1.5">
                  <p className="text-[11px] font-semibold text-brand-200">
                    {item.year}
                  </p>
                  <p className="text-sm font-semibold text-slate-50">
                    {item.title}
                  </p>
                  <p className="text-xs text-slate-400">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
