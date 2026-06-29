import { mdiRelationZeroOrOneToOneOrMany } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RelationZeroOrOneToOneOrMany(props: IconComponentProps) {
  return <Icon path={mdiRelationZeroOrOneToOneOrMany} {...props} />;
}

export { mdiRelationZeroOrOneToOneOrMany as path };
