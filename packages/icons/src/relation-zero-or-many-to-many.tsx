import { mdiRelationZeroOrManyToMany } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RelationZeroOrManyToMany(props: IconComponentProps) {
  return <Icon path={mdiRelationZeroOrManyToMany} {...props} />;
}

export { mdiRelationZeroOrManyToMany as path };
