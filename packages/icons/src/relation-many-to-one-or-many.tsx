import { mdiRelationManyToOneOrMany } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RelationManyToOneOrMany(props: IconComponentProps) {
  return <Icon path={mdiRelationManyToOneOrMany} {...props} />;
}

export { mdiRelationManyToOneOrMany as path };
