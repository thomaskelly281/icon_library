import { mdiRelationOneToZeroOrOne } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RelationOneToZeroOrOne(props: IconComponentProps) {
  return <Icon path={mdiRelationOneToZeroOrOne} {...props} />;
}

export { mdiRelationOneToZeroOrOne as path };
