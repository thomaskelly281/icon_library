import { mdiRelationOneToMany } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RelationOneToMany(props: IconComponentProps) {
  return <Icon path={mdiRelationOneToMany} {...props} />;
}

export { mdiRelationOneToMany as path };
