import { mdiRelationOnlyOneToMany } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RelationOnlyOneToMany(props: IconComponentProps) {
  return <Icon path={mdiRelationOnlyOneToMany} {...props} />;
}

export { mdiRelationOnlyOneToMany as path };
