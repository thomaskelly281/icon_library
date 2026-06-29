import { mdiRelationOnlyOneToZeroOrMany } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RelationOnlyOneToZeroOrMany(props: IconComponentProps) {
  return <Icon path={mdiRelationOnlyOneToZeroOrMany} {...props} />;
}

export { mdiRelationOnlyOneToZeroOrMany as path };
