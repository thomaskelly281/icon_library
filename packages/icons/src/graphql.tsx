import { mdiGraphql } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Graphql(props: IconComponentProps) {
  return <Icon path={mdiGraphql} {...props} />;
}

export { mdiGraphql as path };
