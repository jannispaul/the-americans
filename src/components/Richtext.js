import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

class Welcome extends React.Component {
  document = this.props.document
  render() {
    return documentToReactComponents(document)
  }
}

export default Welcome
