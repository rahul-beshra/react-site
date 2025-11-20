import React from 'react';
import Container from '../components/ui/Container.jsx';
import SectionHeader from '../components/ui/SectionHeader.jsx';
import Card from '../components/ui/Card.jsx';
import blogPosts from '../data/blogPosts.js';

export default function Blog() {
  return (
    <section className="bg-slate-950 py-12">
      <Container className="space-y-10">
        <SectionHeader
          eyebrow="Notes"
          title="Writing about interfaces, code, and focus."
          subtitle="These posts are stubs. Swap the content with your own or wire them up to a real CMS when you’re ready."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.map(post => (
            <Card key={post.id} className="flex flex-col gap-3">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                {new Date(post.date).toLocaleDateString(undefined, {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </p>
              <h3 className="text-sm font-semibold text-slate-50">
                {post.title}
              </h3>
              <p className="text-xs text-slate-400">{post.excerpt}</p>
              <p className="mt-auto text-[11px] font-medium text-slate-500">
                {post.readTime} read
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
