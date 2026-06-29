import { mdiRelationZeroOrManyToOne } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RelationZeroOrManyToOne(props: IconComponentProps) {
  return <Icon path={mdiRelationZeroOrManyToOne} {...props} />;
}

export { mdiRelationZeroOrManyToOne as path };
