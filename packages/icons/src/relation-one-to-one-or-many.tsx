import { mdiRelationOneToOneOrMany } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RelationOneToOneOrMany(props: IconComponentProps) {
  return <Icon path={mdiRelationOneToOneOrMany} {...props} />;
}

export { mdiRelationOneToOneOrMany as path };
