import { mdiRelationZeroOrOneToOne } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RelationZeroOrOneToOne(props: IconComponentProps) {
  return <Icon path={mdiRelationZeroOrOneToOne} {...props} />;
}

export { mdiRelationZeroOrOneToOne as path };
