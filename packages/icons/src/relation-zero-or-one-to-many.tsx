import { mdiRelationZeroOrOneToMany } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RelationZeroOrOneToMany(props: IconComponentProps) {
  return <Icon path={mdiRelationZeroOrOneToMany} {...props} />;
}

export { mdiRelationZeroOrOneToMany as path };
