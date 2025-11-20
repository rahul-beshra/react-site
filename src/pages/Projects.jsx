import React, { useState } from 'react';
import Container from '../components/ui/Container.jsx';
import SectionHeader from '../components/ui/SectionHeader.jsx';
import Card from '../components/ui/Card.jsx';
import projectsData from '../data/projects.js';

export default function Projects() {
  const [query, setQuery] = useState('');

  const filtered = projectsData.filter(project => {
    const q = query.toLowerCase();
    return (
      project.title.toLowerCase().includes(q) ||
      project.description.toLowerCase().includes(q) ||
      project.tags.some(tag => tag.toLowerCase().includes(q))
    );
  });

  return (
    <section className="bg-slate-950 py-12">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Projects"
          title="Interfaces that ship ideas."
          subtitle="A selection of UI-heavy projects that focus on speed, clarity, and maintainable code."
        />

        <div className="flex flex-wrap items-center justify-between gap-4">
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Filter by title or tag..."
            className="w-full max-w-xs rounded-full border border-slate-700/70 bg-slate-900/80 px-4 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-brand-500 focus:outline-none"
          />
          <p className="text-xs text-slate-500">
            Showing {filtered.length} of {projectsData.length} projects
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map(project => (
            <Card key={project.id} className="flex flex-col gap-3">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm font-semibold text-slate-50">
                  {project.title}
                </h3>
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-200">
                  {project.status}
                </span>
              </div>
              <p className="text-xs text-slate-400">{project.description}</p>
              <div className="mt-1 flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-800/80 px-2 py-0.5 text-[10px] text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
