import { mdiRelationZeroOrManyToOneOrMany } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RelationZeroOrManyToOneOrMany(props: IconComponentProps) {
  return <Icon path={mdiRelationZeroOrManyToOneOrMany} {...props} />;
}

export { mdiRelationZeroOrManyToOneOrMany as path };
