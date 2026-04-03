"use client";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Tina CMS Admin</h1>
          <p className="text-slate-400 mb-8">
            Content management for the L1C Training Platform
          </p>
        </div>

        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 mb-8">
          <h2 className="text-lg font-semibold text-white mb-4">Development Mode</h2>
          <p className="text-slate-400 mb-4">
            In development, access the Tina CMS admin through the GraphQL playground:
          </p>
          <a
            href="http://localhost:4001/altair"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Open Tina GraphQL Playground
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        <div className="text-sm text-slate-500">
          <p className="mb-2">
            <strong className="text-slate-400">Content Location:</strong> Edit MDX files in <code className="bg-slate-700 px-2 py-1 rounded text-orange-400">content/modules/</code>
          </p>
          <p>
            <strong className="text-slate-400">GraphQL API:</strong>{" "}
            <a href="http://localhost:4001/graphql" className="text-orange-400 hover:underline">
              http://localhost:4001/graphql
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
