import { mdiRelationOneToZeroOrMany } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RelationOneToZeroOrMany(props: IconComponentProps) {
  return <Icon path={mdiRelationOneToZeroOrMany} {...props} />;
}

export { mdiRelationOneToZeroOrMany as path };
