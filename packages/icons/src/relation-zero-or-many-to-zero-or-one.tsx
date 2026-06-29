import { mdiRelationZeroOrManyToZeroOrOne } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RelationZeroOrManyToZeroOrOne(props: IconComponentProps) {
  return <Icon path={mdiRelationZeroOrManyToZeroOrOne} {...props} />;
}

export { mdiRelationZeroOrManyToZeroOrOne as path };
