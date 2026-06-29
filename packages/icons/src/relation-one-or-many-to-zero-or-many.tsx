import { mdiRelationOneOrManyToZeroOrMany } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RelationOneOrManyToZeroOrMany(props: IconComponentProps) {
  return <Icon path={mdiRelationOneOrManyToZeroOrMany} {...props} />;
}

export { mdiRelationOneOrManyToZeroOrMany as path };
