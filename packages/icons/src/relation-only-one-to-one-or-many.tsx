import { mdiRelationOnlyOneToOneOrMany } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RelationOnlyOneToOneOrMany(props: IconComponentProps) {
  return <Icon path={mdiRelationOnlyOneToOneOrMany} {...props} />;
}

export { mdiRelationOnlyOneToOneOrMany as path };
