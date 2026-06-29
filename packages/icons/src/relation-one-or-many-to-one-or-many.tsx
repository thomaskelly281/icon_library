import { mdiRelationOneOrManyToOneOrMany } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RelationOneOrManyToOneOrMany(props: IconComponentProps) {
  return <Icon path={mdiRelationOneOrManyToOneOrMany} {...props} />;
}

export { mdiRelationOneOrManyToOneOrMany as path };
