import { mdiRelationZeroOrManyToZeroOrMany } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RelationZeroOrManyToZeroOrMany(props: IconComponentProps) {
  return <Icon path={mdiRelationZeroOrManyToZeroOrMany} {...props} />;
}

export { mdiRelationZeroOrManyToZeroOrMany as path };
