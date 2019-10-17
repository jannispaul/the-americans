import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import React from "react"

import BlockQuote from "./Blockquote"

const richTextOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const {
        title,
        description,
        file,
      } = node.childContentfulPodcastBodyRichTextNode.content.data.target.fields
      const mimeType = file.de.contentType
      const mimeGroup = mimeType.split("/")[0]

      switch (mimeGroup) {
        case "image":
          return (
            <img
              title={title ? title.de : null}
              alt={description ? description.de : null}
              src={file.de.url}
            />
          )
        // case "application":
        //   return (
        //     <a
        //       alt={description ? description["en-US"] : null}
        //       href={file["en-US"].url}
        //     >
        //       {title ? title["en-US"] : file["en-US"].details.fileName}
        //     </a>
        //   )
        // default:
        //   return (
        //     <span style={{ backgroundColor: "red", color: "white" }}>
        //       {" "}
        //       {mimeType} embedded asset{" "}
        //     </span>
        //   )
      }
    },
    // [BLOCKS.EMBEDDED_ENTRY]: node => {
    //   const fields =
    //     node.childContentfulPodcastBodyRichTextNode.content.data.target.fields
    //   switch (
    //     node.childContentfulPodcastBodyRichTextNode.content.data.target.sys
    //       .contentType.sys.id
    //   ) {
    //     case "blockquote":
    //       return (
    //         <div>
    //           <BlockQuote
    //             quoteText={fields.quoteText["en-US"]}
    //             quoter={fields.quoter["en-US"]}
    //           />
    //         </div>
    //       )
    //     default:
    //       return <div>??????????????? {title} </div>
    //   }
    // },
  },
}

let ContentfulRichText = function(text) {
  return documentToReactComponents(JSON.parse(text.text), richTextOptions)
}

export default ContentfulRichText
