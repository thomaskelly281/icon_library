import { mdiRelationManyToZeroOrOne } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RelationManyToZeroOrOne(props: IconComponentProps) {
  return <Icon path={mdiRelationManyToZeroOrOne} {...props} />;
}

export { mdiRelationManyToZeroOrOne as path };
