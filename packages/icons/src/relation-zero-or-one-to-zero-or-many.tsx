import { mdiRelationZeroOrOneToZeroOrMany } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RelationZeroOrOneToZeroOrMany(props: IconComponentProps) {
  return <Icon path={mdiRelationZeroOrOneToZeroOrMany} {...props} />;
}

export { mdiRelationZeroOrOneToZeroOrMany as path };
