import { mdiRelationManyToZeroOrMany } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RelationManyToZeroOrMany(props: IconComponentProps) {
  return <Icon path={mdiRelationManyToZeroOrMany} {...props} />;
}

export { mdiRelationManyToZeroOrMany as path };
