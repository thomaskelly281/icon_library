import { mdiRelationOneOrManyToMany } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RelationOneOrManyToMany(props: IconComponentProps) {
  return <Icon path={mdiRelationOneOrManyToMany} {...props} />;
}

export { mdiRelationOneOrManyToMany as path };
