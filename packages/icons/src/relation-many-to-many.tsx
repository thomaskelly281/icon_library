import { mdiRelationManyToMany } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RelationManyToMany(props: IconComponentProps) {
  return <Icon path={mdiRelationManyToMany} {...props} />;
}

export { mdiRelationManyToMany as path };
