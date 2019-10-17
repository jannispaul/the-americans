import React from "react"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

// const document = {
//   data: {},
//   content: [
//     {
//       data: {},
//       content: [
//         {
//           data: {},
//           marks: [],
//           value: "And lorem ipse umse else ",
//           nodeType: "text",
//         },
//       ],
//       nodeType: "paragraph",
//     },
//     {
//       data: {
//         target: {
//           sys: {
//             space: {
//               sys: {
//                 type: "Link",
//                 linkType: "Space",
//                 id: "mgv6ihmj33n2",
//               },
//             },
//             id: "c6Od9v3wzLOysiMum0Wkmme",
//             type: "Asset",
//             createdAt: "2019-08-25T18:43:16.179Z",
//             updatedAt: "2019-08-25T18:43:16.179Z",
//             environment: {
//               sys: {
//                 id: "master",
//                 type: "Link",
//                 linkType: "Environment",
//               },
//             },
//             revision: 1,
//           },
//           fields: {
//             title: {
//               de: "Woman with black hat",
//             },
//             description: {
//               de: "Woman wearing a black hat",
//             },
//             file: {
//               de: {
//                 url:
//                   "//images.ctfassets.net/mgv6ihmj33n2/6Od9v3wzLOysiMum0Wkmme/808e27bf1fa05726cebe6540f2ab273b/cameron-kirby-88711.jpg",
//                 details: {
//                   size: 7316629,
//                   image: {
//                     width: 3000,
//                     height: 2000,
//                   },
//                 },
//                 fileName: "cameron-kirby-88711.jpg",
//                 contentType: "image/jpeg",
//               },
//             },
//           },
//         },
//       },
//       content: [],
//       nodeType: "embedded-asset-block",
//     },
//     {
//       data: {},
//       content: [
//         {
//           data: {},
//           marks: [],
//           value: "",
//           nodeType: "text",
//         },
//       ],
//       nodeType: "paragraph",
//     },
//   ],
//   nodeType: "document",
// }

const document = {
  nodeType: "document",
  data: {},
  content: [
    {
      nodeType: "paragraph",
      data: {},
      content: [
        {
          nodeType: "text",
          value: "Hello world!",
          marks: [],
          data: {},
        },
      ],
    },
  ],
}
const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
  },
}

documentToReactComponents(document, options)
