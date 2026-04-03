"use client";

import { TinaEditProvider } from "tinacms/dist/edit-state";

export default function TinaProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TinaEditProvider
      editMode={
        <div className="fixed bottom-4 right-4 z-50">
          <a
            href="/admin"
            className="bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg hover:opacity-90 transition-opacity"
          >
            Edit with Tina
          </a>
        </div>
      }
    >
      {children}
    </TinaEditProvider>
  );
}
