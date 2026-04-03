// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "module",
        label: "Course Modules",
        path: "content/modules",
        format: "mdx",
        ui: {
          filename: {
            readonly: true,
            slugify: (values) => {
              return `${values?.slug || "module"}`;
            }
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Module Title",
            isTitle: true,
            required: true
          },
          {
            type: "number",
            name: "moduleNumber",
            label: "Module Number",
            required: true
          },
          {
            type: "string",
            name: "slug",
            label: "URL Slug",
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "Module Description",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "duration",
            label: "Estimated Duration"
          },
          {
            type: "object",
            name: "slides",
            label: "Slides",
            list: true,
            ui: {
              itemProps: (item) => ({
                label: item?.title || "Untitled Slide"
              })
            },
            fields: [
              {
                type: "string",
                name: "title",
                label: "Slide Title",
                required: true
              },
              {
                type: "string",
                name: "layout",
                label: "Slide Layout",
                options: [
                  { value: "title", label: "Title Slide" },
                  { value: "content", label: "Content" },
                  { value: "two-column", label: "Two Column" },
                  { value: "image-full", label: "Full Image" },
                  { value: "video", label: "Video" }
                ]
              },
              {
                type: "rich-text",
                name: "content",
                label: "Slide Content"
              },
              {
                type: "image",
                name: "image",
                label: "Slide Image"
              },
              {
                type: "string",
                name: "videoUrl",
                label: "Video URL"
              },
              {
                type: "string",
                name: "instructorNotes",
                label: "Instructor Notes",
                ui: {
                  component: "textarea"
                }
              }
            ]
          }
        ]
      },
      {
        name: "quiz",
        label: "Practice Quizzes",
        path: "content/quizzes",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Quiz Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "slug",
            label: "URL Slug",
            required: true
          },
          {
            type: "number",
            name: "passingScore",
            label: "Passing Score (%)"
          },
          {
            type: "object",
            name: "questions",
            label: "Questions",
            list: true,
            ui: {
              itemProps: (item) => ({
                label: item?.question?.substring(0, 40) || "New Question"
              })
            },
            fields: [
              {
                type: "string",
                name: "question",
                label: "Question Text",
                required: true,
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "string",
                name: "type",
                label: "Question Type",
                options: [
                  { value: "multiple-choice", label: "Multiple Choice" },
                  { value: "true-false", label: "True/False" }
                ]
              },
              {
                type: "object",
                name: "options",
                label: "Answer Options",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "text",
                    label: "Option Text"
                  },
                  {
                    type: "boolean",
                    name: "isCorrect",
                    label: "Is Correct"
                  }
                ]
              },
              {
                type: "string",
                name: "explanation",
                label: "Answer Explanation",
                ui: {
                  component: "textarea"
                }
              }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
